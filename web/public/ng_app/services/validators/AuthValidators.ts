import {Validators, AbstractControl} from "angular2/common";

// Services
import {ControlValidators} from "../ControlValidators";

/**
 * Represents a set of authentication validators.
 */
export class AuthValidators {
    /**
     * Username validation.
     * @returns {Function}
     */
    public static usernameValidation(): Function {
        return Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25),
            ControlValidators.regexMatch(/^[\w.]+$/)
        ]);
    }

    /**
     * Password validation.
     * @returns {Function}
     */
    public static passwordValidation(): Function {
        return Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)
        ]);
    }

    /**
     * Email validation.
     * @returns {Function}
     */
    public static emailValidation(): Function {
        return Validators.compose([
            Validators.required,
            ControlValidators.regexMatch(/^[\w.+-]+@[a-zA-Z\d-]+\.[a-zA-Z0-9-.]+$/)
        ]);
    }

    public static passwordConfirmationValidation(password: AbstractControl): Function {
        return Validators.compose([
            Validators.required,
            //ControlValidators.compare(password)
        ]);
    }
}
