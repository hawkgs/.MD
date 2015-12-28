import {ElementRef, Inject, Renderer} from "angular2/core";

export class ToggleSidebar {
    public static EXPND_CLASS = "expanded";
    public static sidebarEl: ElementRef;

    private _isExpanded: boolean;
    private _renderer: Renderer;

    constructor(@Inject(Renderer) renderer: Renderer) {
        this._renderer = renderer;
        this._isExpanded = false;
    }

    public toggleSidebar() {
        this._isExpanded = !this._isExpanded;
        this._renderer.setElementClass(ToggleSidebar.sidebarEl, ToggleSidebar.EXPND_CLASS, this._isExpanded);
    }
}
