import {Directive, HostListener, ElementRef} from "angular2/core";

// Services
import {ToggleSidebar} from "../../sidebar/services/ToggleSidebar";
import {CloakService} from "../../../services/CloakService"; // Required as dependency for ToggleSidebar service

@Directive({
    selector: "[sidebar-btn-drv]",
    providers: [CloakService]
})
export class SidebarButtonDirective {
    private _sidebarService: ToggleSidebar;

    /**
     * Sets injected sidebar service and element reference.
     * @param sidebarService
     * @param elem
     */
    constructor(sidebarService: ToggleSidebar, elem: ElementRef) {
        this._sidebarService = sidebarService;
        this._sidebarService.buttonRef = elem;
    }

    /**
     * Toggles sidebar on click (on/off).
     */
    @HostListener("click")
    public onClick(): void {
        this._sidebarService.toggle();
    }
}
