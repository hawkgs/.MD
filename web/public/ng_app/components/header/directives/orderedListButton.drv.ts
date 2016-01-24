import {Directive} from "angular2/core";

@Directive({
    selector: "[ol-btn-drv]",
    host: {
        "(click)": "onClick()"
    }
})
export class OrderedListButtonDirective {
    public onClick() {
        document.execCommand("insertOrderedList", false);
    }
}
