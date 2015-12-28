import {Component} from "angular2/core";

// Directives
import {ButtonClickDirective} from "../../directives/buttonClick.drv";
import {BoldButtonDirective} from "./directives/boldButton.drv";

// common
import {TooltipDirective} from "./directives/common/tooltip.drv";

@Component({
    selector: "[header-cmp]",
    templateUrl: "./components/header/header.html",
    styleUrls: ["./components/header/header.css"],
    directives: [
        ButtonClickDirective,
        BoldButtonDirective,
        TooltipDirective
    ]
})
export class HeaderComponent {}
