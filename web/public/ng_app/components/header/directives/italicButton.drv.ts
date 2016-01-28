import {Directive} from "angular2/core";

@Directive({
    selector: "[italic-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class ItalicButtonDirective {
    /**
     * Wraps/inserts I (italic) to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("italic", false);
    }
}
