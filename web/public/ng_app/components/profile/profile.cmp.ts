import {Component} from "angular2/core";
import {Router} from "angular2/router";

// Services
import {AuthService} from "../../services/AuthService";

@Component({
    selector: "profile",
    template: ""
})
export class ProfileComponent {
    public auth: AuthService;
    private _router: Router;

    // todo
    constructor(auth: AuthService, router: Router) {
        // Protected route
        if (!auth.isAuthenticated) {
            router.navigate(["Home"]);
        }

        this.auth = auth;
        this._router = router;
    }
}
