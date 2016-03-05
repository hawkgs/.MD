import {
    ElementRef,
    Injectable,
    Renderer,
    RootRenderer,
    RenderComponentType,
    ViewEncapsulation
} from "angular2/core";

// Services
import {CloakService} from "../../../services/CloakService";
import {SetClassNative} from "../../../services/SetClassNative";
import {OpenedSidebarExpandable} from "./common/OpenedSidebarExpandable";
import {SidebarConsts} from "./common/SidebarConsts";

declare var jqlite;

/**
 * Sidebar toggle manager.
 */
@Injectable()
export class ToggleSidebar {
    private static EXPND_CLASS: string = "expanded";
    private static BTN_CLICK_CLASS: string = "clicked";

    private _sidebarRef: ElementRef;
    private _isExpanded: boolean;
    private _renderer: Renderer;
    private _cloakService: CloakService;

    private _buttonRef: ElementRef;
    private _isBtnClicked: boolean;

    /**
     * Injects a RootRenderer and gets CloakService instance.
     * @param rootRenderer
     */
    constructor(rootRenderer: RootRenderer) {
        var type = new RenderComponentType(Math.random().toString(), ViewEncapsulation.None, []);

        this._renderer = rootRenderer.renderComponent(type);
        this._isExpanded = false;

        this._cloakService = CloakService.getInstance(this._renderer);
    }

    /**
     * Sets the sidebar reference.
     * @param value - Reference to the sidebar
     */
    public set sidebarRef(value: ElementRef) {
        this._sidebarRef = value;

        // We don't know which reference will be set first - button or sidebar one
        this.attemptSettingHideEvent();
    }

    /**
     * Sets the toggle button reference and initializes the corresponding events associated with it.
     * @param value - Reference to the button
     */
    public set buttonRef(value: ElementRef) {
        this._buttonRef = value;
        this._isBtnClicked = false;

        // We don't know which reference will be set first - button or sidebar one
        this.attemptSettingHideEvent();
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
     * Attempts to set the hide event for the sidebar if both the button and sidebar references are present.
     */
    private attemptSettingHideEvent(): void {
        if (this._buttonRef && this._sidebarRef) {
            this.documentHideOnClickOut();
        }
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
        this._renderer.setElementClass(this._sidebarRef.nativeElement, ToggleSidebar.EXPND_CLASS, isExpanded);
    }

    /**
     * Sets toggle button state by a provided boolean value using the Renderer.
     * @param isClicked
     */
    private setButtonState(isClicked: boolean): void {
        this._isBtnClicked = isClicked;
        this._renderer.setElementClass(this._buttonRef.nativeElement, ToggleSidebar.BTN_CLICK_CLASS, isClicked);
    }

    /**
     * Binds auto hide event to the document (DOM) so that whenever the user
     * clicks outside of the sidebar it gets hidden.
     */
    private documentHideOnClickOut(): void {
        var self: ToggleSidebar = this,
            sidebarId: string = "#" + this._sidebarRef.nativeElement.id,
            buttonId: string = "#" + this._buttonRef.nativeElement.id;

        jqlite(document).on("click", function(event) {
            if (self._isExpanded &&
                !jqlite(event.target).closest(sidebarId).length &&
                !jqlite(event.target).closest(buttonId).length) {

                self.setButtonState(false);
                self.setSidebarState(false);
                self._cloakService.deactivate();

                if (OpenedSidebarExpandable.content) {
                    SetClassNative.remove(OpenedSidebarExpandable.content, SidebarConsts.OPENED_CLASS);
                }
            }
        });
    }
}
