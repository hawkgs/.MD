import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedDropDown} from "../../services/common/OpenedDropDown";
import {DropDownConsts} from "../../services/common/DropDownConsts";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[drop-down-drv]"
})
export class DropDownDirective {
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
                SetClassNative.remove(OpenedDropDown.openedMenu, DropDownConsts.OPENED_CLASS);
                SetClassNative.remove(OpenedDropDown.button, DropDownConsts.BTN_CLICK_CLASS);
            }

            OpenedDropDown.openedMenu = next;
            OpenedDropDown.button = this.parentNode;

            SetClassNative.toggle(OpenedDropDown.openedMenu, DropDownConsts.OPENED_CLASS);
            SetClassNative.toggle(OpenedDropDown.button, DropDownConsts.BTN_CLICK_CLASS);
        });
    }
}
