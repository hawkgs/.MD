import {Directive} from "angular2/core";

@Directive({
    selector: "[bold-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class BoldButtonDirective {
    /**
     * Wraps/inserts B (bold) to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("bold", false);
    }
}
