import {Directive} from "angular2/core";

// Services
import {ToggleSidebar} from "../../sidebar/services/ToggleSidebar";
import {CloakService} from "../../../services/CloakService"; // Required as dependency for ToggleSidebar service

@Directive({
    selector: "[sidebar-btn-drv]",
    providers: [ToggleSidebar, CloakService],
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
        this._sidebarService.toggle();
    }
}
