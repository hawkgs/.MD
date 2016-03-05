import {Directive, HostListener, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: "[data-title]"
})
export class TooltipDirective {
    private static APPEAR: number = 1700;
    private static DISAPPEAR: number = TooltipDirective.APPEAR + 1000 * 3; // Show for 3 seconds
    private static TOOLTIP_CLASS: string = "tooltip";

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _timer;

    /**
     * Sets injected element reference and Renderer. Sets timer object.
     * @param elem
     * @param renderer
     */
    constructor(elem: ElementRef, renderer: Renderer) {
        this._elem = elem;
        this._renderer = renderer;
        this._timer = { appear: null, disappear: null };
    }

    /**
     * The tooltip appears after APPEAR time and disappears after DISAPPEAR.
     */
    @HostListener("mouseover")
    public onMouseover(): void {
        this._timer.appear = setTimeout(() => {
            this.showTooltipClass(true);
        }, TooltipDirective.APPEAR);

        this._timer.disappear = setTimeout(() => {
            this.showTooltipClass(false);
        }, TooltipDirective.DISAPPEAR);
    }

    /**
     * Tooltip disappears and clears all corresponding timer (so that they can be reset on mouseover).
     */
    @HostListener("mouseout")
    public onMouseout(): void {
        clearTimeout(this._timer.appear);
        clearTimeout(this._timer.disappear);

        this.showTooltipClass(false);
    }

    /**
     * Sets visibility state of the tooltip by a provided boolean value.
     * @param shouldShow
     */
    private showTooltipClass(shouldShow: boolean): void {
        this._renderer.setElementClass(this._elem.nativeElement, TooltipDirective.TOOLTIP_CLASS, shouldShow);
    }
}
