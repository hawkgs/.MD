import {Component, ViewEncapsulation} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

// Components
import {HeaderComponent} from "../components/header/header.cmp";
import {EditorComponent} from "../components/editor/editor.cmp";
import {SidebarComponent} from "../components/sidebar/sidebar.cmp";
import {PreviewComponent} from "../components/preview/preview.cmp";
import {WindowsComponent} from "../components/windows/windows.cmp";

// Directives
import {CloakDirective} from "../directives/cloak.drv";
import {LoaderComponent} from "../directives/loader.cmp";

// Services
import {GfmService} from "../services/GfmService"; // Load-only
// savers
import {DocSaveManager} from "../components/editor/services/DocSaveManager";
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
        EditorComponent,
        SidebarComponent,
        PreviewComponent,
        WindowsComponent,
        CloakDirective,
        LoaderComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        GfmService,
        DocSaveManager,
        DocNameSaveManager,
        AuthService
    ]
})
@RouteConfig([
/*    { path: "/", component: HomeCmp, as: "Home" },
    { path: "/about", component: AboutCmp, as: "About" }*/
])
export class AppComponent {
    constructor (gfm: GfmService) { /***/ }
}
