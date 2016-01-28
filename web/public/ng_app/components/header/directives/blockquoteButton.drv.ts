import {Directive} from "angular2/core";

@Directive({
    selector: "[blockquote-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class BlockquoteButtonDirective {
    /**
     * Wraps/inserts BLOCKQUOTE to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("formatBlock", false, "<BLOCKQUOTE>");
    }
}
