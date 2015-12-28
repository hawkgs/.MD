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

    private elem: any;
    private renderer: any;

    constructor(elem: ElementRef, renderer: Renderer) {
        this.elem = elem;
        this.renderer = renderer;
    }

    public onMousedown(): void {
        var self = this;

        this.renderer.setElementClass(this.elem, "click", true);

        setTimeout(function () {
            self.onMouseup();
        }, ButtonClickDirective.REMOVE_AFTER);
    }

    public onMouseup(): void {
        this.renderer.setElementClass(this.elem, "click", false);
    }
}
