import {Directive} from "angular2/core";

@Directive({
    selector: "[ol-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class OrderedListButtonDirective {
    /**
     * Wraps/inserts OL to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("insertOrderedList", false);
    }
}
