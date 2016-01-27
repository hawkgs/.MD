export class GfmService {
    public static isGfmOn: boolean;
    private static LS_KEY: string = "md_gfm";

    constructor() {
        var gfmEntry: string = localStorage.getItem(GfmService.LS_KEY);

        if (gfmEntry) {
            GfmService.isGfmOn = JSON.parse(gfmEntry);
        } else {
            GfmService.setGfm(true);
        }
    }

    public static setGfm(isOn: boolean): void {
        localStorage.setItem(GfmService.LS_KEY, isOn.toString());
        GfmService.isGfmOn = isOn;
    }

    public static toggleGfm(): void {
        if (GfmService.isGfmOn) {
            GfmService.setGfm(false);
        } else {
            GfmService.setGfm(true);
        }
    }
}
