import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[italic-btn-drv]"
})
export class ItalicButtonDirective {
    /**
     * Wraps/inserts I (italic) to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("italic", false);
    }
}
