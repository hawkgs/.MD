import {Directive, ElementRef} from "angular2/core";

// Services
import {MdPreviewRef} from "../services/MdPreviewRef";

@Directive({
    selector: "[md-preview-drv]"
})
export class MdPreviewDirective {
    constructor(elem: ElementRef) {
        MdPreviewRef.ref = elem.nativeElement;
    }
}
