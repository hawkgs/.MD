import {Directive} from "angular2/core";

@Directive({
    selector: "[italic-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class ItalicButtonDirective {
    public onClick() {
        document.execCommand("italic", false);
    }
}
