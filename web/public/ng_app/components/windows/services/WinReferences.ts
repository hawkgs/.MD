export class WinReferences {
    private static references = {};

    public static getRef(id: string): HTMLElement {
        return WinReferences.references[id];
    }

    public static setRef(id: string, ref: HTMLElement): void {
        if (WinReferences.references[id]) {
            console.error(`Window Error: '${id}' window ID is already set/in use.`);
            return;
        }

        WinReferences.references[id] = ref;
    }
}
