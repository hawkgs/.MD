import {Directive, ElementRef, Renderer} from "angular2/core";

// Services
import {IAutoSaver} from "../components/editor/services/contracts/IAutoSaver";
import {AutoSaver} from "../components/editor/services/AutoSaver";

@Directive({
    selector: "[btn-click]",
    host: {
        "(mousedown)": "onMousedown()",
        "(mouseup)": "onMouseup()"
    }
})
export class ButtonClickDirective {
    private static REMOVE_AFTER: number = 500; // 0.5s
    private static CLICK_CLASS: string = "click";

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _autoSaver: IAutoSaver;

    /**
     * Sets element reference, renderer and the AutoSaver service.
     * @param elem
     * @param renderer
     */
    constructor(elem: ElementRef, renderer: Renderer) {
        this._elem = elem;
        this._renderer = renderer;
        this._autoSaver = AutoSaver.instance;
    }

    /**
     * Highlights the clicked button.
     */
    public onMousedown(): void {
        var self: ButtonClickDirective = this;

        this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, true);
        this._autoSaver.uiFriendlySave(); // save

        setTimeout(function () {
            self.onMouseup();
        }, ButtonClickDirective.REMOVE_AFTER);
    }

    /**
     * Un-highlights the clicked button.
     */
    public onMouseup(): void {
        this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, false);
    }
}
