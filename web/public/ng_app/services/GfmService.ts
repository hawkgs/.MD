/**
 * Manages GFM (GitHub Flavoured Markdown) state via localStorage
 */
export class GfmService {
    public static isGfmOn: boolean;
    private static LS_KEY: string = "md_gfm";

    /**
     * Gets current GFM state from localStorage. If not set, sets it to true by default.
     */
    constructor() {
        var gfmEntry: string = localStorage.getItem(GfmService.LS_KEY);

        if (gfmEntry) {
            GfmService.isGfmOn = JSON.parse(gfmEntry);
        } else {
            GfmService.setGfm(true);
        }
    }

    /**
     * Sets GFM state by a provided boolean value.
     * @param isOn
     */
    public static setGfm(isOn: boolean): void {
        localStorage.setItem(GfmService.LS_KEY, isOn.toString());
        GfmService.isGfmOn = isOn;
    }

    /**
     * Toggles GFM (on/off).
     */
    public static toggleGfm(): void {
        GfmService.setGfm(!GfmService.isGfmOn);
    }
}
