import {Directive} from "angular2/core";

@Directive({
    selector: "[hrule-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class HorizontalRuleDirective {
    /**
     * Inserts HR in the editor.
     */
    public onClick(): void {
        document.execCommand("insertHorizontalRule", false);
    }
}
