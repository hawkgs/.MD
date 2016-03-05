import {Directive, HostListener} from "angular2/core";

import {NewDocWindowComponent} from "../../windows/directives/newDocWindow.cmp";

@Directive({
    selector: "[new-doc-drv]"
})
export class NewDocumentDirective {
    /**
     * Opens the new document window.
     */
    @HostListener("click")
    public openNewDocWindow(): void {
        NewDocWindowComponent.open();
    }
}
