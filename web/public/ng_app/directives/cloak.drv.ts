import {Directive, ElementRef} from "angular2/core";

// Services
import {CloakService} from "../services/CloakService";

@Directive({
    selector: "[cloak-drv]"
})
export class CloakDirective {
    /**
     * Puts the injected element reference in a container (CloakService).
     * @param elem
     */
    constructor(elem: ElementRef) {
        CloakService.cloakEl = elem;
    }
}
