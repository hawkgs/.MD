import {ElementRef, Inject, Renderer} from "angular2/core";

/**
 * In charge for managing the cloak that covers the editor whenever a side operation is in process.
 */
export class CloakService {
    public static cloakEl: ElementRef;
    private static ACTIVE_CLASS: string = "activated";

    private _isActivated: boolean;
    private _renderer: Renderer;

    /**
     * Injects a Renderer (angular2/core) and sets default state to deactivated.
     * @param renderer
     */
    constructor(@Inject(Renderer) renderer: Renderer) {
        this._renderer = renderer;
        this._isActivated = false;
    }

    /**
     * Activates the cloak.
     */
    public activate(): void {
        this.setCloakState(true);
    }

    /**
     * Deactivates the cloak.
     */
    public deactivate(): void {
        this.setCloakState(false);
    }

    /**
     * Toggles the cloak (on/off).
     */
    public toggle(): void {
        this.setCloakState(!this._isActivated);
    }

    /**
     * Gets a cloak state as parameter and sets it to this._isActivated.
     * @param isActivated
     */
    private setCloakState(isActivated: boolean): void {
        this._isActivated = isActivated;
        this._renderer.setElementClass(CloakService.cloakEl, CloakService.ACTIVE_CLASS, isActivated);
    }
}
