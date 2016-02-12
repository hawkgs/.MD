import {Component} from "angular2/core";

// Services
import {EditorRef} from "../../md_editor/editor/services/EditorRef";
import {MdParser} from "../../../services/MdParser";
import {DocNameSaveManager} from "../../header/services/DocNameSaveManager";

// Interfaces
import {IFileData} from "./contracts/IFileData";

@Component({
    selector: "[export-md-cmp]",
    styleUrls: ["components/sidebar/directives/styles/sidebar-list.css"],
    template: `
        <ul class="sb-list">
            <li><a href="{{mdData.data}}" download="{{mdData.fileName}}" (click)="packMdForExport()">MD</a></li>
            <li><a href="">PDF</a></li>
        </ul>`
})
export class ExportMdComponent {
    private static DEF_DATA: string = "data:text/plain;base64,";
    public mdData: IFileData;

    /**
     * Initializes default data objects.
     */
    constructor() {
        this.mdData = { fileName: "", data: "" };
    }

    /**
     * Gets the content of the editor, generates MD, and loads it to anchor so that it can be downloaded.
     */
    public packMdForExport(): void {
        var generatedMd: string = MdParser.parseHtmlToMd(EditorRef.ref.innerHTML);

        this.mdData.data = ExportMdComponent.DEF_DATA + btoa(generatedMd);
        this.mdData.fileName = DocNameSaveManager.getDocName() + ".md"; //todo save name here
    }
}
