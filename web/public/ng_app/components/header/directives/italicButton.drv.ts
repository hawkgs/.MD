import {Directive, Renderer} from "angular2/core";
import {EditorRef} from "../../editor/services/EditorRef";

@Directive({
    selector: "[italic-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class ItalicButtonDirective {
    private rend: Renderer;

    constructor(rend: Renderer) {
        this.rend = rend;
    }

    public onClick() {
        EditorRef.ref.style.background = "yellow";
    }
}
