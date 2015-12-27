import {Component, ViewEncapsulation} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

// Components
import {HomeCmp} from "../components/home/home";
import {AboutCmp} from "../components/about/about";
import {NameList} from "../services/name_list";

// Main Component
@Component({
    selector: "app",
    viewProviders: [NameList],
    templateUrl: "./app/app.html",
    styleUrls: ["./app/app.css"],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/", component: HomeCmp, as: "Home" },
    { path: "/about", component: AboutCmp, as: "About" }
])
export class AppCmp {}
