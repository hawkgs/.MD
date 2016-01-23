import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Services
import {EditorRef} from "./services/EditorRef";
import {EditorSelection} from "./services/EditorSelection";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/editor/editor.html",
    styleUrls: ["./components/editor/editor.css"],
    encapsulation: ViewEncapsulation.None,
    directives: []
})
export class EditorComponent {
    constructor(elem: ElementRef) {
        // We are setting the reference to #editor that way
        // todo: pay attention to this
        EditorRef.ref = elem.nativeElement.childNodes[1];
    }

    public containSelection() {
        var winSelection = window.getSelection();

        EditorSelection.sel = winSelection.getRangeAt(0);
        this.getTextFromSelection(winSelection);
    }

    // todo: could move inside EditorSelection service
    private getTextFromSelection(winSelection) {
        var sel = winSelection,
            container;

        if (sel.rangeCount) {
            container = document.createElement("div");

            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }

            EditorSelection.text = container.innerHTML;
        }
    }
}
