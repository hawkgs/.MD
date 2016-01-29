import {Component, ElementRef} from "angular2/core";

// Services
import {ThemeColors} from "../services/ThemeColors";
import {IThemeChanger} from "../services/contracts/IThemeChanger";
import {ThemeChanger} from "../services/ThemeChanger";
import {SetClassNative} from "../../../services/SetClassNative";
import {Converters} from "../../../services/Converters";

@Component({
    selector: "[theme-selector-cmp]",
    providers: [ThemeChanger],
    template: `
        <div id="theme-selector">
            <template ngFor #color="$implicit" [ngForOf]="themeColors">
                <div [ngClass]="{selected: (currentTheme === color), 'color-pick': true}" style="background: {{color}}"
                     (click)="changeTheme($event, color)"></div>
            </template>
        </div>`,
    styles: [`
        #theme-selector {
            padding: 15px;
            text-align: center;
            height: 40px;
            cursor: pointer;
        }

        .color-pick {
            width: 30px; height: 30px;
            margin-right: 10px;
            border: 3px solid transparent;
            float: left;
            transition: border-color 0.2s ease;
            box-sizing: border-box;
        }

        .color-pick:hover { border-color: rgba(255, 255, 255, 0.5); }
        .color-pick.selected { border-color: rgba(255, 255, 255, 0.85); }
    `]
})
export class ThemeSelectorComponent {
    private static SEL_THEME_CLASS: string = "selected";

    public currentTheme: string;
    private _themeChanger: IThemeChanger;
    private _current;
    private _nativeElem;

    /**
     * Sets themeChanger instance and element reference. Then loads default theme.
     * @param themeChanger
     * @param elem
     */
    constructor(themeChanger: ThemeChanger, elem: ElementRef) {
        this._themeChanger = themeChanger;
        this._nativeElem = elem.nativeElement.querySelector("#theme-selector");

        this.currentTheme = this._themeChanger.loadCurrentTheme();
    }

    /**
     * Get wrapper for ThemeColors.clr.
     * @returns {string[]}
     */
    public get themeColors(): string[] {
        return ThemeColors.clr;
    }

    /**
     * Changes the theme according to clicked color picker.
     * @param event - DOM event object of the clicked picker
     * @param color - HEX string
     */
    public changeTheme(event, color: string): void {
        var clicked = event.target;

        // Called only on first click after page load
        if (!this._current) {
            this.getCurrentThemePickerReference();
        }

        if (this._current === clicked) {
            return;
        }

        this._themeChanger.changeTheme(color);

        SetClassNative.remove(this._current, ThemeSelectorComponent.SEL_THEME_CLASS);
        SetClassNative.add(clicked, ThemeSelectorComponent.SEL_THEME_CLASS);

        this._current = clicked;
    }

    /**
     * Used for determining the this._current after page load, on first click of a picker.
     */
    private getCurrentThemePickerReference(): void {
        var self: ThemeSelectorComponent = this;

        [].forEach.call(this._nativeElem.childNodes, function (child) {
            if (child.style && Converters.rgbToHex(child.style.backgroundColor) === self.currentTheme) {
                self._current = child;
            }
        });
    }
}
