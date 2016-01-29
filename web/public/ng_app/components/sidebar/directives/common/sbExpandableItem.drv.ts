import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedSidebarExpandable} from "../../services/common/OpenedSidebarExpandable";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[sb-expandable-drv]"
})
export class SbExpandableItemDirective { // todo todo todo todo todo todo todo tododododo
    private static OPENED_CLASS: string = "expanded";
    private _nativeEl: any;

    /**
     * Sets injected element reference and binds needed events.
     * @param elem
     */
    constructor(elem: ElementRef) {
        this._nativeEl = elem.nativeElement;
        this.bindClickEvent();
    }

    /**
     * Binds click event to sidebar list item - open/close mechanism.
     */
    private bindClickEvent(): void {
        var displayBtn = this._nativeEl.childNodes[1]; // p button todo

        displayBtn.addEventListener("click", function (event) {
            var next = this.parentNode.childNodes[3]; // div sibling //todo

            if (OpenedSidebarExpandable.content && OpenedSidebarExpandable.content !== next) {
                SetClassNative.remove(OpenedSidebarExpandable.content, SbExpandableItemDirective.OPENED_CLASS);
            }

            OpenedSidebarExpandable.content = next;
            OpenedSidebarExpandable.button = this.parentNode;

            SetClassNative.toggle(OpenedSidebarExpandable.content, SbExpandableItemDirective.OPENED_CLASS);
        });
    }
}
