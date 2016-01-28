import {ElementRef, Inject, Renderer} from "angular2/core";

// Services
import {CloakService} from "../../../services/CloakService";

declare var jqlite;

/**
 * Sidebar toggle manager.
 */
export class ToggleSidebar {
    public static sidebarEl: ElementRef;
    private static EXPND_CLASS: string = "expanded";
    private static BTN_CLICK_CLASS: string = "clicked";

    private _isExpanded: boolean;
    private _renderer: Renderer;
    private _cloakService: CloakService;

    private _buttonRef: ElementRef;
    private _isBtnClicked: boolean;

    /**
     * Injects a Renderer and the cloak service.
     * @param renderer
     * @param cloakSrv
     */
    constructor(@Inject(Renderer) renderer: Renderer, @Inject(CloakService) cloakSrv: CloakService) {
        this._renderer = renderer;
        this._isExpanded = false;

        this._cloakService = cloakSrv;
    }

    /**
     * Sets the toggle button reference and initializes the corresponding events associated with it.
     * @param value - Reference to the button
     */
    set buttonRef(value: ElementRef) {
        this._buttonRef = value;
        this._isBtnClicked = false;

        // Document event init when the button reference is loaded.
        this.documentHideOnClickOut();
    }

    /**
     * Toggles the sidebar (on/off).
     */
    public toggle(): void {
        this.setSidebarState(!this._isExpanded);

        this._cloakService.toggle();
        this.toggleButton();
    }

    /**
     * Toggles button visual state (clicked or not).
     */
    private toggleButton(): void {
        this.setButtonState(!this._isBtnClicked);
    }

    /**
     * Sets sidebar state by a provided boolean value using the Renderer.
     * @param isExpanded
     */
    private setSidebarState(isExpanded: boolean): void {
        this._isExpanded = isExpanded;
        this._renderer.setElementClass(ToggleSidebar.sidebarEl, ToggleSidebar.EXPND_CLASS, isExpanded);
    }

    /**
     * Sets toggle button state by a provided boolean value using the Renderer.
     * @param isClicked
     */
    private setButtonState(isClicked: boolean): void {
        this._isBtnClicked = isClicked;
        this._renderer.setElementClass(this._buttonRef, ToggleSidebar.BTN_CLICK_CLASS, isClicked);
    }

    /**
     * Binds auto hide event to the document (DOM) so that whenever the user
     * clicks outside of the sidebar it gets hidden.
     */
    private documentHideOnClickOut(): void {
        var self: ToggleSidebar = this,
            sidebarId: string = "#" + ToggleSidebar.sidebarEl.nativeElement.id,
            buttonId: string = "#" + this._buttonRef.nativeElement.id;

        jqlite(document).on("click", function(event) {
            if (self._isExpanded &&
                !jqlite(event.target).closest(sidebarId).length &&
                !jqlite(event.target).closest(buttonId).length) {

                self.setButtonState(false);
                self.setSidebarState(false);
                self._cloakService.deactivate();
            }
        });
    }
}
