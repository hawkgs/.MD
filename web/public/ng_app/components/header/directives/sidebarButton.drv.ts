import {Directive} from "angular2/core";

// Services
import {ToggleSidebar} from "../../sidebar/services/ToggleSidebar";

@Directive({
    selector: "[sidebar-btn-drv]",
    providers: [ToggleSidebar],
    host: {
        "(click)": "onClick()"
    }
})
export class SidebarButtonDirective {
    private _sidebarService: ToggleSidebar;

    constructor(sidebarService: ToggleSidebar) {
        this._sidebarService = sidebarService;
    }

    public onClick() {
        this._sidebarService.toggleSidebar();
    }
}
