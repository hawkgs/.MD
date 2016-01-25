import {Component, ElementRef} from "angular2/core";

// Directives
import {MdPreviewDirective} from "./directives/mdPreview.drv";
import {CopyButtonDirective} from "./directives/copyButton.drv";

// Services
import {EditorRef} from "../editor/services/EditorRef";
import {MdPreviewRef} from "./services/MdPreviewRef";
import {MdParser} from "../editor/services/MdParser";

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
    public static MD_PREV_ID: string = "#md-preview"; // # is mandatory here
    public isOpened: boolean;

    constructor(elem: ElementRef) {
        this.isOpened = false;
    }

    public openPreview(isOpened: boolean): void {
        EditorRef.ref.setAttribute("contenteditable", !isOpened); // disables editing when opened

        // reloads MD only on opening
        if (isOpened) {
            this.loadMdInPreviewCont();
        }

        this.isOpened = isOpened;
    }

    private loadMdInPreviewCont(): void {
        var md: string;

        md = MdParser.parseHtmlToMd(EditorRef.ref.innerHTML);
        MdPreviewRef.ref.value = md;
    }
}
