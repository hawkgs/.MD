import {Component, Inject, ElementRef, ViewEncapsulation, OnInit} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

// Directives
import {PreviewComponent} from "../preview/preview.cmp";

// Interfaces
import {IDocSaveManager} from "./services/contracts/IDocSaveManager";

// Services
import {EditorSelection} from "./services/EditorSelection";
import {EditorRef} from "./services/EditorRef";
import {DocSaveManager} from "./services/DocSaveManager";

// Wrappers
import {LocalStorage} from "../../../wrappers/LocalStorage";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/md_editor/editor/editor.html",
    styleUrls: ["./components/md_editor/editor/editor.css"],
    encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
    private _saveManager: IDocSaveManager;
    private _nativeEl: HTMLElement;
    private _doc;

    /**
     * Sets injected element reference, loads save manager, gets document.
     * @param doc
     * @param elem
     * @param saveManager
     */
    constructor(@Inject(DOCUMENT) doc, elem: ElementRef, saveManager: DocSaveManager) {
        this._doc = doc;
        this._nativeEl = elem.nativeElement;
        this._saveManager = saveManager;
    }

    /**
     * Sets native ElementRef, starts saver processes, loads current document.
     */
    public ngOnInit(): void {
        EditorRef.ref = this._nativeEl.querySelector("#editor");

        this._saveManager.initializeEvents();
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
     * Performs text formatting reset and UI-friendly save on each pasting (Ctrl+V or 'Paste' from context menu).
     */
    public onPaste(event): void {
        this.removeTextFormatting(event);
        this._saveManager.uiFriendlySave();
    }

    /**
     * Loads the contents of the previously worked document in the editor from the localStorage.
     */
    private loadCurrentDocument(): void {
        var storageData = LocalStorage.getItem(DocSaveManager.LS_DOC_KEY);

        if (storageData) {
            EditorRef.ref.innerHTML = JSON.parse(storageData).html;
        }
    }

    /**
     * Removes text formatting of the text contained in the clipboard (Used on paste).
     * @param event
     */
    private removeTextFormatting(event): void {
        var ev = event.originalEvent || event;

        if (ev) {
            event.preventDefault();

            let text: string = ev.clipboardData.getData("text/plain");
            this._doc.execCommand("insertText", false, text);
        }
    }
}
