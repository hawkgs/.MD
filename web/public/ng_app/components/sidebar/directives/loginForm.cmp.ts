import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, AbstractControl, Validators} from "angular2/common";

import {RegisterWindowComponent} from "../../windows/directives/registerWindow.cmp/registerWindow.cmp";

// Services
import {AuthService} from "../../../services/AuthService";

// Interfaces
import {ILoginCredentials} from "./contracts/ILoginCredentials";

@Component({
    selector: "[login-form-cmp]",
    directives: [FORM_DIRECTIVES],
    template: `
        <form [ngFormModel]="loginForm" (ngSubmit)="login(loginForm.value)">
            <p class="error-msg" *ngIf="loginForm.dirty && !loginForm.valid">Invalid information</p>
            <p><input type="text" placeholder="Username" [ngFormControl]="loginForm.controls['username']" /></p>
            <p><input type="password" placeholder="Password" [ngFormControl]="loginForm.controls['password']" /></p>
            <p>
                <button class="default theme-bg">Login</button>
                <a id="create-acc" href="javascript:;" (click)="openRegisterWindow()">Create account</a>
            </p>
        </form>`,
    styles: [`
        form { padding: 15px; }

        input {
            width: 100%;
            margin-bottom: 10px;
        }

        #create-acc {
            font-size: 13px;
            font-weight: 600;
            float: right;
        }`
    ]
})
export class LoginFormComponent {
    public loginForm: ControlGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    private _authService: AuthService;

    constructor(fb: FormBuilder, authService: AuthService) {
        this._authService = authService;
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

    public login(formObj: ILoginCredentials): void {
        let data = this._authService.login(formObj);
        console.log(data);
    }

    private createControls(): void {
        this.username = new Control("", Validators.required);
        this.password = new Control("", Validators.required);
    }
}
