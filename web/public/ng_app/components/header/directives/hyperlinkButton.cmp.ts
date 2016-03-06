import {Component, Inject} from "angular2/core";
import {NgModel} from "angular2/common";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

// Services
import {EditorSelection} from "../../md_editor/editor/services/EditorSelection";

@Component({
    selector: "[hlink-btn-cmp]",
    directives: [NgModel],
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input [(ngModel)]="url"  type="text" placeholder="URL" />
                <button class="default theme-bg dd-close" (click)="wrapInAnchor()">Create</button>
            </div>
        </div>`
})
export class HyperlinkButtonDirective {
    public url: string;
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Wraps the text selection in A tag by a provided @url.
     */
    public wrapInAnchor(): void {
        var a;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            a = this.createAnchorTag(this.url);
            EditorSelection.sel.insertNode(a);
        }
    }

    /**
     * Creates the HTML for the anchor tag.
     * @param url - URL to the source
     * @returns {HTMLAnchorElement|HTMLElement}
     */
    private createAnchorTag(url: string): HTMLAnchorElement {
        var a = this._doc.createElement("a");

        a.href = url;
        a.innerHTML = EditorSelection.text;

        return a;
    }
}
