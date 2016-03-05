/**
 * Windows references container.
 */
export class WinReferences {
    private static references = {};

    /**
     * Searches in the reference object by the given ID and returns its reference, if found.
     * @param id The unique ID of the window
     * @returns {HTMLElement} Found element (or 'undefined')
     */
    public static getRef(id: string): HTMLElement {
        return WinReferences.references[id];
    }

    /**
     * Puts the reference in the container by provided unique ID.
     * @param id - Unique ID of the window
     * @param ref - Reference of the window
     */
    public static setRef(id: string, ref: Element): void {
        if (WinReferences.references[id]) {
            console.error(`Window Error: '${id}' window ID is already set/in use.`);
            return;
        }

        WinReferences.references[id] = ref;
    }

    /**
     * Removes the respective reference in the container by provided unique ID.
     * @param id - Unique ID of the window
     */
    public static removeRef(id: string) {
        if (WinReferences.references[id]) {
            WinReferences.references[id] = undefined;
        }
    }
}
