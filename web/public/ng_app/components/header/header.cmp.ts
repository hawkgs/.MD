import {Component, ViewEncapsulation} from "angular2/core";

// Directives
import {ButtonClickDirective} from "../../directives/buttonClick.drv";
import {BoldButtonDirective} from "./directives/boldButton.drv";
import {ItalicButtonDirective} from "./directives/italicButton.drv";
import {SidebarButtonDirective} from "./directives/sidebarButton.drv";
import {HeadingsButtonComponent} from "./directives/headingsButton.cmp";

// common
import {TooltipDirective} from "./directives/common/tooltip.drv";
import {DropDownDirective} from "./directives/common/dropDown.drv";

// Services
import {DropDownMenuCloser} from "./services/common/DropDownMenuCloser"; // Needs to be loaded only

@Component({
    selector: "[header-cmp]",
    templateUrl: "./components/header/header.html",
    styleUrls: ["./components/header/header.css"],
    encapsulation: ViewEncapsulation.None,
    providers: [DropDownMenuCloser],
    directives: [
        ButtonClickDirective,
        BoldButtonDirective,
        ItalicButtonDirective,
        SidebarButtonDirective,
        HeadingsButtonComponent,
        TooltipDirective,
        DropDownDirective
    ]
})
export class HeaderComponent {
    constructor(dropDownCloser: DropDownMenuCloser) {
        dropDownCloser.bindCloseMenuOnDocumentClick();
    }
}
