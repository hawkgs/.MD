import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, AbstractControl} from "angular2/common";

import {WindowComponent} from "../common/window.cmp/window.cmp";
import {LoaderComponent} from "../../../../directives/loader.cmp";

// Services
import {AuthService} from "../../../../services/AuthService";
import {AuthValidators} from "../../../../services/validators/AuthValidators";

// Interfaces
import {IRegisterData} from "./contracts/IRegisterData";
import {IServerRegistrationData} from "../../../../services/contracts/IServerRegistrationData";

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
        // Pre-request validation
        if (!this.registerForm.valid) {
            this.showRegistrationErrors(["an error m8", "lol", "strange"]); // todo
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

        // Reset fields
        this.username.value = "";
        this.email.value = "";
        this.password.value = "";
        this.confirmPassword.value = "";

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
