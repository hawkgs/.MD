import {Component, ElementRef} from "angular2/core";

// Directives
import {LoginFormComponent} from "./directives/loginForm.cmp";
import {ExportMdComponent} from "./directives/exportMd.cmp";
import {GfmToggleComponent} from "./directives/gfmToggle.cmp";
import {ThemeSelectorComponent} from "./directives/themeSelector.cmp";
import {AboutDirective} from "./directives/about.drv";

// common
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
        GfmToggleComponent,
        ThemeSelectorComponent,
        AboutDirective,
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
