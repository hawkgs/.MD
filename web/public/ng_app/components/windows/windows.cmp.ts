import {Component} from "angular2/core";

// Directives
import {WindowComponent} from "./directives/common/window.cmp/window.cmp"; // common
import {RegisterWindowComponent} from "./directives/registerWindow.cmp/registerWindow.cmp";
import {AboutWindowComponent} from "./directives/aboutWindow.cmp/aboutWindow.cmp";

@Component({
    selector: "windows",
    templateUrl: "./components/windows/windows.html",
    directives: [
        WindowComponent,
        RegisterWindowComponent,
        AboutWindowComponent
    ]
})
export class WindowsComponent {}
