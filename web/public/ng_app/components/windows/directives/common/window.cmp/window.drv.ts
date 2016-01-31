import {Component, Input} from "angular2/core";

@Component({
    selector: "window",
    templateUrl: "./components/windows/directives/common/window.cmp/window.html",
    styleUrls: ["./components/windows/directives/common/window.cmp/window.css"]
})
export class WindowComponent {
    @Input() title;

    public closeWindow(): void {
        // ...
    }
}
