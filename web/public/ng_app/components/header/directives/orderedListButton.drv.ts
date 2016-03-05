import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[ol-btn-drv]"
})
export class OrderedListButtonDirective {
    /**
     * Wraps/inserts OL to the text selection in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("insertOrderedList", false);
    }
}
