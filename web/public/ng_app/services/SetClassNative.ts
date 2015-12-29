export class SetClassNative {
    public static add(elem: any, className: string) {
        if (elem.className.indexOf(className) === -1) {
            elem.className += " " + className;
        }
    }

    public static remove(elem: any, className: string) {
        elem.className = elem.className.replace(className, "").trim(); // .trim() is optional
    }

    public static toggle(elem: any, className: string) {
        if (elem.className.indexOf(className) === -1) {
            elem.className += " " + className;
        } else {
            SetClassNative.remove(elem, className);
        }
    }
}
