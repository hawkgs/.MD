import {Directive, ElementRef, OnInit, OnDestroy} from "angular2/core";

// Services
import {OpenedSidebarExpandable} from "../../services/common/OpenedSidebarExpandable";
import {SidebarConsts} from "../../services/common/SidebarConsts";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[sb-expandable-drv]"
})
export class SbExpandableItemDirective implements OnInit, OnDestroy {
    private _displayBtn: HTMLElement;

    /**
     * Sets injected element reference and binds needed events.
     * @param elem
     */
    constructor(elem: ElementRef) {
        this._displayBtn = elem.nativeElement.querySelector("p:first-child");
    }

    /**
     * Click listener for menu toggling.
     * Note: Needs to be set that way, because TS doesn't allow static functions with unresolved 'this'.
     * @param event - Event target
     */
    private static clickListener = function (event) {
        var next = this.parentNode.childNodes[3]; // div sibling //todo

        if (OpenedSidebarExpandable.content && OpenedSidebarExpandable.content !== next) {
            SetClassNative.remove(OpenedSidebarExpandable.content, SidebarConsts.OPENED_CLASS);
        }

        OpenedSidebarExpandable.content = next;
        OpenedSidebarExpandable.button = this.parentNode;

        SetClassNative.toggle(OpenedSidebarExpandable.content, SidebarConsts.OPENED_CLASS);
    };

    /**
     * Adds the click event on directive init.
     */
    public ngOnInit(): void {
        this._displayBtn.addEventListener("click", SbExpandableItemDirective.clickListener);
    }

    /**
     * Removes the click event on directive destroy.
     */
    public ngOnDestroy(): void {
        this._displayBtn.removeEventListener("click", SbExpandableItemDirective.clickListener);
    }
}
