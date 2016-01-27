import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Directives
import {PreviewComponent} from "../preview/preview.cmp";

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
    private _autoSaver: AutoSaver;

    constructor(elem: ElementRef) {
        EditorRef.ref = elem.nativeElement.childNodes[1];
        this._autoSaver = AutoSaver.instance;

        this.loadCurrentDocument();
    }

    public containSelection(): void {
        var winSelection = window.getSelection();

        EditorSelection.sel = winSelection.getRangeAt(0);
        EditorSelection.getTextFromSelection(winSelection);
    }

    public hidePreview(): void {
        if (PreviewComponent.isOpened) {
            PreviewComponent.togglePreview();
        }
    }

    public onKeyPressSave(): void {
        this._autoSaver.saveWatcher();
    }

    public onPasteSave(): void {
        this._autoSaver.uiFriendlySave();
    }

    private loadCurrentDocument(): void {
        var storageData = localStorage.getItem(AutoSaver.LS_DOC_KEY);

        if (storageData) {
            EditorRef.ref.innerHTML = JSON.parse(storageData).html;
        }
    }
}
