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

    private _elem: any;
    private _renderer: any;
    private _timer: any;

    constructor(elem: ElementRef, renderer: Renderer) {
        this._elem = elem;
        this._renderer = renderer;
        this._timer = { appear: null, disappear: null };
    }

    public onMouseover() {
        var self = this;

        this._timer.appear = setTimeout(function () {
            self.showTooltipClass(true);
        }, TooltipDirective.APPEAR);

        this._timer.disappear = setTimeout(function () {
            self.showTooltipClass(false);
        }, TooltipDirective.DISAPPEAR);
    }

    public onMouseout() {
        clearTimeout(this._timer.appear);
        clearTimeout(this._timer.disappear);

        this.showTooltipClass(false);
    }

    private showTooltipClass(shouldShow: boolean) {
        this._renderer.setElementClass(this._elem, "tooltip", shouldShow);
    }
}
