import {Directive, HostListener, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Directive({
    selector: "[blockquote-btn-drv]"
})
export class BlockquoteButtonDirective {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps/inserts BLOCKQUOTE to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        this._doc.execCommand("formatBlock", false, "<BLOCKQUOTE>");
    }
}
