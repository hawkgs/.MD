import {Directive} from "angular2/core";

@Directive({
    selector: "[ul-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class UnorderedListButtonDirective {
    /**
     * Wraps/inserts UL to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("insertUnorderedList", false);
    }
}
