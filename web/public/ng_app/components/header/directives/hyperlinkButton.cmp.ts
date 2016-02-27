import {Component} from "angular2/core";

// Services
import {EditorSelection} from "../../md_editor/editor/services/EditorSelection";

@Component({
    selector: "[hlink-btn-cmp]",
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input #url type="text" placeholder="URL" />
                <button class="default theme-bg dd-close" (click)="wrapInAnchor(url.value)">Create</button>
            </div>
        </div>`
})
export class HyperlinkButtonDirective {
    /**
     * Wraps the text selection in A tag by a provided URL.
     * @param url - URL to the source
     */
    public wrapInAnchor(url: string): void {
        var a;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            a = this.createAnchorTag(url);
            EditorSelection.sel.insertNode(a);
        }
    }

    /**
     * Creates the HTML for the anchor tag.
     * @param url - URL to the source
     * @returns {HTMLAnchorElement|HTMLElement}
     */
    private createAnchorTag(url: string): HTMLAnchorElement {
        var a = document.createElement("a");

        a.href = url;
        a.innerHTML = EditorSelection.text;

        return a;
    }
}
