import {Directive, HostListener, Inject} from "angular2/core";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

@Directive({
    selector: "[hrule-btn-drv]"
})
export class HorizontalRuleDirective {
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Inserts HR in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        this._doc.execCommand("insertHorizontalRule", false);
    }
}
