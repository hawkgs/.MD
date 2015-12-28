import {ElementRef, Inject, Renderer} from "angular2/core";

// Services
import {CloakService} from "../../../services/CloakService";

export class ToggleSidebar {
    public static EXPND_CLASS = "expanded";
    public static sidebarEl: ElementRef;

    private _isExpanded: boolean;
    private _renderer: Renderer;
    private _cloakService: CloakService;

    constructor(@Inject(Renderer) renderer: Renderer, @Inject(CloakService) cloakSrv: CloakService) {
        this._renderer = renderer;
        this._isExpanded = false;

        this._cloakService = cloakSrv;
    }

    public toggle() {
        this._isExpanded = !this._isExpanded;
        this._renderer.setElementClass(ToggleSidebar.sidebarEl, ToggleSidebar.EXPND_CLASS, this._isExpanded);
        
        this._cloakService.toggle();
    }
}
