import {Component} from "angular2/core";

@Component({
    selector: "[login-form-cmp]",
    template: `
        <form>
            <p class="error-msg">Wrong password mate</p>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><button class="default theme-bg">Login</button><a id="create-acc" href=":;">Create account</a></p>
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

}
