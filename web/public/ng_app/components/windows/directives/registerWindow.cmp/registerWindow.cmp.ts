import {Component, Input} from "angular2/core";

@Component({
    selector: "[register-win-cmp]",
    templateUrl: "./components/windows/directives/registerWindow.cmp/register-window.html"
})
export class RegisterWindowComponent {
    @Input("win-id") id: string;
}
