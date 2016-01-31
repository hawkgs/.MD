import {Component, ElementRef, Renderer, Input} from "angular2/core";

// Services
import {WinReferences} from "../../../services/WinReferences";
import {SetClassNative} from "../../../../../services/SetClassNative";

@Component({
    selector: "window",
    templateUrl: "./components/windows/directives/common/window.cmp/window.html",
    styleUrls: ["./components/windows/directives/common/window.cmp/window.css"]
})
export class WindowComponent {
    private static SHOW_CLASS: string = "show";

    @Input() title: string;
    @Input("win-id") winId: string;

    private _nativeElem: HTMLElement;
    private _renderer: Renderer;

    constructor(elem: ElementRef, renderer: Renderer) {
        this._nativeElem = elem.nativeElement.querySelector(".window"); // first child => .window element
        this._renderer = renderer;

        this.setReference();
    }

    public static open(id: string): void {
        var ref: HTMLElement = WinReferences.getRef(id);

        if (ref) {
            WindowComponent.centerWindow(ref);
            SetClassNative.add(ref, WindowComponent.SHOW_CLASS);
        }
    }

    private static centerWindow(ref: HTMLElement): void {
        //$window.css({
        //    top: ($pageWindow.outerHeight() - $window.outerHeight()) / 2,
        //    left: ($pageWindow.outerWidth() - $window.outerWidth()) / 2
        //});
    }

    public close(): void {
        SetClassNative.remove(this._nativeElem, WindowComponent.SHOW_CLASS);
    }

    public open(): void {
        WindowComponent.open(this.winId);
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

            if (self.winId) {
                WinReferences.setRef(self.winId, self._nativeElem);
                clearInterval(listener);
            } else if (iterations >= IT_LIMIT) {
                console.error("Window Error: window ID is not set (or timeout).");
                clearInterval(listener);
            }
        }, LISTEN_FREQ);
    }
}
