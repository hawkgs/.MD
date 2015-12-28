import {Component, ViewEncapsulation} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

// Components

// Main Component
@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
/*    { path: "/", component: HomeCmp, as: "Home" },
    { path: "/about", component: AboutCmp, as: "About" }*/
])
export class AppComponent {}
