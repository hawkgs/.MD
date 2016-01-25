import {Directive} from "angular2/core";

@Directive({
    selector: "[strike-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class StrikethroughButtonDirective {
    public onClick(): void {
        document.execCommand("strikeThrough", false);
    }
}
