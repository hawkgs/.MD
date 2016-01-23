import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

// Services
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
        // We are setting the reference to #editor that way
        // todo: pay attention to this
        EditorRef.ref = elem.nativeElement.childNodes[1];
    }
}
