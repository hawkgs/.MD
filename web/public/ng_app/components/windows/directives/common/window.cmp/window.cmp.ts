import {Component, ElementRef, Renderer, Input} from "angular2/core";

// Services
import {WinReferences} from "../../../services/WinReferences";
import {SetClassNative} from "../../../../../services/SetClassNative";
import {CloakService} from "../../../../../services/CloakService";

// Enums
import {CloakState} from "../../../../../services/enums/CloakState";

@Component({
    selector: "window",
    templateUrl: "./components/windows/directives/common/window.cmp/window.html",
    styleUrls: ["./components/windows/directives/common/window.cmp/window.css"]
})
export class WindowComponent {
    private static SHOW_CLASS: string = "show";
    private static cloakService: CloakService;

    @Input("win-title") title: string;
    @Input("win-id") id: string;

    private _nativeElem: HTMLElement;
    private _renderer: Renderer;

    /**
     * Sets injected element reference and renderer, gets cloak reference,
     * puts window reference in WinReference container.
     * @param elem
     * @param renderer
     */
    constructor(elem: ElementRef, renderer: Renderer) {
        this._nativeElem = elem.nativeElement.querySelector(".window"); // first child => .window element
        this._renderer = renderer;
        WindowComponent.cloakService = CloakService.getInstance(renderer); // todo not so cool

        this.setReference();
    }

    /**
     * Opens a window by provided ID (must be in WinReferences container).
     * @param id - ID of the window
     */
    public static open(id: string): void {
        var ref: HTMLElement = WinReferences.getRef(id);

        if (ref) {
            SetClassNative.add(ref, WindowComponent.SHOW_CLASS);
            WindowComponent.centerWindow(ref);

            WindowComponent.cloakService.activate();
            WindowComponent.cloakService.state = CloakState.Locked;
        }
    }

    /**
     * Centralizes the window according to the browser window by providing its reference.
     * @param ref - Reference of the window
     */
    private static centerWindow(ref: HTMLElement): void {
        var calculatedHeight: number = Math.round((window.innerHeight - ref.offsetHeight) / 2),
            calculatedWidth: number = Math.round((window.innerWidth - ref.offsetWidth) / 2);

        ref.style.top = calculatedHeight.toString() + "px";
        ref.style.left = calculatedWidth.toString() + "px";
    }

    /**
     * Closes the window on 'X' click.
     */
    public close(): void {
        SetClassNative.remove(this._nativeElem, WindowComponent.SHOW_CLASS);

        WindowComponent.cloakService.state = CloakState.Free;
        WindowComponent.cloakService.deactivate();
    }

    // todo: Bad design! This is a temporary method until a more convenient way is found.
    /**
     * Puts the window reference in a container by the given this.winId.
     */
    private setReference(): void {
        var self: WindowComponent = this,
            LISTEN_FREQ: number = 300, // ms
            iterations: number = 0,
            IT_LIMIT: number = 10,
            listener;

        listener = setInterval(function () {
            iterations += 1;

            if (self.id) {
                WinReferences.setRef(self.id, self._nativeElem);
                clearInterval(listener);
            } else if (iterations >= IT_LIMIT) {
                console.error("Window Error: window ID is not set (or timeout).");
                clearInterval(listener);
            }
        }, LISTEN_FREQ);
    }
}
