import {ElementRef, Inject, Renderer} from "angular2/core";

export class CloakService {
    public static ACTIVE_CLASS: string = "activated";
    public static cloakEl: ElementRef;

    private _isActivated: boolean;
    private _renderer: Renderer;

    constructor(@Inject(Renderer) renderer: Renderer) {
        this._renderer = renderer;
        this._isActivated = false;
    }

    public activate(): void {
        this.setCloakState(true);
    }

    public deactivate(): void {
        this.setCloakState(false);
    }

    public toggle(): void {
        this.setCloakState(!this._isActivated);
    }

    private setCloakState(isActivated: boolean): void {
        this._isActivated = isActivated;
        this._renderer.setElementClass(CloakService.cloakEl, CloakService.ACTIVE_CLASS, isActivated);
    }
}
