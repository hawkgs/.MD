import {Component} from "angular2/core";

// Directives
import {WindowComponent} from "./directives/common/window.cmp/window.drv"; // common
import {RegisterWindowComponent} from "./directives/registerWindow.cmp/registerWindow.cmp";


@Component({
    selector: "windows",
    templateUrl: "./components/windows/windows.html",
    directives: [
        WindowComponent,
        RegisterWindowComponent
    ]
})
export class WindowsComponent {}
