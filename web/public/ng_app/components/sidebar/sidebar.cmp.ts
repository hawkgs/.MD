import {Component, ElementRef} from "angular2/core";

// Directives
import {LoginFormComponent} from "./directives/loginForm.cmp";
import {LogoutDirective} from "./directives/logout.drv";
import {ExportMdComponent} from "./directives/exportMd.cmp";
import {NewDocumentDirective} from "./directives/newDocument.drv";
import {GfmToggleComponent} from "./directives/gfmToggle.cmp";
import {ThemeSelectorComponent} from "./directives/themeSelector.cmp";
import {AboutDirective} from "./directives/about.drv";

// common
import {SbExpandableItemDirective} from "./directives/common/sbExpandableItem.drv";

// Services
import {ToggleSidebar} from "./services/ToggleSidebar";
import {AuthService} from "../../services/AuthService";

@Component({
    selector: "[sidebar-cmp]",
    templateUrl: "./components/sidebar/sidebar.html",
    styleUrls: ["./components/sidebar/sidebar.css"],
    providers: [ToggleSidebar],
    directives: [
        LoginFormComponent,
        LogoutDirective,
        ExportMdComponent,
        NewDocumentDirective,
        GfmToggleComponent,
        ThemeSelectorComponent,
        AboutDirective,
        SbExpandableItemDirective
    ]
})
export class SidebarComponent {
    public auth: AuthService;

    /**
     * Puts the injected sidebar element reference in a container and sets AuthService.
     * @param elem
     * @param auth
     */
    constructor(elem: ElementRef, auth: AuthService) {
        ToggleSidebar.sidebarEl = elem;
        this.auth = auth;
    }
}
