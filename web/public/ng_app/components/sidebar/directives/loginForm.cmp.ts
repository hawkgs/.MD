import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, AbstractControl, Validators} from "angular2/common";

import {RegisterWindowComponent} from "../../windows/directives/registerWindow.cmp/registerWindow.cmp";

// Services
import {AuthService} from "../../../services/AuthService";
import {ControlValidators} from "../../../services/ControlValidators";

// Interfaces
import {ILoginCredentials} from "./contracts/ILoginCredentials";

@Component({
    selector: "[login-form-cmp]",
    directives: [FORM_DIRECTIVES],
    template: `
        <form [ngFormModel]="loginForm" (ngSubmit)="login(loginForm.value)">
            <p class="error-msg" [ngClass]="{show: displayErrors}">{{errMsg}}</p>
            <p><input type="text" placeholder="Username" [ngFormControl]="loginForm.controls['username']" maxlength="25" /></p>
            <p><input type="password" placeholder="Password" [ngFormControl]="loginForm.controls['password']" maxlength="25" /></p>
            <p>
                <button class="default theme-bg">Login</button>
                <a id="create-acc" href="javascript:;" (click)="openRegisterWindow()">Create account</a>
            </p>
        </form>`,
    styles: [`
        form { padding: 15px; }
        input { width: 100%; margin-bottom: 10px; }

        #create-acc {
            font-size: 13px;
            font-weight: 600;
            float: right;
        }`
    ]
})
export class LoginFormComponent {
    public displayErrors: boolean;
    public errMsg: string;

    public loginForm: ControlGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    private _auth: AuthService;

    /**
     * Sets needed service(s) and builds the login form from the created controls.
     * @param fb
     * @param auth
     */
    constructor(fb: FormBuilder, auth: AuthService) {
        this.displayErrors = false;
        this._auth = auth;
        this.createControls();

        this.loginForm = fb.group({
            "username": this.username,
            "password": this.password
        });
    }

    /**
     * Opens the registration window.
     */
    public openRegisterWindow(): void {
        RegisterWindowComponent.open();
    }

    // todo
    /**
     * Sends the input data (if valid) to the AuthService in attempt for a login.
     * @param formObj
     */
    public login(formObj: ILoginCredentials): void {
        // Basic validation (pre-query) - requirement, length, allowed symbols.
        if (!this.loginForm.valid) {
            this.displayErrors = true;
            this.errMsg = "The login credentials are invalid";

            return;
        }

        this.displayErrors = false;
        console.log(formObj);
    }

    /**
     * Sets all input controls and their respective validators.
     */
    private createControls(): void {
        let usernameValidators = Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(25),
            ControlValidators.regexMatch(/^[\w.]+$/)
        ]);

        let passwordValidators = Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)
        ]);

        this.username = new Control("", usernameValidators);
        this.password = new Control("", passwordValidators);
    }
}
