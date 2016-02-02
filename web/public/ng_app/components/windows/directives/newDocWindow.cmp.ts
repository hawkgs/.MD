import {Component} from "angular2/core";

import {WindowComponent} from "./common/window.cmp/window.cmp";

@Component({
    selector: "[new-doc-cmp]",
    template: `
        <p>Are you sure you want to start new document</p>
        <p><button>Yes</button> <button>No</button></p>
    `
})
export class NewDocWindowComponent {
    private static ID: string = "new_document";

    /**
     * Provides static method for opening the window outside of this class.
     */
    public static open(): void {
        WindowComponent.open(NewDocWindowComponent.ID);
    }
}
