import {Component} from "angular2/core";

import {WindowComponent} from "../common/window.cmp/window.cmp";

@Component({
    selector: "[register-win-cmp]",
    templateUrl: "./components/windows/directives/registerWindow.cmp/register-window.html",
    styleUrls: ["./components/windows/directives/registerWindow.cmp/register-window.css"]
})
export class RegisterWindowComponent {
    private static ID: string = "register";

    /**
     * Provides static method for opening the window outside of this class.
     */
    public static open(): void {
        WindowComponent.open(RegisterWindowComponent.ID);
    }
}
