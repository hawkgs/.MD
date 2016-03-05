import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[bold-btn-drv]"
})
export class BoldButtonDirective {
    /**
     * Wraps/inserts B (bold) to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("bold", false);
    }
}
