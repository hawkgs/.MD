import {Directive, HostListener, ElementRef, Renderer} from "angular2/core";

// Services
import {MdPreviewRef} from "../services/MdPreviewRef";

@Directive({
    selector: "[copy-btn-drv]"
})
export class CopyButtonDirective {
    private static SUCC_CLASS: string = "success";
    private static ERR_CLASS: string = "error";
    private static SHOW_TIME: number = 350; // ms

    private _elem: ElementRef;
    private _renderer: Renderer;

    /**
     * Sets injected element reference and Renderer.
     * @param elem
     * @param renderer
     */
    constructor(elem: ElementRef, renderer: Renderer) {
        this._elem = elem;
        this._renderer = renderer;
    }

    /**
     * Copies the content of the preview to the user's clipboard.
     */
    @HostListener("click")
    public onClick(): void {
        var isSuccessful,
            self: CopyButtonDirective = this;

        MdPreviewRef.ref.focus();
        MdPreviewRef.ref.setSelectionRange(0, 9999);

        try {
            isSuccessful = document.execCommand("copy");

            if (isSuccessful) {
                this.setButtonClass(CopyButtonDirective.SUCC_CLASS, true);
            } else {
                this.setButtonClass(CopyButtonDirective.ERR_CLASS, true);
            }
        } catch (err) {
            this.setButtonClass(CopyButtonDirective.ERR_CLASS, true);
        }

        setTimeout(function () {
            self.setButtonClass(CopyButtonDirective.SUCC_CLASS, false);
            self.setButtonClass(CopyButtonDirective.ERR_CLASS, false);
        }, CopyButtonDirective.SHOW_TIME);
    }

    /**
     * Sets the class of the 'Copy To Clipboard' button according to the respective action outcome (succ/unsucc copy).
     * @param className
     * @param isAdd - Should the class be added or not (true/false)
     */
    private setButtonClass(className: string, isAdd: boolean): void {
        this._renderer.setElementClass(this._elem, className, isAdd);
    }
}
