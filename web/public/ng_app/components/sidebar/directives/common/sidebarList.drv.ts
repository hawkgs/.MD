import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedSidebarList} from "../../services/common/OpenedSidebarList";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[sb-list-drv]"
})
export class SidebarListDirective { // todo todo todo todo todo todo todo tododododo
    private static OPENED_CLASS: string = "to-be-set";
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
     *
     */
    private bindClickEvent(): void {
        var displayBtn = this._nativeEl.childNodes[1]; // .disp button todo

        displayBtn.addEventListener("click", function (event) {
            var next = this.parentNode.childNodes[3]; // .cont sibling

            if (OpenedSidebarList.content && OpenedSidebarList.content !== next) {
                SetClassNative.remove(OpenedSidebarList.content, SidebarListDirective.OPENED_CLASS);
            }

            OpenedSidebarList.content = next;
            OpenedSidebarList.button = this.parentNode;

            SetClassNative.toggle(OpenedSidebarList.content, SidebarListDirective.OPENED_CLASS);
        });
    }
}
