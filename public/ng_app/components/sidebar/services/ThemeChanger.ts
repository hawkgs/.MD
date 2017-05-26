import {IThemeChanger} from "./contracts/IThemeChanger";
import {ThemeColors} from "../services/ThemeColors";

/**
 * Manages theme changing and saving to localStorage.
 */
export class ThemeChanger implements IThemeChanger {
    private static LS_THEME_KEY: string = "md_theme";
    private static DEF_THEME: string = ThemeColors.clr[0]; // Grey - default theme
    private static THM_CLASS: string = ".theme-bg";
    private static THM_EV_CLASSES: string = ".theme-bg-ev.clicked, #btn-table .theme-bg-ev.hovered";

    /**
     * Loads the current theme, if set in localStorage, or sets default one.
     * @returns {string} Theme HEX color string
     */
    public loadCurrentTheme(): string {
        var currentTheme: string = localStorage.getItem(ThemeChanger.LS_THEME_KEY);

        if (currentTheme) {
            this.changeTheme(currentTheme);
            return currentTheme;
        }

        localStorage.setItem(ThemeChanger.LS_THEME_KEY, ThemeChanger.DEF_THEME);
        return ThemeChanger.DEF_THEME;
    }

    /**
     * Sets the theme by a provided valid color.
     * @param color - HEX string
     */
    public changeTheme(color: string): void {
        // Checks for color validity.
        if (ThemeColors.clr.indexOf(color) === -1) {
            console.error("Theme changer: Color not found!");
            return;
        }

        let headElem = document.querySelector("head"),
            styleElem: any = headElem.querySelector("style[data-theme]");

        // If the style[data-theme] is not existent, sets it.
        if (!styleElem) {
            styleElem = document.createElement("style");
            styleElem.setAttribute("data-theme", "");
            headElem.appendChild(styleElem);
        }

        localStorage.setItem(ThemeChanger.LS_THEME_KEY, color);

        // If not grey (default in our case) theme.
        if (color !== ThemeChanger.DEF_THEME) {
            styleElem.innerHTML = `${ThemeChanger.THM_CLASS}, ${ThemeChanger.THM_EV_CLASSES} {background: ${color}; }`;
        } else {
            styleElem.innerHTML = "";
        }
    }
}
