import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedDropDown} from "../../services/common/OpenedDropDown";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[drop-down-drv]"
})
export class DropDownDirective {
    public static OPENED_CLASS: string = "opened";

    private _nativeEl: any;

    constructor(elem: ElementRef) {
        this._nativeEl = elem.nativeElement;
        this.bindClickEvent();
    }

    private bindClickEvent() {
        var displayBtn = this._nativeEl.childNodes[1]; // .disp button

        displayBtn.addEventListener("click", function () {
            var next = this.parentNode.childNodes[3]; // .cont sibling

            if (OpenedDropDown.openedMenu && OpenedDropDown.openedMenu !== next) {
                SetClassNative.remove(OpenedDropDown.openedMenu, DropDownDirective.OPENED_CLASS);
            }

            OpenedDropDown.openedMenu = next;
            SetClassNative.toggle(OpenedDropDown.openedMenu, DropDownDirective.OPENED_CLASS);
        });
    }
}
