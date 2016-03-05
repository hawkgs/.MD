import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[blockquote-btn-drv]"
})
export class BlockquoteButtonDirective {
    /**
     * Wraps/inserts BLOCKQUOTE to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("formatBlock", false, "<BLOCKQUOTE>");
    }
}
