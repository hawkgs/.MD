import {Component, ElementRef} from "angular2/core";

// Components
import {SwitchControlComponent} from "../../directives/switchControl.cmp";

// Services
import {ToggleSidebar} from "./services/ToggleSidebar";

@Component({
    selector: "[sidebar-cmp]",
    templateUrl: "./components/sidebar/sidebar.html",
    styleUrls: ["./components/sidebar/sidebar.css"],
    directives: [SwitchControlComponent]
})
export class SidebarComponent {
    constructor(elem: ElementRef) {
        // Attaches reference to the sidebar for outer use (static field)
        ToggleSidebar.sidebarEl = elem;
    }
}
