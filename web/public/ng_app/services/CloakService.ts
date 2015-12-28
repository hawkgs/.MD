import {ElementRef, Inject, Renderer} from "angular2/core";

export class CloakService {
    public static ACTIVE_CLASS = "activated";
    public static cloakEl: ElementRef;

    private _isActivated: boolean;
    private _renderer: Renderer;

    constructor(@Inject(Renderer) renderer: Renderer) {
        this._renderer = renderer;
        this._isActivated = false;
    }

    public activate() {
        this.toggleCloakClass(true);
    }

    public deactivate() {
        this.toggleCloakClass(false);
    }

    public toggle() {
        this.toggleCloakClass(!this._isActivated);
    }

    private toggleCloakClass(isActivated: boolean) {
        this._isActivated = isActivated;
        this._renderer.setElementClass(CloakService.cloakEl, CloakService.ACTIVE_CLASS, isActivated);
    }
}