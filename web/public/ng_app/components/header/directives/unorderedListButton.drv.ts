import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[ul-btn-drv]"
})
export class UnorderedListButtonDirective {
    /**
     * Wraps/inserts UL to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("insertUnorderedList", false);
    }
}
