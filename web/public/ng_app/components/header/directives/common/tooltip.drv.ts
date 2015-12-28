import {Directive, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: "[data-title]",
    host: {
        "(mouseover)": "onMouseover()",
        "(mouseout)": "onMouseout()"
    }
})
export class TooltipDirective {
    public static APPEAR: number = 1700;
    public static DISAPPEAR: number = TooltipDirective.APPEAR + 1000 * 3; // Show for 3 seconds

    private elem: any;
    private renderer: any;
    private timer: any;

    constructor(elem: ElementRef, renderer: Renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.timer = { appear: null, disappear: null };
    }

    public onMouseover() {
        var self = this;

        this.timer.appear = setTimeout(function () {
            self.showTooltipClass(true);
        }, TooltipDirective.APPEAR);

        this.timer.disappear = setTimeout(function () {
            self.showTooltipClass(false);
        }, TooltipDirective.DISAPPEAR);
    }

    public onMouseout() {
        clearTimeout(this.timer.appear);
        clearTimeout(this.timer.disappear);

        this.showTooltipClass(false);
    }

    private showTooltipClass(shouldShow: boolean) {
        this.renderer.setElementClass(this.elem, "tooltip", shouldShow);
    }
}
