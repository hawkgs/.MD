import {Directive} from "angular2/core";

@Directive({
    selector: "[bold-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class BoldButtonDirective {
    public onClick(): void {
        document.execCommand("bold", false);
    }
}
