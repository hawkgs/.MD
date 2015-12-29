import {Component} from "angular2/core";

// Directives
import {MdPreviewDirective} from "./directives/mdPreview.drv";
import {CopyButtonDirective} from "./directives/copyButton.drv";

@Component({
    selector: "preview-cmp",
    templateUrl: "./components/preview/preview.html",
    styleUrls: ["./components/preview/preview.css"],
    directives: [
        MdPreviewDirective,
        CopyButtonDirective
    ]
})
export class PreviewComponent {
    public isOpened: boolean;

    constructor() {
        this.isOpened = false;
    }

    public openPreview(isOpened: boolean) {
        this.isOpened = isOpened;
    }
}
