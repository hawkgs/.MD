import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup} from "angular2/common";

import {WindowComponent} from "../common/window.cmp/window.cmp";
import {LoaderComponent} from "../../../../directives/loader.cmp";

// Services
import {AuthService} from "../../../../services/AuthService";
import {AuthValidators} from "../../../../services/validators/AuthValidators";
import {NotifierService} from "../../../../services/NotifierService";

// Interfaces
import {IRegisterData} from "./contracts/IRegisterData";
import {IServerRegistrationData} from "../../../../services/contracts/IServerRegistrationData";

// Enums
import {NotifierType} from "../../../../services/enums/NotifierType";

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
    public username: Control;
    public email: Control;
    public password: Control;
    public confirmPassword: Control;
    private _auth: AuthService;
    private _notifier: NotifierService;

    /**
     * Sets needed service(s) and builds the register form from the created controls.
     * @param fb
     * @param auth
     * @param notifier
     */
    constructor(fb: FormBuilder, auth: AuthService, notifier: NotifierService) {
        this._auth = auth;
        this._notifier = notifier;
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
        this._notifier.show(NotifierType.Success, "test"); // todo testing
        // Pre-request validation
        if (!this.registerForm.valid) {
            let controls = this.registerForm.controls,
                errors = [];

            for (let prop in controls) {
                if (controls.hasOwnProperty(prop) && !controls[prop].valid) {
                    errors.push(`'${prop}' is invalid.`); // Note: 'confirmPassword' looks ugly.
                }
            }

            this.showRegistrationErrors(errors);
            return;
        }

        // Start the loader
        LoaderComponent.turnOn();

        // Proceed with the request
        this._auth.register(formObj)
            .subscribe(
                data => this.processRegistration(data),
                err => this.handleErrors(err),
                () => LoaderComponent.turnOff()
            );
    }

    /**
     * Processes the registration request.
     * @param data
     */
    private processRegistration(data: IServerRegistrationData): void {
        this.displayErrors = false;
        this.resetForm();

        WindowComponent.close(RegisterWindowComponent.ID);
    }

    /**
     * Handle all incoming errors occurred on registration request.
     * @param error
     */
    private handleErrors(error): void {
        if (error.status === 400) {
            this.processBadRequest(error._body);
        } else {
            console.error(error);
            // todo log server error
        }
    }

    /**
     * Process a registration request (Error 400).
     * @param outputData
     */
    private processBadRequest(outputData): void {
        var data: IServerRegistrationData = JSON.parse(outputData);

        this.showRegistrationErrors(data.errors);
        LoaderComponent.turnOff();
    }

    /**
     * Reset the form by clearing the values of all controls.
     */
    private resetForm() {
        // todo check the null stuff
        this.username.updateValue("", null);
        this.email.updateValue("", null);
        this.password.updateValue("", null);
        this.confirmPassword.updateValue("", null);
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
    private showRegistrationErrors(errors?: string[]): void {
        this.errorMsg = "";

        if (errors) {
            errors.forEach((err) => {
                this.errorMsg += err + "<br>";
            });
        }

        this.displayErrors = true;
    }
}
