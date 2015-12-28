import {Component, ElementRef} from "angular2/core";

// Services
import {ToggleSidebar} from "./services/ToggleSidebar";

@Component({
    selector: "[sidebar-cmp]",
    templateUrl: "./components/sidebar/sidebar.html",
    styleUrls: ["./components/sidebar/sidebar.css"]
    //providers: [ToggleSidebar]
})
export class SidebarComponent {
    constructor(elem: ElementRef) {
        // Attaches reference to the sidebar for outer use (static field)
        ToggleSidebar.sidebarEl = elem;
    }
}
