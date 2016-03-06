import {Directive, HostListener, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Directive({
    selector: "[ol-btn-drv]"
})
export class OrderedListButtonDirective {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps/inserts OL to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("insertOrderedList", false);
    }
}
