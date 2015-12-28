import {Directive, Renderer} from "angular2/core";

// Services
import {MdPreviewRef} from "../services/MdPreviewRef";

@Directive({
    selector: "[slider-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class SliderDirective {
    public static OPENED_CLASS = "opened";
    private _renderer: Renderer;
    private _isOpened: boolean;

    constructor(renderer: Renderer) {
        console.log("on slider");
        this._renderer = renderer;
        this._isOpened = false;
    }

    public onClick() {
        this._isOpened = !this._isOpened;
        this._renderer.setElementClass(MdPreviewRef.ref, SliderDirective.OPENED_CLASS, this._isOpened);
    }
}
