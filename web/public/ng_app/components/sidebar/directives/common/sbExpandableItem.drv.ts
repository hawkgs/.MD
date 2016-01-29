import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedSidebarExpandable} from "../../services/common/OpenedSidebarExpandable";
import {SidebarConsts} from "../../services/common/SidebarConsts";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[sb-expandable-drv]"
})
export class SbExpandableItemDirective {
    private _nativeEl: HTMLElement;

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
                SetClassNative.remove(OpenedSidebarExpandable.content, SidebarConsts.OPENED_CLASS);
            }

            OpenedSidebarExpandable.content = next;
            OpenedSidebarExpandable.button = this.parentNode;

            SetClassNative.toggle(OpenedSidebarExpandable.content, SidebarConsts.OPENED_CLASS);
        });
    }
}
