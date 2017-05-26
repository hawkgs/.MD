import {Directive, HostListener, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Directive({
    selector: "[italic-btn-drv]"
})
export class ItalicButtonDirective {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps/inserts I (italic) to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("italic", false);
    }
}
