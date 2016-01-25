import {ElementRef, Inject, Renderer} from "angular2/core";

// Services
import {CloakService} from "../../../services/CloakService";

declare var jqlite;

export class ToggleSidebar {
    public static EXPND_CLASS: string = "expanded";
    public static BTN_CLICK_CLASS: string = "clicked";
    public static sidebarEl: ElementRef;

    private _isExpanded: boolean;
    private _renderer: Renderer;
    private _cloakService: CloakService;

    private _buttonRef: ElementRef;
    private _isBtnClicked: boolean;

    constructor(@Inject(Renderer) renderer: Renderer, @Inject(CloakService) cloakSrv: CloakService) {
        this._renderer = renderer;
        this._isExpanded = false;

        this._cloakService = cloakSrv;
    }

    set buttonRef(value: ElementRef) {
        this._buttonRef = value;
        this._isBtnClicked = false;

        // Document event init when the button reference is loaded.
        this.documentHideOnClickOut();
    }

    public toggle(): void {
        this.setSidebarState(!this._isExpanded);

        this._cloakService.toggle();
        this.toggleButton();
    }

    private toggleButton(): void {
        this.setButtonState(!this._isBtnClicked);
    }

    private setSidebarState(isExpanded: boolean): void {
        this._isExpanded = isExpanded;
        this._renderer.setElementClass(ToggleSidebar.sidebarEl, ToggleSidebar.EXPND_CLASS, isExpanded);
    }

    private setButtonState(isClicked: boolean): void {
        this._isBtnClicked = isClicked;
        this._renderer.setElementClass(this._buttonRef, ToggleSidebar.BTN_CLICK_CLASS, isClicked);
    }

    private documentHideOnClickOut(): void {
        var self: this = this,
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
