import {Component, ViewEncapsulation} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

// Components
import {HeaderComponent} from "../components/header/header.cmp";
import {EditorComponent} from "../components/editor/editor.cmp";
import {SidebarComponent} from "../components/sidebar/sidebar.cmp";
import {PreviewComponent} from "../components/preview/preview.cmp";

// Directives
//import {CloakDirective} from "../directives/cloak.drv";
//import {LoaderDirective} from "../directives/cloak.drv";

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
        PreviewComponent
    ]
})
@RouteConfig([
/*    { path: "/", component: HomeCmp, as: "Home" },
    { path: "/about", component: AboutCmp, as: "About" }*/
])
export class AppComponent {}
