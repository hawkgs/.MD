import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[strike-btn-drv]"
})
export class StrikethroughButtonDirective {
    /**
     * Wraps/inserts STRIKE to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("strikeThrough", false);
    }
}
