import {Component} from "angular2/core";

// Directives
import {MdPreviewDirective} from "./directives/mdPreview.drv";
import {CopyButtonDirective} from "./directives/copyButton.drv";

// Services
import {EditorRef} from "../editor/services/EditorRef";
import {MdPreviewRef} from "./services/MdPreviewRef";
import {MdParser} from "../../../services/MdParser";

@Component({
    selector: "preview-cmp",
    templateUrl: "./components/md_editor/preview/preview.html",
    styleUrls: ["./components/md_editor/preview/preview.css"],
    directives: [
        MdPreviewDirective,
        CopyButtonDirective
    ]
})
export class PreviewComponent {
    public static MD_PREV_ID: string = "#md-preview"; // # is mandatory here
    public static isOpened: boolean = false;

    /**
     * A get accessor wrapper for the static isOpened.
     * @returns {boolean}
     */
    public get isOpened(): boolean {
        return PreviewComponent.isOpened;
    }

    /**
     * Toggles the state of the preview container (on/off).
     */
    public static togglePreview(): void {
        EditorRef.ref.setAttribute("contenteditable", PreviewComponent.isOpened.toString()); // disables editing when opened

        // reloads MD only on opening
        if (!PreviewComponent.isOpened) {
            PreviewComponent.loadMdInPreviewCont();
        }

        // Toggle
        PreviewComponent.isOpened = !PreviewComponent.isOpened;
    }

    /**
     * Loads the generated MD in the preview container.
     */
    private static loadMdInPreviewCont(): void {
        var md: string;

        md = MdParser.parseHtmlToMd(EditorRef.ref.innerHTML);
        MdPreviewRef.ref.value = md;
    }

    /**
     * Wrapper for static togglePreview needed for the template.
     */
    public togglePreview(): void {
        PreviewComponent.togglePreview();
    }
}
