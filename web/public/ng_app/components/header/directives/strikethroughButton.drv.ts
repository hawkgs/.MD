import {Directive} from "angular2/core";

@Directive({
    selector: "[strike-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class StrikethroughButtonDirective {
    public onClick() {
        document.execCommand("strikeThrough", false);
    }
}
