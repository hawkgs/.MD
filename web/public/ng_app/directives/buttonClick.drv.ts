import {Directive, ElementRef, Renderer} from "angular2/core";

// Services
import {IDocSaveManager} from "../components/editor/services/contracts/IDocSaveManager";
import {DocSaveManager} from "../components/editor/services/DocSaveManager";

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
    private _saveManager: IDocSaveManager;

    /**
     * Sets element reference, renderer and the DocSaveManager service.
     * @param elem
     * @param renderer
     * @param saveManager
     */
    constructor(elem: ElementRef, renderer: Renderer, saveManager: DocSaveManager) {
        this._elem = elem;
        this._renderer = renderer;
        this._saveManager = saveManager;
    }

    /**
     * Highlights the clicked button.
     */
    public onMousedown(): void {
        var self: ButtonClickDirective = this;

        this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, true);
        this._saveManager.uiFriendlySave(); // save

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
