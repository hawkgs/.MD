import {Component} from "angular2/core";

// Services
import {EditorRef} from "../../editor/services/EditorRef";
import {MdParser} from "../../../services/MdParser";
import {DocNameSaver} from "../../header/services/DocNameSaver";

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

    constructor() {
        this.mdData = { fileName: "", data: "" };
    }

    public packMdForExport(): void {
        var generatedMd: string = MdParser.parseHtmlToMd(EditorRef.ref.innerHTML);

        this.mdData.data = ExportMdComponent.DEF_DATA + btoa(generatedMd);
        this.mdData.fileName = DocNameSaver.getDocName() + ".md"; //todo save name here
    }
}
