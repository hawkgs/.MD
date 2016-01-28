import {Component, ElementRef} from "angular2/core";

// Components
import {SwitchControlComponent} from "../../directives/switchControl.cmp";

// Directives
import {SidebarListDirective} from "./directives/common/sidebarList.drv";

// Services
import {ToggleSidebar} from "./services/ToggleSidebar";

@Component({
    selector: "[sidebar-cmp]",
    templateUrl: "./components/sidebar/sidebar.html",
    styleUrls: ["./components/sidebar/sidebar.css"],
    directives: [
        SwitchControlComponent,
        SidebarListDirective
    ]
})
export class SidebarComponent {
    /**
     * Puts the injected sidebar element reference in a container.
     * @param elem
     */
    constructor(elem: ElementRef) {
        ToggleSidebar.sidebarEl = elem;
    }
}
