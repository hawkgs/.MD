import {Component, ElementRef, Renderer, Input, OnInit, OnDestroy} from "angular2/core";

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
export class WindowComponent implements OnInit, OnDestroy {
    private static SHOW_CLASS: string = "show";
    private static cloakService: CloakService;
    private static currentlyOpened: HTMLElement;

    @Input("win-title") title: string;
    @Input("win-id") id: string;

    private _nativeElem: HTMLElement;
    private _renderer: Renderer;

    /**
     * Sets injected element reference and renderer, gets cloak reference.
     * @param elem
     * @param renderer
     */
    constructor(elem: ElementRef, renderer: Renderer) {
        this._nativeElem = elem.nativeElement.querySelector(".window"); // first child => .window element
        this._renderer = renderer;
        WindowComponent.cloakService = CloakService.getInstance(renderer); // todo not so cool
    }

    /**
     * Opens a window by provided ID (must be in WinReferences container).
     * @param id - ID of the window
     */
    public static open(id: string): void {
        var ref: HTMLElement = WinReferences.getRef(id);

        if (ref && ref !== WindowComponent.currentlyOpened) {
            // Closes the currently opened window, if there is any.
            if (WindowComponent.currentlyOpened) {
                SetClassNative.remove(WindowComponent.currentlyOpened, WindowComponent.SHOW_CLASS);
            }

            WindowComponent.currentlyOpened = ref;
            SetClassNative.add(ref, WindowComponent.SHOW_CLASS);
            WindowComponent.centerWindow(ref);

            WindowComponent.cloakService.activate();
            WindowComponent.cloakService.state = CloakState.Locked;
        }
    }

    /**
     * Closes a window by provided ID (must be in WinReferences container).
     * @param id - ID of the window
     */
    public static close(id: string): void {
        var ref: HTMLElement = WinReferences.getRef(id);

        if (ref) {
            SetClassNative.remove(ref, WindowComponent.SHOW_CLASS);
            WindowComponent.unsetCorrespondingWindowObjects();
        }
    }

    /**
     * Unsets/removes/sets to initial state all objects/variables related to window opening.
     */
    private static unsetCorrespondingWindowObjects(): void {
        WindowComponent.currentlyOpened = null;
        WindowComponent.cloakService.state = CloakState.Free;
        WindowComponent.cloakService.deactivate();
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
     * Puts the window reference in a container by the given @id on window initialization.
     */
    public ngOnInit(): void {
        WinReferences.setRef(this.id, this._nativeElem);
    }

    /**
     * Removes the reference of the window from the container whenever it gets destroyed.
     */
    public ngOnDestroy(): void {
        WinReferences.removeRef(this.id);
    }

    /**
     * Closes the window on 'X' click.
     */
    public close(): void {
        SetClassNative.remove(this._nativeElem, WindowComponent.SHOW_CLASS);
        WindowComponent.unsetCorrespondingWindowObjects();
    }
}
