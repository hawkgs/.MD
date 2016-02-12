import {ElementRef, Injectable, Renderer} from "angular2/core";

// Enums
import {CloakState} from "./enums/CloakState";

/**
 * In charge for managing the cloak that covers the editor whenever a side operation is in process.
 */
@Injectable()
export class CloakService {
    public static cloakEl: ElementRef;
    private static ACTIVE_CLASS: string = "activated";
    private static instance: CloakService;

    private _isActivated: boolean;
    private _state: CloakState;
    private _renderer: Renderer;

    /**
     * Injects a Renderer (angular2/core) and sets default state to deactivated.
     * @param renderer
     */
    constructor(renderer: Renderer) {
        this._renderer = renderer;
        this._isActivated = false;
        this._state = CloakState.Free;
    }

    /**
     * Returns the instance of the CloakService by providing Renderer.
     * Note: The Renderer is injected that way since I couldn't find an appropriate way to do it with a singleton
     * pattern whenever a service is requested in another service. This could be changed/redesigned in future.
     * @param renderer - A renderer instance
     * @returns {CloakService}
     */
    public static getInstance(renderer: Renderer): CloakService {
        if (!CloakService.instance) {
            CloakService.instance = new CloakService(renderer);
        }

        return CloakService.instance;
    }

    /**
     * _state getter.
     * @returns {CloakState}
     */
    public get state(): CloakState {
        return this._state;
    }

    /**
     * _state setter.
     * @param value
     */
    public set state(value: CloakState) {
        this._state = value;
    }

    /**
     * Activates the cloak, if its free and not active.
     */
    public activate(): void {
        if (!this._isActivated && this._state === CloakState.Free) {
            this.setCloakActivationState(true);
        }
    }

    /**
     * Deactivates the cloak, if its free and active.
     */
    public deactivate(): void {
        if (this._isActivated && this._state === CloakState.Free) {
            this.setCloakActivationState(false);
        }
    }

    /**
     * Toggles the cloak (on/off), if its free.
     */
    public toggle(): void {
        if (this._state === CloakState.Free) {
            this.setCloakActivationState(!this._isActivated);
        }
    }

    /**
     * Gets a cloak state as parameter and sets it to this._isActivated.
     * @param isActivated
     */
    private setCloakActivationState(isActivated: boolean): void {
        this._isActivated = isActivated;
        this._renderer.setElementClass(CloakService.cloakEl, CloakService.ACTIVE_CLASS, isActivated);
    }
}
