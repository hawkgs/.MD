import {Component} from "angular2/core";

// Directives
import {WindowComponent} from "./directives/common/window.cmp/window.cmp"; // common
import {RegisterWindowComponent} from "./directives/registerWindow.cmp/registerWindow.cmp";
import {AboutWindowComponent} from "./directives/aboutWindow.cmp/aboutWindow.cmp";
import {NewDocWindowComponent} from "./directives/newDocWindow.cmp";

// Services
import {AuthService} from "../../services/AuthService";

@Component({
    selector: "windows",
    templateUrl: "./components/windows/windows.html",
    directives: [
        WindowComponent,
        RegisterWindowComponent,
        AboutWindowComponent,
        NewDocWindowComponent
    ]
})
export class WindowsComponent {
    public auth: AuthService;

    /**
     *
     * @param auth
     */
    constructor(auth: AuthService) {
        this.auth = auth;
    }
}
