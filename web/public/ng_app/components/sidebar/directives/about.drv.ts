import {Directive} from "angular2/core";

import {AboutWindowComponent} from "../../windows/directives/aboutWindow.cmp/aboutWindow.cmp";

@Directive({
    selector: "[about-drv]",
    host: {
        "(click)": "openAboutWindow()"
    }
})
export class AboutDirective {
    /**
     * Opens the about window with information about .MD
     */
    public openAboutWindow(): void {
        AboutWindowComponent.open();
    }
}
