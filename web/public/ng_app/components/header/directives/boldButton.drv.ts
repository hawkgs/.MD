import {Directive, Renderer} from "angular2/core";
//import {EditorRef} from "../../editor/services/EditorRef";

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
        document.execCommand("insertHTML", false, `<strong>${window.getSelection()}</strong>`);
    }
}
