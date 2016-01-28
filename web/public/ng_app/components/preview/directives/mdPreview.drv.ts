import {Directive, ElementRef} from "angular2/core";

// Services
import {MdPreviewRef} from "../services/MdPreviewRef";

@Directive({
    selector: "[md-preview-drv]"
})
export class MdPreviewDirective {
    /**
     * Puts the injected element reference to a container (MdPreviewRef).
     * @param elem
     */
    constructor(elem: ElementRef) {
        MdPreviewRef.ref = elem.nativeElement;
    }
}
