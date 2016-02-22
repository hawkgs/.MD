import {Injectable, ElementRef, Renderer} from "angular2/core";

// Enums
import {NotifierType} from "./enums/NotifierType";

@Injectable()
export class NotifierService {
    private static ACTIVE_CLASS: string = "active";
    private static ACTIVE_DURATION: number = 3000;

    private _elem: ElementRef;
    private _renderer: Renderer;
    private _message: string;

    constructor(renderer: Renderer) {
        this._renderer = renderer;
    }

    public set elem(value: ElementRef) {
        this._elem = value;
    }

    public get message(): string {
        return this._message;
    }

    public show(type: NotifierType, message: string) {
        this._message = message;

        console.log(type);

        this._renderer.setElementClass(this._elem, "success", true);
        this._renderer.setElementClass(this._elem, NotifierService.ACTIVE_CLASS, true);

        setTimeout(() => {
            this._renderer.setElementClass(this._elem, NotifierService.ACTIVE_CLASS, false);
        }, NotifierService.ACTIVE_DURATION);
    }

    private applyNotifierType() {
        console.log();
    }
}
