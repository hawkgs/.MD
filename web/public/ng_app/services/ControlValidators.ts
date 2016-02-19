import {AbstractControl, Control} from "angular2/common";

// Interfaces
import {IValidationResult} from "./contracts/IValidationResult";

/**
 * A set of custom Control validator methods.
 */
export class ControlValidators {
    /**
     * Provides a regular expression match/test validation.
     * @param pattern
     * @returns {function(Control): IValidationResult}
     */
    public static regexMatch(pattern: RegExp): Function {
        return (control: Control): IValidationResult => {
            if (!pattern.test(control.value)) {
                return { pattern: true };
            }

            return null;
        };
    }

    // todo
    public static compare(comparer: AbstractControl): Function {
        return (control: Control): IValidationResult => {
            if (control.value === comparer.value) {
                return { same: true };
            }

            return null;
        };
    }
}
