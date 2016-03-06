/**
 * 'localStorage' wrapper
 * @type {{setItem: (function(string, string): void), getItem: (function(string): any), clear: (function(): void)}}
 */
export const LocalStorage = {
    /**
     * Sets an item.
     * @param key
     * @param data
     */
    setItem(key: string, data: string): void {
        localStorage.setItem(key, data);
    },

    /**
     * Gets an item.
     * @param key
     */
    getItem(key: string): any {
        localStorage.getItem(key);
    },

    /**
     * Clears the localStorage.
     */
    clear(): void {
        localStorage.clear();
    }
};
