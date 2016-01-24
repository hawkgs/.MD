import {Component, ViewEncapsulation} from "angular2/core";

// Directives
import {ButtonClickDirective} from "../../directives/buttonClick.drv";
import {BoldButtonDirective} from "./directives/boldButton.drv";
import {ItalicButtonDirective} from "./directives/italicButton.drv";
import {BlockquoteButtonDirective} from "./directives/blockquoteButton.drv";
import {HorizontalRuleDirective} from "./directives/horizontalRuleButton.drv";
import {StrikethroughButtonDirective} from "./directives/strikethroughButton.drv";
import {SidebarButtonDirective} from "./directives/sidebarButton.drv";
import {HeadingsButtonComponent} from "./directives/headingsButton.cmp";
import {CodeButtonComponent} from "./directives/codeButton.cmp";
import {HyperlinkButtonDirective} from "./directives/hyperlinkButton.cmp";
import {UnorderedListButtonDirective} from "./directives/unorderedListButton.drv";

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
        BlockquoteButtonDirective,
        HorizontalRuleDirective,
        StrikethroughButtonDirective,
        SidebarButtonDirective,
        HeadingsButtonComponent,
        CodeButtonComponent,
        TooltipDirective,
        DropDownDirective,
        HyperlinkButtonDirective,
        UnorderedListButtonDirective
    ]
})
export class HeaderComponent {
    constructor(dropDownCloser: DropDownMenuCloser) {
        dropDownCloser.bindCloseMenuOnDocumentClick();
    }
}
