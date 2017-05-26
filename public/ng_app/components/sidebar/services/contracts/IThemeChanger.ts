/**
 * Manages theme changing.
 */
export interface IThemeChanger {
    /**
     * Loads currently loaded theme and returns its color (HEX string).
     */
    loadCurrentTheme(): string;

    /**
     * Changes current theme by provided color.
     * @param color - HEX string
     */
    changeTheme(color: string): void;
}
