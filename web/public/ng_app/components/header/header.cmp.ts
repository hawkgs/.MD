import {Component, ViewEncapsulation} from "angular2/core";
import {Router} from "angular2/router";

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
import {OrderedListButtonDirective} from "./directives/orderedListButton.drv";
import {ImageButtonComponent} from "./directives/imageButton.cmp";
import {TableButtonComponent} from "./directives/tableButton.cmp";
import {FileNameInputDirective} from "./directives/fileNameInput.drv";

// common
import {TooltipDirective} from "./directives/common/tooltip.drv";
import {DropDownDirective} from "./directives/common/dropDown.drv";

// Services
import {DropDownMenuCloser} from "./services/common/DropDownMenuCloser";
import {GfmService} from "../../services/GfmService";
import {AuthService} from "../../services/AuthService";

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
        CodeButtonComponent,
        TooltipDirective,
        DropDownDirective,
        HeadingsButtonComponent,
        HyperlinkButtonDirective,
        UnorderedListButtonDirective,
        OrderedListButtonDirective,
        ImageButtonComponent,
        TableButtonComponent,
        FileNameInputDirective
    ]
})
export class HeaderComponent {
    public auth: AuthService;
    public router: Router;

    /**
     * Initializes all processes and events related with header toolbar. Injects and sets needed services.
     * @param dropDownCloser
     * @param auth
     * @param router
     */
    constructor(dropDownCloser: DropDownMenuCloser, auth: AuthService, router: Router) {
        this.auth = auth;
        this.router = router;

        dropDownCloser.bindCloseMenuOnDocumentClick();
    }

    /**
     * Get wrapper for isGfmOn static field.
     * @returns {boolean}
     */
    public get gfm(): boolean {
        return GfmService.isGfmOn;
    }
}
