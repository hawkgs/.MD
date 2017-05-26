import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {AppComponent} from "./app/app.cmp";
//import {enableProdMode} from "angular2/core";

//enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
