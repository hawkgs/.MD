import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";

// Interfaces
import {ILoginCredentials} from "../components/sidebar/directives/contracts/ILoginCredentials";
import {IServerAuthData} from "./contracts/IServerAuthData";

/**
 * Manages all of the processes related to user authentication.
 */
@Injectable()
export class AuthService {
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

        let stringifyied =  JSON.stringify(credentials),
            headers = new Headers({ "Content-Type": "application/json" }),
            options = new RequestOptions({ headers: headers });

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

    public register(): void {
        // todo: not implemented
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
                data => this.processAuthValidity(data),
                err => console.error(err) // todo logger
            );
    }

    /**
     * Sets the authorization state by providing validity request output.
     * @param data - Returned JSON data from the validity request
     */
    private processAuthValidity(data): void {
        if (!data.success) {
            localStorage.removeItem(AuthService.LS_AUTH_DATA);
            this._isAuthenticated = false;
        } else {
            this._isAuthenticated = true;
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

        return new Headers({ "Authorization": `Bearer ${this._token}` });
    }
}
