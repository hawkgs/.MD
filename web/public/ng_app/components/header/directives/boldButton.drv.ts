import {Directive} from "angular2/core";
import {EditorRef} from "../../editor/services/EditorRef";

@Directive({
    selector: "[bold-btn-drv]",
    providers: [EditorRef],
    host: {
        "(click)": "onClick()"
    }
})
export class BoldButtonDirective {
    private editorRef: any;

    constructor(editor: EditorRef) {
        this.editorRef = editor;
    }

    public onClick() {
        this.editorRef.get().style.background = "green";
    }
}
