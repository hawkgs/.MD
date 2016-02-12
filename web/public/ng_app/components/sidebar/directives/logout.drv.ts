import {Directive} from "angular2/core";

// Services
import {AuthService} from "../../../services/AuthService";

@Directive({
    selector: "[logout-drv]",
    host: {
        "(click)": "logout()"
    }
})
export class LogoutDirective {
    private _auth: AuthService;

    /**
     * Sets the authentication service.
     * @param auth
     */
    constructor(private auth: AuthService) {
        this._auth = auth;
    }

    /**
     * Performs logout whenever the user click on the directive.
     */
    public logout(): void {
        this._auth.logout();
    }
}
