import {Directive, ElementRef} from "angular2/core";

// Services
import {CloakService} from "../services/CloakService";

@Directive({
    selector: "[cloak-drv]"
})
export class CloakDirective {
    constructor(elem: ElementRef) {
        CloakService.cloakEl = elem;
    }
}
