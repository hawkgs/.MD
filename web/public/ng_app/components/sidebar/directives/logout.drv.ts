import {Directive, HostListener} from "angular2/core";
import {Router} from "angular2/router";

// Services
import {AuthService} from "../../../services/AuthService";

@Directive({
    selector: "[logout-drv]"
})
export class LogoutDirective {
    private _auth: AuthService;
    private _router: Router;

    /**
     * Sets the authentication and router services.
     * @param auth
     */
    constructor(auth: AuthService, router: Router) {
        this._auth = auth;
        this._router = router;
    }

    /**
     * Performs logout whenever the user click on the directive and then redirects to home page.
     */
    @HostListener("click")
    public logout(): void {
        this._auth.logout();
        this._router.navigate(["Home"]);
    }
}
