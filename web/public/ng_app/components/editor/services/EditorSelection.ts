/**
 * Keeps a copy of user text selection and its content.
 */
export class EditorSelection {
    public static sel; // window.getSelection().getRangeAt(0)
    public static text: string;

    /**
     * Extracts the text content from a '.getSelection()'.
     * @param winSelection
     */
    public static getTextFromSelection(winSelection): void {
        var sel = winSelection,
            container;

        if (sel.rangeCount) {
            container = document.createElement("div");

            for (let i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }

            EditorSelection.text = container.innerHTML;
        }
    }
}
