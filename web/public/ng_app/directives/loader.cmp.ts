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

    /**
     * A getter (wrapper) which returns the value of the static isActive.
     * Needed for the template.
     * @returns {boolean}
     */
    public get isActive(): boolean {
        return LoaderComponent.isActive;
    }

    /**
     * Turns on the loader.
     */
    public static turnOn(): void {
        LoaderComponent.isActive = true;
    }

    /**
     * Turns off the loader.
     */
    public static turnOff(): void {
        LoaderComponent.isActive = false;
    }
}
