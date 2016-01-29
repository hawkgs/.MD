import {Component} from "angular2/core";

// Directives
import {SwitchControlComponent} from "../../../directives/switchControl.cmp";

// Services
import {GfmService} from "../../../services/GfmService";

@Component({
    selector: "[gfm-toggle-cmp]",
    directives: [SwitchControlComponent],
    template: `
        <span>Toggle GFM</span>
        <switch-ctrl [isClicked]="gfmState" (click)="changeGfmState()"></switch-ctrl>`,
})
export class GfmToggleComponent {
    /**
     * Wrapper (get accessor) of static GfmService.isGfmOn.
     * @returns {boolean} GFM state (on/off)
     */
    public get gfmState(): boolean {
        return GfmService.isGfmOn;
    }

    /**
     * Changing the state (toggling) of GFM.
     */
    public changeGfmState(): void {
        GfmService.toggleGfm();
    }
}
