/**
 * Set of methods for escaping different types of code.
 */
export class Escapers {
    /**
     * Escapes HTML code.
     * @link http://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
     * @author bjornd
     * @param unsafe
     * @returns {string} Escaped HTML
     */
    public static escapeHtml(unsafe: string) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
