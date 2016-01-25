import {Directive, ElementRef} from "angular2/core";

// Services
import {OpenedDropDown} from "../../services/common/OpenedDropDown";
import {DropDownConsts} from "../../services/common/DropDownConsts";
import {SetClassNative} from "../../../../services/SetClassNative";

@Directive({
    selector: "[drop-down-drv]"
})
export class DropDownDirective {
    // The CLOSE_EL_CLASS represents all elements in the menu which can close it.
    public static CLOSE_EL_CLASS: string = "dd-close";
    private _nativeEl: any;

    constructor(elem: ElementRef) {
        this._nativeEl = elem.nativeElement;
        this.bindClickEvent();
        this.bindCloseAndCleanEvent();
    }

    private bindClickEvent(): void {
        var displayBtn = this._nativeEl.childNodes[1], // .disp button
            self: this = this;

        // Needed in order to keep focus over 'contenteditable' container, since .focus() is not a relevant solution.
        displayBtn.addEventListener("mousedown", function (ev) {
            ev.preventDefault();
        });

        displayBtn.addEventListener("click", function (event) {
            var next = this.parentNode.childNodes[3]; // .cont sibling

            if (OpenedDropDown.openedMenu && OpenedDropDown.openedMenu !== next) {
                self.closeCurrentlyOpenedMenu();
            }

            OpenedDropDown.openedMenu = next;
            OpenedDropDown.button = this.parentNode;

            SetClassNative.toggle(OpenedDropDown.openedMenu, DropDownConsts.OPENED_CLASS);
            SetClassNative.toggle(OpenedDropDown.button, DropDownConsts.BTN_CLICK_CLASS);
        });
    }

    private bindCloseAndCleanEvent(): void {
        var cont = this._nativeEl.childNodes[3],
            input = cont.querySelector("input[type=\"text\"]"), // Covers only one input per menu
            self: this = this;

        cont.addEventListener("click", function (event) {
            var elem: any = event.target; // todo bad any

            if (elem && elem.className.indexOf(DropDownDirective.CLOSE_EL_CLASS) !== -1) {
                self.closeCurrentlyOpenedMenu();

                if (input) {
                    input.value = "";
                }
            }
        });
    }

    private closeCurrentlyOpenedMenu(): void {
        SetClassNative.remove(OpenedDropDown.openedMenu, DropDownConsts.OPENED_CLASS);
        SetClassNative.remove(OpenedDropDown.button, DropDownConsts.BTN_CLICK_CLASS);
    }
}
