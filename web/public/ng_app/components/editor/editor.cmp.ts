import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Directives
import {PreviewComponent} from "../preview/preview.cmp";

// Interfaces
import {IDocSaveManager} from "./services/contracts/IDocSaveManager";

// Services
import {EditorSelection} from "./services/EditorSelection";
import {EditorRef} from "./services/EditorRef";
import {DocSaveManager} from "./services/DocSaveManager";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/editor/editor.html",
    styleUrls: ["./components/editor/editor.css"],
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent {
    private _saveManager: IDocSaveManager;

    /**
     * Sets injected element reference, loads save manager, loads contents of current document.
     * @param elem
     * @param saveManager
     */
    constructor(elem: ElementRef, saveManager: DocSaveManager) {
        EditorRef.ref = elem.nativeElement.childNodes[1];
        this._saveManager = saveManager;

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
        this._saveManager.saveWatcher();
    }

    /**
     * Performs UI-friendly save on each pasting (Ctrl+V or 'Paste' from context menu).
     */
    public onPasteSave(): void {
        this._saveManager.uiFriendlySave();
    }

    /**
     * Loads the contents of the previously worked document in the editor from the localStorage.
     */
    private loadCurrentDocument(): void {
        var storageData = localStorage.getItem(DocSaveManager.LS_DOC_KEY);

        if (storageData) {
            EditorRef.ref.innerHTML = JSON.parse(storageData).html;
        }
    }
}
