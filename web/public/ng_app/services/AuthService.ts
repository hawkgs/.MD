import {Injectable} from "angular2/core";
import {Http/*, Response*/} from "angular2/http";

// Interfaces
import {ILoginCredentials} from "../components/sidebar/directives/contracts/ILoginCredentials";
//import {Observable} from "rxjs/Observable";
//import {Headers} from "angular2/http";
//import {RequestOptions} from "angular2/http";

@Injectable()
export class AuthService {
    //private static LOGIN_API_URL: string = "/login";
    private _http: Http;

    constructor(http: Http) {
        this._http = http;
    }

    public login(credentials: ILoginCredentials) {
        var stringifyied =  JSON.stringify(credentials);

        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        console.log("fuck oyou");

        return this._http.post("/login", stringifyied)
            .map(res => res.json().data)
            .do(data => console.log(data));
    }
    //
    //private handleError (error: any) {
    //    // in a real world app, we may send the server to some remote logging infrastructure
    //    // instead of just logging it to the console
    //    console.error(error);
    //    return Promise.reject(error.message || error.json().error || 'Server error');
    //}
    //
    //private handleError2 (error: Response) {
    //    // in a real world app, we may send the server to some remote logging infrastructure
    //    // instead of just logging it to the console
    //    console.error(error);
    //    return Observable.throw(error.json().error || 'Server error');
    //}
}
