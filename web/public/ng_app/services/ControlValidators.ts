import {IValidationResult} from "./contracts/IValidationResult";
import {Control} from "angular2/common";

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
}
