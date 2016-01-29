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
    private static CLOSE_EL_CLASS: string = "dd-close";
    private _nativeEl: any;

    /**
     * Sets injected element reference and binds needed events.
     * @param elem
     */
    constructor(elem: ElementRef) {
        this._nativeEl = elem.nativeElement;
        this.bindClickEvent();
        this.bindCloseAndCleanEvent();
    }

    /**
     * Binds click event to the drop down - open/close mechanism.
     */
    private bindClickEvent(): void {
        var displayBtn = this._nativeEl.childNodes[1], // .disp button todo
            self: DropDownDirective = this;

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

    /**
     * Binds close and clean event to the drop down. Close - attached to CLOSE_EL_CLASS elements;
     * Clean - cleans the first found input[type="text"].
     */
    private bindCloseAndCleanEvent(): void {
        var cont = this._nativeEl.childNodes[3],
            input = cont.querySelector("input[type=\"text\"]"), // Covers only one input per menu
            self: DropDownDirective = this;

        cont.addEventListener("click", function (event) {
            var elem: any = event.target;

            if (elem && elem.className.indexOf(DropDownDirective.CLOSE_EL_CLASS) !== -1) {
                self.closeCurrentlyOpenedMenu();
                // todo: monitor this 'close' as it may cause issues - OpenDropDown container isn't emptied.

                if (input) {
                    input.value = "";
                }
            }
        });
    }

    /**
     * Closes currently opened menu by modifying OpenedDropDown container.
     */
    private closeCurrentlyOpenedMenu(): void {
        SetClassNative.remove(OpenedDropDown.openedMenu, DropDownConsts.OPENED_CLASS);
        SetClassNative.remove(OpenedDropDown.button, DropDownConsts.BTN_CLICK_CLASS);
    }
}
