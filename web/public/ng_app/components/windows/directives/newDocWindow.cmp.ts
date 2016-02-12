import {Component} from "angular2/core";

import {WindowComponent} from "./common/window.cmp/window.cmp";

// Services
import {IDocSaveManager} from "../../md_editor/editor/services/contracts/IDocSaveManager";
import {DocSaveManager} from "../../md_editor/editor/services/DocSaveManager";
import {IDocNameSaveManager} from "../../header/services/contracts/IDocNameSaveManager";
import {DocNameSaveManager} from "../../header/services/DocNameSaveManager";

@Component({
    selector: "[new-doc-cmp]",
    template: `
        <p>
            Are you sure you want to start a new document?<br/>
            All unsaved changes on the current document will be lost.
        </p>
        <p>
            <button class="default cancel" (click)="closeWindow()">No</button>
            <button class="default theme-bg" (click)="newDocument()">Yes</button>
        </p>`,
    styles: [`
        button {
            margin: 10px 0 0 10px;
            font-size: 14px;
            min-width: 75px;
            float:right;
        }`
    ]
})
export class NewDocWindowComponent {
    private static ID: string = "new_document";
    private _saveManager: IDocSaveManager;
    private _nameSaveManager: IDocNameSaveManager;

    /**
     * Sets injected save managers (document and name).
     * @param saveManager
     * @param nameSaveManager
     */
    constructor(saveManager: DocSaveManager, nameSaveManager: DocNameSaveManager) {
        this._saveManager = saveManager;
        this._nameSaveManager = nameSaveManager;
    }

    /**
     * Provides static method for opening the window outside of this class.
     */
    public static open(): void {
        WindowComponent.open(NewDocWindowComponent.ID);
    }

    /**
     * Closes the window, if the user select 'No'.
     */
    public closeWindow(): void {
        WindowComponent.close(NewDocWindowComponent.ID);
    }

    /**
     * Resets the document (new document) - name and content.
     */
    public newDocument(): void {
        this._saveManager.clearDocument();
        this._nameSaveManager.resetName();

        this.closeWindow();
    }
}
