import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, AbstractControl} from "angular2/common";

import {WindowComponent} from "../common/window.cmp/window.cmp";

// Services
import {AuthService} from "../../../../services/AuthService";
import {AuthValidators} from "../../../../services/validators/AuthValidators";

// Interfaces
import {IRegisterData} from "./contracts/IRegisterData";

@Component({
    selector: "[register-win-cmp]",
    templateUrl: "./components/windows/directives/registerWindow.cmp/register-window.html",
    styleUrls: ["./components/windows/directives/registerWindow.cmp/register-window.css"],
    directives: [FORM_DIRECTIVES]
})
export class RegisterWindowComponent {
    private static ID: string = "register";

    public errorMsg: string;
    public displayErrors: boolean;
    
    public registerForm: ControlGroup;
    public username: AbstractControl;
    public email: AbstractControl;
    public password: AbstractControl;
    public confirmPassword: AbstractControl;
    private _auth: AuthService;

    /**
     * Sets needed service(s) and builds the register form from the created controls.
     * @param fb
     * @param auth
     */
    constructor(fb: FormBuilder, auth: AuthService) {
        this._auth = auth;
        this.createControls();
        this.displayErrors = false;

        this.registerForm = fb.group({
            "username": this.username,
            "email": this.email,
            "password": this.password,
            "confirmPassword": this.confirmPassword
        });
    }

    /**
     * Provides static method for opening the window outside of this class.
     */
    public static open(): void {
        WindowComponent.open(RegisterWindowComponent.ID);
    }

    /**
     * Sends the input data (if valid) to the AuthService in attempt for a registration.
     * @param formObj
     */
    public register(formObj: IRegisterData): void {
        if (!this.registerForm.valid) {
            this.showRegistrationErrors();
            return;
        }

        this.displayErrors = false;
        console.log(formObj);
    }

    /**
     * Sets all input controls and their respective validators.
     */
    private createControls(): void {
        this.username = new Control("", AuthValidators.usernameValidation());
        this.email = new Control("", AuthValidators.emailValidation());
        this.password = new Control("", AuthValidators.passwordValidation());
        this.confirmPassword = new Control("", AuthValidators.passwordConfirmationValidation(this.password));
    }

    /**
     * Displays the errors occurred when a user attempts to register.
     */
    private showRegistrationErrors(): void {
        this.errorMsg = "Error message"; // todo
        this.displayErrors = true;
    }
}
