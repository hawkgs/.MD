import {ElementRef, Inject, Renderer} from "angular2/core";

export class CloakService {
    public static ACTIVE_CLASS = "activated";
    public static cloakEl: ElementRef;

    private _renderer: Renderer;

    constructor(@Inject(Renderer) renderer: Renderer) {
        this._renderer = renderer;
    }

    public static activate() {
        //CloakService.nativeEl.className += " " + CloakService.ACTIVE_CLASS;
    }

    public static deactivate() {
        //CloakService.nativeEl.className = CloakService.nativeEl.className.replace(CloakService.ACTIVE_CLASS, "");
    }
}
