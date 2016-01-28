import {Directive} from "angular2/core";

@Directive({
    selector: "[strike-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class StrikethroughButtonDirective {
    /**
     * Wraps/inserts STRIKE to the text selection in the editor.
     */
    public onClick(): void {
        document.execCommand("strikeThrough", false);
    }
}
