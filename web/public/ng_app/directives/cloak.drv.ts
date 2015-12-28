import {Directive, ElementRef} from "angular2/core";

// Services
import {CloakService} from "../services/CloakService";

@Directive({
    selector: "[cloak-drv]"
    //providers: [CloakService]
})
export class CloakDirective {
    constructor(elem: ElementRef) {
        CloakService.cloakEl = elem;
    }
}
