import {ElementRef, Inject, Renderer} from "angular2/core";

// Services
import {CloakService} from "../../../services/CloakService";

export class ToggleSidebar {
    public static EXPND_CLASS = "expanded";
    public static BTN_CLICK_CLASS = "clicked";
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
    }

    public toggle() {
        this._isExpanded = !this._isExpanded;
        this._renderer.setElementClass(ToggleSidebar.sidebarEl, ToggleSidebar.EXPND_CLASS, this._isExpanded);

        this._cloakService.toggle();
        this.toggleButton();
    }

    private toggleButton() {
        this._isBtnClicked = !this._isBtnClicked;
        this._renderer.setElementClass(this._buttonRef, ToggleSidebar.BTN_CLICK_CLASS, this._isBtnClicked);
    }
}
