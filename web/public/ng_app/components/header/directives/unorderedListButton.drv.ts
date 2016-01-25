import {Directive} from "angular2/core";

@Directive({
    selector: "[ul-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class UnorderedListButtonDirective {
    public onClick(): void {
        document.execCommand("insertUnorderedList", false);
    }
}
