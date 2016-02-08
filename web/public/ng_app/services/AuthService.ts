import {Injectable} from "angular2/core";
import {Http, Headers, RequestOptions} from "angular2/http";
import {Observable} from "rxjs/Observable";

// Interfaces
import {ILoginCredentials} from "../components/sidebar/directives/contracts/ILoginCredentials";
import {IServerAuthData} from "./contracts/IServerAuthData";

@Injectable()
export class AuthService {
    private static LOGIN_API_URL: string = "/login";
    private static LS_AUTH_DATA: string = "md_auth_data";
    private _http: Http;

    /**
     * Sets HTTP client.
     * @param http
     */
    constructor(http: Http) {
        this._http = http;
    }

    /**
     * Sends a POST request to the server in attempt for a login.
     * @param credentials
     * @returns {Observable<R>} Observable object to which we should .subscribe()
     */
    public login(credentials: ILoginCredentials): Observable<IServerAuthData> {
        var stringifyied =  JSON.stringify(credentials);

        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

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
}
