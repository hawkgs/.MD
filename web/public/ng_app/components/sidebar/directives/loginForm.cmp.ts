import {Component} from "angular2/core";

import {RegisterWindowComponent} from "../../windows/directives/registerWindow.cmp/registerWindow.cmp";

@Component({
    selector: "[login-form-cmp]",
    template: `
        <form>
            <p class="error-msg">Wrong password mate</p>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p>
                <button class="default theme-bg">Login</button>
                <a id="create-acc" href="javascript:;" (click)="openRegisterWindow()">Create account</a>
            </p>
        </form>`,
    styles: [`
        form {
            padding: 15px;
        }

        input {
            width: 100%;
            margin-bottom: 10px;
        }

        #create-acc {
            font-size: 13px;
            font-weight: 600;
            float: right;
        }
    `]
})
export class LoginFormComponent {
    /**
     * Opens the registration window.
     */
    public openRegisterWindow(): void {
        RegisterWindowComponent.open();
    }
}
