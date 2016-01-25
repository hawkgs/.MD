import {Component} from "angular2/core";

// Services
import {EditorSelection} from "../../editor/services/EditorSelection";

@Component({
    selector: "[img-btn-cmp]",
    template: `
        <div class="disp"></div>
        <div class="cont">
            <div class="item-cont">
                <input #url type="text" placeholder="Text" />
                <button class="default theme-bg dd-close" (click)="wrapInImage(url.value)">Create</button>
            </div>
        </div>`
})
export class ImageButtonComponent {
    public wrapInImage(url: string): void {
        var img;

        if (EditorSelection.sel) {
            EditorSelection.sel.deleteContents();

            img = this.createImageTag(url);
            EditorSelection.sel.insertNode(img);
        }
    }

    private createImageTag(url: string) {
        var img = document.createElement("img");

        img.src = url;
        img.alt = "";

        return img;
    }
}
