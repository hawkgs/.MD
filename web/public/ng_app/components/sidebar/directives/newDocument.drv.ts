import {Directive} from "angular2/core";

import {NewDocWindowComponent} from "../../windows/directives/newDocWindow.cmp";

@Directive({
    selector: "[new-doc-drv]",
    host: {
        "(click)": "openNewDocWindow()"
    }
})
export class NewDocumentDirective {
    /**
     * Opens the new document window.
     */
    public openNewDocWindow(): void {
        NewDocWindowComponent.open();
    }
}
