import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";

// Interfaces
import {IRegisterData} from "../components/windows/directives/registerWindow.cmp/contracts/IRegisterData";
import {ILoginCredentials} from "../components/sidebar/directives/contracts/ILoginCredentials";
import {IServerRegistrationData} from "./contracts/IServerRegistrationData";
import {IServerAuthData} from "./contracts/IServerAuthData";

/**
 * Manages all of the processes related to user authentication.
 */
@Injectable()
export class AuthService {
    private static USER_API_URL: string = "/api/users";
    private static LOGIN_API_URL: string = "/auth/login";
    private static AUTH_API_URL: string = "/auth/valid";
    private static LS_AUTH_DATA: string = "md_auth_data";

    private _http: Http;
    private _isAuthenticated: boolean;
    private _username: string;
    private _token: string;

    /**
     * Sets HTTP client.
     * @param http
     */
    constructor(http: Http) {
        this._http = http;
        this.authValidityCheck();
    }

    /**
     * Returns the current authentication state of the user.
     * @returns {boolean}
     */
    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    /**
     * Returns the currently authenticated user.
     * @returns {string}
     */
    public get username(): string {
        var lsObj;

        if (!this._username) {
            lsObj = localStorage.getItem(AuthService.LS_AUTH_DATA);

            if (lsObj) {
                this._username = JSON.parse(lsObj).username;
            }
        }

        return this._username;
    }

    /**
     * Sends a POST request to the server in attempt for a login.
     * @param credentials
     * @returns {Observable<R>} Observable object to which we should .subscribe()
     */
    public login(credentials: ILoginCredentials): Observable<IServerAuthData> {
        if (this._isAuthenticated) {
            return;
        }

        let stringifyied = JSON.stringify(credentials),
            options = new RequestOptions({ headers: this.getJsonContentTypeHeader() });

        return this._http.post(AuthService.LOGIN_API_URL, stringifyied, options)
            .map(res => <IServerAuthData> res.json());
    }

    /**
     * Log outs the user by removing the auth data from the localStorage.
     */
    public logout(): void {
        if (this._isAuthenticated) {
            this._username = "";
            this._token = "";
            this._isAuthenticated = false;

            localStorage.removeItem(AuthService.LS_AUTH_DATA);
        }
    }

    /**
     * Sends a POST request to the server in attempt for a registration.
     * @param data - Form data
     * @returns {Observable<R>}
     */
    public register(data: IRegisterData): Observable<IServerRegistrationData> {
        if (this._isAuthenticated) {
            return;
        }

        let stringifyied = JSON.stringify(data),
            options = new RequestOptions({ headers: this.getJsonContentTypeHeader() });

        return this._http.post(AuthService.USER_API_URL, stringifyied, options)
            .map(res => <IServerRegistrationData> res.json());
    }

    /**
     * Saves the authentication data to the localStorage.
     * @param data
     */
    public saveAuthData(data: IServerAuthData): void {
        var authData = {
            username: data.username,
            token: data.token
        };

        this._username = data.username;
        this._token = data.token;
        this._isAuthenticated = true;

        localStorage.setItem(AuthService.LS_AUTH_DATA, JSON.stringify(authData));
    }

    /**
     * Performs validation check of the current JWT in the localStorage.
     */
    private authValidityCheck(): void {
        // If there is nothing in localStorage ...
        if (!localStorage.getItem(AuthService.LS_AUTH_DATA)) {
            this._isAuthenticated = false;
            return;
        }

        // Else check the validity of the token with a request to the server
        let tokenHeader: Headers = this.getJwtBearerHeader(),
            options = new RequestOptions({ headers: tokenHeader });

        this._http.get(AuthService.AUTH_API_URL, options)
            .map(res => res.json())
            .subscribe(
                data => this.processOkValidityRequest(data),
                err => this.processBadValidityRequest(err) // todo logger
            );
    }

    /**
     * Checks if the successful response is successful and if yes, sets the authentication state to true.
     * @param data - Returned JSON data from the validity request
     */
    private processOkValidityRequest(data): void {
        if (data.success) {
            this._isAuthenticated = true;
        }
    }

    /**
     * Checks whether the user is unauthenticated (401) or a server error occurred and sets the state accordingly.
     * @param error - Returned error from the bad request
     */
    private processBadValidityRequest(error): void {
        var body = error._body;

        if (error.status === 401 && !body.success) {
            localStorage.removeItem(AuthService.LS_AUTH_DATA);
            this._isAuthenticated = false;
        } else {
            console.error(error); // todo logger
        }
    }

    /**
     * Returns the Authorization header with the JWT.
     * @returns {Headers}
     */
    private getJwtBearerHeader(): Headers {
        if (!this._token) {
            this._token = JSON.parse(localStorage.getItem(AuthService.LS_AUTH_DATA)).token;
        }

        return new Headers({ "Content-Type": "application/json", "Authorization": `Bearer ${this._token}` });
    }

    /**
     * Returns JSON content type header.
     * @returns {Headers}
     */
    private getJsonContentTypeHeader(): Headers {
        return new Headers({ "Content-Type": "application/json" });
    }
}
