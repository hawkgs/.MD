import {Component} from "angular2/core";

// Services
import {EditorSelection} from "../../editor/services/EditorSelection";

@Component({
    selector: "[hlink-btn-cmp]",
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input #url type="text" placeholder="Text" />
                <button class="default theme-bg dd-close" (click)="wrapInAnchor(url.value)">Create</button>
            </div>
        </div>`
})
export class HyperlinkButtonDirective {
    public wrapInAnchor(url: string) {
        var a;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            a = this.createAnchorTag(url);
            EditorSelection.sel.insertNode(a);
        }
    }

    private createAnchorTag(url: string) {
        var a = document.createElement("a");

        a.href = url;
        a.innerHTML = EditorSelection.text;

        return a;
    }
}
