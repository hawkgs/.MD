import {Component} from "angular2/core";

import {WindowComponent} from "./common/window.cmp/window.cmp";

@Component({
    selector: "[new-doc-cmp]",
    template: `
        <p>
            Are you sure you want to start a new document?<br/>
            All unsaved changes on the current document will be lost.
        </p>
        <p>
            <button class="default theme-bg">Yes</button>
            <button class="default cancel" (click)="closeWindow()">No</button>
        </p>`,
    styles: [`button { margin-top: 10px; font-size: 14px; min-width: 75px; }`]
})
export class NewDocWindowComponent {
    private static ID: string = "new_document";

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
}
