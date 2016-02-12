import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";

// Interfaces
import {ILoginCredentials} from "../components/sidebar/directives/contracts/ILoginCredentials";
import {IServerAuthData} from "./contracts/IServerAuthData";

@Injectable()
export class AuthService {
    private static LOGIN_API_URL: string = "/auth/login";
    //private static LOGOUT_API_URL: string = "/auth/logout";
    private static AUTH_API_URL: string = "/auth/valid";
    private static LS_AUTH_DATA: string = "md_auth_data";

    private _http: Http;
    private _isAuthenticated: boolean;

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
        var lsObj = localStorage.getItem(AuthService.LS_AUTH_DATA);

        return JSON.parse(lsObj).username;
    }

    /**
     * Sends a POST request to the server in attempt for a login.
     * @param credentials
     * @returns {Observable<R>} Observable object to which we should .subscribe()
     */
    public login(credentials: ILoginCredentials): Observable<IServerAuthData> {
        var stringifyied =  JSON.stringify(credentials),
            headers = new Headers({ "Content-Type": "application/json" }),
            options = new RequestOptions({ headers: headers });

        return this._http.post(AuthService.LOGIN_API_URL, stringifyied, options)
            .map(res => <IServerAuthData> res.json());
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

        localStorage.setItem(AuthService.LS_AUTH_DATA, JSON.stringify(authData));
    }

    private authValidityCheck(): void {
        if (!localStorage.getItem(AuthService.LS_AUTH_DATA)) {
            this._isAuthenticated = false;
            return;
        }

        let tokenHeader: Headers = this.getJwtBearerTokenHeader(),
            options = new RequestOptions({ headers: tokenHeader });

        this._http.get(AuthService.AUTH_API_URL, options)
            .map(res => res.json())
            .subscribe(
                data => this.processAuthValidity(data),
                err => console.error(err) // todo logger
            );
    }

    private processAuthValidity(data): void {
        if (!data.success) {
            localStorage.removeItem(AuthService.LS_AUTH_DATA);
            this._isAuthenticated = false;
        }

        this._isAuthenticated = true;
    }

    private getJwtBearerTokenHeader(): Headers {
        var token: string = JSON.parse(localStorage.getItem(AuthService.LS_AUTH_DATA)).token;

        return new Headers({ "Authorization": `Bearer ${token}` });
    }
}
