/**
 * Provides an simplified API for adding/removing element classes.
 */
export class SetClassNative {
    /**
     * Adds a class to an element.
     * @param elem
     * @param className
     */
    public static add(elem, className: string): void {
        if (elem.className.indexOf(className) === -1) {
            elem.className += " " + className;
        }
    }

    /**
     * Removes a class from an element.
     * @param elem
     * @param className
     */
    public static remove(elem, className: string): void {
        elem.className = elem.className.replace(className, "").trim(); // .trim() is optional
    }

    /**
     * Toggles a class of a specified element.
     * @param elem
     * @param className
     */
    public static toggle(elem, className: string): void {
        if (elem.className.indexOf(className) === -1) {
            elem.className += " " + className;
        } else {
            SetClassNative.remove(elem, className);
        }
    }
}
