import {Component, Inject} from "angular2/core";
import {NgModel} from "angular2/common";
import {DOCUMENT} from "angular2/src/platform/dom/dom_tokens";

// Services
import {EditorSelection} from "../../md_editor/editor/services/EditorSelection";

@Component({
    selector: "[img-btn-cmp]",
    directives: [NgModel],
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input type="text" [(ngModel)]="url" placeholder="URL" /><br/>
                <input type="text" [(ngModel)]="alternative" placeholder="Alternative Text" /><br/>
                <button class="default theme-bg dd-close" (click)="wrapInImage()">Create</button>
            </div>
        </div>`
})
export class ImageButtonComponent {
    public url: string;
    public alternative: string;
    private _doc;

    /**
     * Injects a 'document' for DOM manipulation.
     * @param doc
     */
    constructor(@Inject(DOCUMENT) doc) {
        this._doc = doc;
    }

    /**
     * Inserts IMG in the editor by a provided URL and Alt.
     */
    public wrapInImage(): void {
        var img;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            img = this.createImageTag(this.url, this.alternative);
            EditorSelection.sel.insertNode(img);
        }
    }

    /**
     * Creates HTML for the IMG tag.
     * @param url - URL to the image
     * @param alt - Alternative text
     * @returns {HTMLImageElement|HTMLElement}
     */
    private createImageTag(url: string, alt: string): HTMLImageElement {
        var img = this._doc.createElement("img");

        img.src = url;
        img.alt = alt;

        return img;
    }
}
