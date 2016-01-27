import {Component, ViewEncapsulation} from "angular2/core";

@Component({
    selector: "loader",
    encapsulation: ViewEncapsulation.None,
    template: `
        <div id="loader" [ngClass]="{activated: isActive}">
            <div class="slider theme-bg"></div>
        </div>`
})
export class LoaderComponent {
    private static isActive: boolean = false;

    public get isActive(): boolean {
        return LoaderComponent.isActive;
    }

    public static turnOn(): void {
        LoaderComponent.isActive = true;
    }

    public static turnOff(): void {
        LoaderComponent.isActive = false;
    }
}
