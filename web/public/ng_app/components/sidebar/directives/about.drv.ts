import {Directive, HostListener} from "angular2/core";

import {AboutWindowComponent} from "../../windows/directives/aboutWindow.cmp/aboutWindow.cmp";

@Directive({
    selector: "[about-drv]"
})
export class AboutDirective {
    /**
     * Opens the about window with information about .MD
     */
    @HostListener("click")
    public openAboutWindow(): void {
        AboutWindowComponent.open();
    }
}
