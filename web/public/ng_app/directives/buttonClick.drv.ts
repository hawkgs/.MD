import {Directive, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: "[btn-click]",
    host: {
        "(mousedown)": "onMousedown()",
        "(mouseup)": "onMouseup()"
    }
})
export class ButtonClickDirective {
    public static REMOVE_AFTER: number = 500; // 0.5s

    private _elem: ElementRef;
    private _renderer: Renderer;

    constructor(elem: ElementRef, renderer: Renderer) {
        this._elem = elem;
        this._renderer = renderer;
    }

    public onMousedown(): void {
        var self: this = this;

        this._renderer.setElementClass(this._elem, "click", true);

        setTimeout(function () {
            self.onMouseup();
        }, ButtonClickDirective.REMOVE_AFTER);
    }

    public onMouseup(): void {
        this._renderer.setElementClass(this._elem, "click", false);
    }
}
