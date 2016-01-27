import {Component, ElementRef, ViewEncapsulation} from "angular2/core";

@Component({
    selector: "switch-ctrl",
    encapsulation: ViewEncapsulation.None,
    template: '<span class="switch theme-bg-ev" [ngClass]="{clicked: isClicked}" (click)="onClick()"></span>',
    styles: [`
        span.switch {
            position: relative;
            width: 45px; height: 24px;
            border-radius: 20px;
            background-color: #444;
            transition: background-color 0.3s ease;
            float: right;
            display: inline-block;
            cursor: pointer;
        }

        span.switch:hover::after {
            background: #FFF;
        }

        span.switch::after {
            content: "";
            position: absolute;
            width: 20px; height: 20px;
            top: 2px; left: 2px;
            border-radius: 20px;
            background: #F5F5F5;
            transition: left 0.3s ease;
        }

        span.switch.clicked::after {
            left: 23px;
        }
    `],
})
export class SwitchControlComponent {
    public isClicked: boolean;
    private _elem: ElementRef;

    constructor(elem: ElementRef) {
        this._elem = elem;
    }

    public onClick(): void {
        this.isClicked = !this.isClicked;
    }
}
