import {Component, ViewEncapsulation} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

// Components
import {HeaderComponent} from "../components/header/header.cmp";
import {MdEditorComponent} from "../components/md_editor/mdEditor.cmp";
import {SidebarComponent} from "../components/sidebar/sidebar.cmp";
import {WindowsComponent} from "../components/windows/windows.cmp";
import {ProfileComponent} from "../components/profile/profile.cmp";

// Directives
import {CloakDirective} from "../directives/cloak.drv";
import {LoaderComponent} from "../directives/loader.cmp";

// Services
import {GfmService} from "../services/GfmService"; // Load-only
import {ToggleSidebar} from "../components/sidebar/services/ToggleSidebar";
import {Logger} from "../services/Logger";
// savers
import {DocSaveManager} from "../components/md_editor/editor/services/DocSaveManager";
import {DocNameSaveManager} from "../components/header/services/DocNameSaveManager";
// authentication
import {AuthService} from "../services/AuthService";

// RxJS
import "rxjs/Rx"; // all operators

// Main Component (App)
@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    encapsulation: ViewEncapsulation.None,
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        SidebarComponent,
        WindowsComponent,
        CloakDirective,
        LoaderComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        GfmService,
        ToggleSidebar,
        Logger,
        DocSaveManager,
        DocNameSaveManager,
        AuthService
    ]
})
@RouteConfig([
    { path: "/", component: MdEditorComponent, as: "Home", useAsDefault: true },
    { path: "/profile", component: ProfileComponent, as: "Profile" },
])
export class AppComponent {
    constructor (gfm: GfmService) { /***/ }
}
