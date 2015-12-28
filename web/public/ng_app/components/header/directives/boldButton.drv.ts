import {Directive, Renderer} from "angular2/core";
import {EditorRef} from "../../editor/services/EditorRef";

@Directive({
    selector: "[bold-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class BoldButtonDirective {
    private rend: Renderer;

    constructor(rend: Renderer) {
        this.rend = rend;
    }

    public onClick() {
        EditorRef.ref.style.background = "green";
    }
}
