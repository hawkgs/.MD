import {Component} from "angular2/core";

// Services
import {EditorSelection} from "../../md_editor/editor/services/EditorSelection";

@Component({
    selector: "[img-btn-cmp]",
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input #url type="text" placeholder="URL" /><br/>
                <input #alt type="text" placeholder="Alternative Text" /><br/>
                <button class="default theme-bg dd-close" (click)="wrapInImage(url.value, alt.value)">Create</button>
            </div>
        </div>`
})
export class ImageButtonComponent {
    /**
     * Inserts IMG in the editor by a provided URL and Alt.
     * @param url - URL to the image
     * @param alt - Alternative text
     */
    public wrapInImage(url: string, alt: string): void {
        var img;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            img = this.createImageTag(url, alt);
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
        var img = document.createElement("img");

        img.src = url;
        img.alt = alt;

        return img;
    }
}
