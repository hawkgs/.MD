// Services
import {SetClassNative} from "./SetClassNative";

// Enums
import {NotifierType} from "./enums/NotifierType";

/**
 * Provides API for operating with the Notifier component.
 */
export class NotifierService {
    private static ACTIVE_CLASS: string = "active";
    private static ACTIVE_DURATION: number = 3000;
    private static TYPE_CLASSES = ["error", "success", "notice"];

    private _nativeElem: HTMLElement;
    private _message: string;

    /**
     * Setter for the native reference of the notifier.
     * @param value
     */
    public set elem(value: HTMLElement) {
        this._nativeElem = value;
    }

    /**
     * Getter for the current notifier message.
     * @returns {string}
     */
    public get message(): string {
        return this._message;
    }

    /**
     * Shows the notifier with the selected type, message and duration (optional).
     * @param type
     * @param message
     * @param duration - Optional, Default: 3s
     */
    public show(type: NotifierType, message: string, duration?: number) {
        duration = duration || NotifierService.ACTIVE_DURATION;
        this._message = message;

        this.applyNotifierType(type);
        SetClassNative.add(this._nativeElem, NotifierService.ACTIVE_CLASS);

        setTimeout(() => {
            SetClassNative.remove(this._nativeElem, NotifierService.ACTIVE_CLASS);
        }, duration);
    }

    /**
     * Sets the respective type class to the notifier and removes the rest, if any.
     * @param type
     */
    private applyNotifierType(type: NotifierType): void {
        var current: string = NotifierService.TYPE_CLASSES[type];

        if (this._nativeElem.className.indexOf(current) !== -1) {
            return;
        } else {
            NotifierService.TYPE_CLASSES.forEach((className) => {
                if (className !== current && this._nativeElem.className.indexOf(className) !== -1) {
                    SetClassNative.remove(this._nativeElem, className);
                }
            });

            SetClassNative.add(this._nativeElem, current);
        }
    }
}
