import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Directives
import {PreviewComponent} from "../preview/preview.cmp";

// Interfaces
import {IAutoSaver} from "./services/contracts/IAutoSaver";

// Services
import {EditorSelection} from "./services/EditorSelection";
import {EditorRef} from "./services/EditorRef";
import {AutoSaver} from "./services/AutoSaver";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/editor/editor.html",
    styleUrls: ["./components/editor/editor.css"],
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent {
    private _autoSaver: IAutoSaver;

    /**
     * Sets injected element reference, loads auto saver, loads contents of current document.
     * @param elem
     */
    constructor(elem: ElementRef) {
        EditorRef.ref = elem.nativeElement.childNodes[1];
        this._autoSaver = AutoSaver.instance;

        this.loadCurrentDocument();
    }

    /**
     * Triggers on editor blurring and saves the last selection in a container (EditorSelection).
     */
    public containSelection(): void {
        var winSelection = window.getSelection();

        EditorSelection.sel = winSelection.getRangeAt(0);
        EditorSelection.getTextFromSelection(winSelection);
    }

    /**
     * Triggers on editor click whenever the preview is opened and hides it (preview).
     */
    public hidePreview(): void {
        if (PreviewComponent.isOpened) {
            PreviewComponent.togglePreview();
        }
    }

    /**
     * Calls the auto saver watcher on each key press.
     */
    public onKeyPressSave(): void {
        this._autoSaver.saveWatcher();
    }

    /**
     * Performs UI-friendly save on each pasting (Ctrl+V or 'Paste' from context menu).
     */
    public onPasteSave(): void {
        this._autoSaver.uiFriendlySave();
    }

    /**
     * Loads the contents of the previously worked document in the editor from the localStorage.
     */
    private loadCurrentDocument(): void {
        var storageData = localStorage.getItem(AutoSaver.LS_DOC_KEY);

        if (storageData) {
            EditorRef.ref.innerHTML = JSON.parse(storageData).html;
        }
    }
}
