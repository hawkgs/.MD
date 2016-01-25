import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Services
import {EditorSelection} from "./services/EditorSelection";
import {EditorRef} from "./services/EditorRef";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/editor/editor.html",
    styleUrls: ["./components/editor/editor.css"],
    encapsulation: ViewEncapsulation.None,
    directives: []
})
export class EditorComponent {
    constructor(elem: ElementRef) {
        EditorRef.ref = elem.nativeElement.childNodes[1];
    }

    public containSelection() {
        var winSelection = window.getSelection();

        EditorSelection.sel = winSelection.getRangeAt(0);
        EditorSelection.getTextFromSelection(winSelection);
    }
}
