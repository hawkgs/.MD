import {Component, ElementRef} from "angular2/core";

// Directives
import {LoginFormComponent} from "./directives/loginForm.cmp";
import {ExportMdComponent} from "./directives/exportMd.cmp";
import {ThemeSelectorComponent} from "./directives/themeSelector.cmp/themeSelector.cmp";

// common
import {SwitchControlComponent} from "../../directives/switchControl.cmp";
import {SbExpandableItemDirective} from "./directives/common/sbExpandableItem.drv";

// Services
import {ToggleSidebar} from "./services/ToggleSidebar";

@Component({
    selector: "[sidebar-cmp]",
    templateUrl: "./components/sidebar/sidebar.html",
    styleUrls: ["./components/sidebar/sidebar.css"],
    directives: [
        LoginFormComponent,
        ExportMdComponent,
        ThemeSelectorComponent,
        SwitchControlComponent,
        SbExpandableItemDirective
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
