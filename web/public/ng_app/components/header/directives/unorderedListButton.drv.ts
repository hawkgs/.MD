import {Directive, HostListener, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Directive({
    selector: "[ul-btn-drv]"
})
export class UnorderedListButtonDirective {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps/inserts UL to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("insertUnorderedList", false);
    }
}
