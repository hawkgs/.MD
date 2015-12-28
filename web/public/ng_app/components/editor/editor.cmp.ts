import {Component, ElementRef} from "angular2/core";

// Services
import {EditorRef} from "./services/EditorRef";

@Component({
    selector: "[editor-cmp]",
    templateUrl: "./components/editor/editor.html",
    styleUrls: ["./components/editor/editor.css"],
    directives: []
})
export class EditorComponent {
    constructor(elem: ElementRef) {
        // We are setting the reference to #editor that way
        // todo: pay attention to this
        EditorRef.ref = elem.nativeElement.childNodes[1];
    }
}
