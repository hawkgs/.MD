import {Directive} from "angular2/core";

@Directive({
    selector: "[hrule-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class HorizontalRuleDirective {
    public onClick() {
        document.execCommand("insertHorizontalRule", false);
    }
}
