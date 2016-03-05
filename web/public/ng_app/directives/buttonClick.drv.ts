import {Directive, HostListener, ElementRef, Renderer} from "angular2/core";

// Services
import {IDocSaveManager} from "../components/md_editor/editor/services/contracts/IDocSaveManager";
import {DocSaveManager} from "../components/md_editor/editor/services/DocSaveManager";

@Directive({
    selector: "[btn-click]"
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
    @HostListener("mousedown")
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
    @HostListener("mouseup")
    public onMouseup(): void {
        this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, false);
    }
}
