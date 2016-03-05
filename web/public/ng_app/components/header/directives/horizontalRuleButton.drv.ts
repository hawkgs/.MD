import {Directive, HostListener} from "angular2/core";

@Directive({
    selector: "[hrule-btn-drv]"
})
export class HorizontalRuleDirective {
    /**
     * Inserts HR in the editor.
     */
    @HostListener("click")
    public onClick(): void {
        document.execCommand("insertHorizontalRule", false);
    }
}
