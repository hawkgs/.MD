import {Component} from "angular2/core";

import {WindowComponent} from "../common/window.cmp/window.cmp";

@Component({
    selector: "[about-win-cmp]",
    templateUrl: "./components/windows/directives/aboutWindow.cmp/about-window.html",
    styleUrls: ["./components/windows/directives/aboutWindow.cmp/about-window.css"]
})
export class AboutWindowComponent {
    private static ID: string = "about";

    /**
     * Provides static method for opening the window outside of this class.
     */
    public static open(): void {
        WindowComponent.open(AboutWindowComponent.ID);
    }
}
