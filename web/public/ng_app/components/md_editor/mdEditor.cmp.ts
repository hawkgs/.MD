import {Component} from "angular2/core";

// Directives
import {EditorComponent} from "./editor/editor.cmp";
import {PreviewComponent} from "./preview/preview.cmp";

@Component({
    selector: "md-editor",
    directives: [
        EditorComponent,
        PreviewComponent
    ],
    template: `
        <section editor-cmp id="main-field"></section>
        <preview-cmp></preview-cmp>`
})
export class MdEditorComponent {}
