import {Directive} from "angular2/core";

@Directive({
    selector: "[blockquote-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class BlockquoteButtonDirective {
    public onClick() {
        document.execCommand("formatBlock", false, "<BLOCKQUOTE>");
    }
}
