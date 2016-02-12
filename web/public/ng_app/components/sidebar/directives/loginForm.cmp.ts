import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, AbstractControl, Validators} from "angular2/common";

// Directives
import {RegisterWindowComponent} from "../../windows/directives/registerWindow.cmp/registerWindow.cmp";
import {LoaderComponent} from "../../../directives/loader.cmp";

// Services
import {AuthService} from "../../../services/AuthService";
import {ControlValidators} from "../../../services/ControlValidators";
import {ToggleSidebar} from "../services/ToggleSidebar";

// Interfaces
import {ILoginCredentials} from "./contracts/ILoginCredentials";
import {IServerAuthData} from "../../../services/contracts/IServerAuthData";

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
    private _sidebarService: ToggleSidebar;

    /**
     * Sets needed service(s) and builds the login form from the created controls.
     * @param fb
     * @param auth
     * @param sbService
     */
    constructor(fb: FormBuilder, auth: AuthService, sbService: ToggleSidebar) {
        this.displayErrors = false;
        this._auth = auth;
        this._sidebarService = sbService;
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

    /**
     * Sends the input data (if valid) to the AuthService in attempt for a login.
     * @param formObj
     */
    public login(formObj: ILoginCredentials): void {
        // Pre-request validation - requirement, length, allowed symbols.
        if (!this.loginForm.valid) {
            this.showInvalidLoginError();
            return;
        }

        // Start the loader
        LoaderComponent.turnOn();

        // Proceed with the request
        this._auth.login(formObj)
            //.delay(2000) // testing loader
            .subscribe(
                data => this.authenticate(data),
                err => console.error(err), // TODO LOGGER
                () => LoaderComponent.turnOff()
            );
    }

    /**
     * Process the authentication server output data.
     * @param data - Returned JSON from the server
     */
    private authenticate(data: IServerAuthData): void {
        if (!data.success) {
            this.showInvalidLoginError();
            return;
        }

        this.displayErrors = false;
        this._sidebarService.toggle();
        this._auth.saveAuthData(data);
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

    /**
     * Puts a login error message in the error container for invalid credentials.
     */
    private showInvalidLoginError(): void {
        this.displayErrors = true;
        this.errMsg = "The login credentials are invalid";
    }
}
