System.register(["angular2/core", "angular2/common", "../common/window.cmp/window.cmp", "../../../../directives/loader.cmp", "../../../../services/AuthService", "../../../../services/validators/AuthValidators", "../../../../services/NotifierService", "../../../../services/enums/NotifierType"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, window_cmp_1, loader_cmp_1, AuthService_1, AuthValidators_1, NotifierService_1, NotifierType_1;
    var RegisterWindowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (window_cmp_1_1) {
                window_cmp_1 = window_cmp_1_1;
            },
            function (loader_cmp_1_1) {
                loader_cmp_1 = loader_cmp_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (AuthValidators_1_1) {
                AuthValidators_1 = AuthValidators_1_1;
            },
            function (NotifierService_1_1) {
                NotifierService_1 = NotifierService_1_1;
            },
            function (NotifierType_1_1) {
                NotifierType_1 = NotifierType_1_1;
            }],
        execute: function() {
            RegisterWindowComponent = (function () {
                function RegisterWindowComponent(fb, auth, notifier) {
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
                RegisterWindowComponent.open = function () {
                    window_cmp_1.WindowComponent.open(RegisterWindowComponent.ID);
                };
                RegisterWindowComponent.prototype.register = function (formObj) {
                    var _this = this;
                    if (!this.registerForm.valid) {
                        var controls = this.registerForm.controls, errors = [];
                        for (var prop in controls) {
                            if (controls.hasOwnProperty(prop) && !controls[prop].valid) {
                                errors.push("'" + prop + "' is invalid.");
                            }
                        }
                        this.showRegistrationErrors(errors);
                        return;
                    }
                    loader_cmp_1.LoaderComponent.turnOn();
                    this._auth.register(formObj)
                        .subscribe(function (data) { return _this.processRegistration(data); }, function (err) { return _this.handleErrors(err); }, function () { return loader_cmp_1.LoaderComponent.turnOff(); });
                };
                RegisterWindowComponent.prototype.processRegistration = function (data) {
                    this.displayErrors = false;
                    this.resetForm();
                    this._notifier.show(NotifierType_1.NotifierType.Success, "Successful registration");
                    window_cmp_1.WindowComponent.close(RegisterWindowComponent.ID);
                };
                RegisterWindowComponent.prototype.handleErrors = function (error) {
                    if (error.status === 400) {
                        this.processBadRequest(error._body);
                    }
                    else {
                        this._notifier.show(NotifierType_1.NotifierType.Error, "An unexpected error occurred. Please reload.");
                        console.error(error);
                    }
                };
                RegisterWindowComponent.prototype.processBadRequest = function (outputData) {
                    var data = JSON.parse(outputData);
                    this.showRegistrationErrors(data.errors);
                    loader_cmp_1.LoaderComponent.turnOff();
                };
                RegisterWindowComponent.prototype.resetForm = function () {
                    this.username.updateValue("");
                    this.email.updateValue("");
                    this.password.updateValue("");
                    this.confirmPassword.updateValue("");
                };
                RegisterWindowComponent.prototype.createControls = function () {
                    this.username = new common_1.Control("", AuthValidators_1.AuthValidators.usernameValidation());
                    this.email = new common_1.Control("", AuthValidators_1.AuthValidators.emailValidation());
                    this.password = new common_1.Control("", AuthValidators_1.AuthValidators.passwordValidation());
                    this.confirmPassword = new common_1.Control("", AuthValidators_1.AuthValidators.passwordConfirmationValidation(this.password));
                };
                RegisterWindowComponent.prototype.showRegistrationErrors = function (errors) {
                    var _this = this;
                    this.errorMsg = "";
                    if (errors) {
                        errors.forEach(function (err) {
                            _this.errorMsg += err + "<br>";
                        });
                    }
                    this.displayErrors = true;
                };
                RegisterWindowComponent.ID = "register";
                RegisterWindowComponent = __decorate([
                    core_1.Component({
                        selector: "[register-win-cmp]",
                        template: "\n      <form [ngFormModel]=\"registerForm\" (ngSubmit)=\"register(registerForm.value)\" id=\"register\">\n          <p class=\"description\">\n              The registration allows you to save and<br/>\n              keep your files on our server, so that<br/>\n              you can access them from everywhere.\n          </p>\n          <p class=\"error-msg\" [ngClass]=\"{show: displayErrors}\" [innerHTML]=\"errorMsg\"></p>\n          <p>\n              <input type=\"text\"\n                     [ngFormControl]=\"registerForm.controls['username']\"\n                     size=\"25\"\n                     placeholder=\"Username\"\n                     maxlength=\"25\"\n                     pattern=\"[A-Za-z0-9_.]+\" />\n              <span class=\"input-info\">\n                  Must be between 6 - 25 symbols;<br/>\n                  Containing only A-Z, a-z, 0-9, _, .\n              </span>\n          </p>\n          <p>\n              <input type=\"email\"\n                     [ngFormControl]=\"registerForm.controls['email']\"\n                     size=\"25\"\n                     placeholder=\"Email\" />\n          </p>\n          <hr/>\n          <p>\n              <input type=\"password\"\n                     [ngFormControl]=\"registerForm.controls['password']\"\n                     size=\"25\"\n                     placeholder=\"Password\"\n                     maxlength=\"25\" />\n              <span class=\"input-info\">\n                  Must be between 8 - 25 symbols\n              </span>\n          </p>\n          <p>\n              <input type=\"password\"\n                     [ngFormControl]=\"registerForm.controls['confirmPassword']\"\n                     size=\"25\"\n                     placeholder=\"Repeat Password\"\n                     maxlength=\"25\" />\n          </p>\n          <hr/>\n          <p><button class=\"default theme-bg\">Register</button></p>\n      </form>\n    ",
                        styles: ["\n      input, button, hr {\n          margin-bottom: 10px;\n      }\n\n      button {\n          font-size: 16px;\n      }\n\n      p {\n          white-space: nowrap;\n      }\n\n      form > :last-child {\n          margin-bottom: 0;\n      }\n    "],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, AuthService_1.AuthService, NotifierService_1.NotifierService])
                ], RegisterWindowComponent);
                return RegisterWindowComponent;
            }());
            exports_1("RegisterWindowComponent", RegisterWindowComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93cy9kaXJlY3RpdmVzL3JlZ2lzdGVyV2luZG93LmNtcC9yZWdpc3RlcldpbmRvdy5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1RkE7Z0JBb0JJLGlDQUFZLEVBQWUsRUFBRSxJQUFpQixFQUFFLFFBQXlCO29CQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7b0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTt3QkFDekIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7cUJBQzFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUthLDRCQUFJLEdBQWxCO29CQUNJLDRCQUFlLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQU1NLDBDQUFRLEdBQWYsVUFBZ0IsT0FBc0I7b0JBQXRDLGlCQTBCQztvQkF4QkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUNyQyxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixFQUFFLENBQUMsQ0FB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LENBQUMsZUFBZSxHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsK0JBQWMsQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekcsQ0FBQztnQkFLTyx3REFBc0IsR0FBOUIsVUFBK0IsTUFBaUI7b0JBQWhELGlCQVVDO29CQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUVuQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHOzRCQUNmLEtBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQzt3QkFDbEMsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztvQkFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkEvSWMsMEJBQUUsR0FBVyxVQUFVLENBQUM7Z0JBdEUzQztvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxxNURBK0NUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDZQQWdCUixDQUFDO3dCQUNGLFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7cUJBQ2hDLENBQUM7OzJDQUFBO2dCQWtKRiw4QkFBQztZQUFELENBakpBLEFBaUpDLElBQUE7WUFqSkQsNkRBaUpDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy93aW5kb3dzL2RpcmVjdGl2ZXMvcmVnaXN0ZXJXaW5kb3cuY21wL3JlZ2lzdGVyV2luZG93LmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sLCBDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuaW1wb3J0IHtXaW5kb3dDb21wb25lbnR9IGZyb20gXCIuLi9jb21tb24vd2luZG93LmNtcC93aW5kb3cuY21wXCI7XG5pbXBvcnQge0xvYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpcmVjdGl2ZXMvbG9hZGVyLmNtcFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhWYWxpZGF0b3JzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdG9ycy9BdXRoVmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtOb3RpZmllclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9Ob3RpZmllclNlcnZpY2VcIjtcblxuLy8gSW50ZXJmYWNlc1xuaW1wb3J0IHtJUmVnaXN0ZXJEYXRhfSBmcm9tIFwiLi9jb250cmFjdHMvSVJlZ2lzdGVyRGF0YVwiO1xuaW1wb3J0IHtJU2VydmVyUmVnaXN0cmF0aW9uRGF0YX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnRyYWN0cy9JU2VydmVyUmVnaXN0cmF0aW9uRGF0YVwiO1xuXG4vLyBFbnVtc1xuaW1wb3J0IHtOb3RpZmllclR5cGV9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9lbnVtcy9Ob3RpZmllclR5cGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiW3JlZ2lzdGVyLXdpbi1jbXBdXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJyZWdpc3RlckZvcm1cIiAobmdTdWJtaXQpPVwicmVnaXN0ZXIocmVnaXN0ZXJGb3JtLnZhbHVlKVwiIGlkPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIFRoZSByZWdpc3RyYXRpb24gYWxsb3dzIHlvdSB0byBzYXZlIGFuZDxici8+XG4gICAgICAgICAgICAgIGtlZXAgeW91ciBmaWxlcyBvbiBvdXIgc2VydmVyLCBzbyB0aGF0PGJyLz5cbiAgICAgICAgICAgICAgeW91IGNhbiBhY2Nlc3MgdGhlbSBmcm9tIGV2ZXJ5d2hlcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbXNnXCIgW25nQ2xhc3NdPVwie3Nob3c6IGRpc3BsYXlFcnJvcnN9XCIgW2lubmVySFRNTF09XCJlcnJvck1zZ1wiPjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cInJlZ2lzdGVyRm9ybS5jb250cm9sc1sndXNlcm5hbWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyNVwiXG4gICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiW0EtWmEtejAtOV8uXStcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIE11c3QgYmUgYmV0d2VlbiA2IC0gMjUgc3ltYm9sczs8YnIvPlxuICAgICAgICAgICAgICAgICAgQ29udGFpbmluZyBvbmx5IEEtWiwgYS16LCAwLTksIF8sIC5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJyZWdpc3RlckZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIlxuICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjI1XCJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cInJlZ2lzdGVyRm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgTXVzdCBiZSBiZXR3ZWVuIDggLSAyNSBzeW1ib2xzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPVwicmVnaXN0ZXJGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiXG4gICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjVcIlxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZXBlYXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMjVcIiAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxwPjxidXR0b24gY2xhc3M9XCJkZWZhdWx0IHRoZW1lLWJnXCI+UmVnaXN0ZXI8L2J1dHRvbj48L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICBpbnB1dCwgYnV0dG9uLCBociB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIGZvcm0gPiA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlcldpbmRvd0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgSUQ6IHN0cmluZyA9IFwicmVnaXN0ZXJcIjtcblxuICAgIHB1YmxpYyBlcnJvck1zZzogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5RXJyb3JzOiBib29sZWFuO1xuXG4gICAgcHVibGljIHJlZ2lzdGVyRm9ybTogQ29udHJvbEdyb3VwO1xuICAgIHB1YmxpYyB1c2VybmFtZTogQ29udHJvbDtcbiAgICBwdWJsaWMgZW1haWw6IENvbnRyb2w7XG4gICAgcHVibGljIHBhc3N3b3JkOiBDb250cm9sO1xuICAgIHB1YmxpYyBjb25maXJtUGFzc3dvcmQ6IENvbnRyb2w7XG4gICAgcHJpdmF0ZSBfYXV0aDogQXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbm90aWZpZXI6IE5vdGlmaWVyU2VydmljZTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgbmVlZGVkIHNlcnZpY2UocykgYW5kIGJ1aWxkcyB0aGUgcmVnaXN0ZXIgZm9ybSBmcm9tIHRoZSBjcmVhdGVkIGNvbnRyb2xzLlxuICAgICAqIEBwYXJhbSBmYlxuICAgICAqIEBwYXJhbSBhdXRoXG4gICAgICogQHBhcmFtIG5vdGlmaWVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBhdXRoOiBBdXRoU2VydmljZSwgbm90aWZpZXI6IE5vdGlmaWVyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5fbm90aWZpZXIgPSBub3RpZmllcjtcbiAgICAgICAgdGhpcy5jcmVhdGVDb250cm9scygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIFwiZW1haWxcIjogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCI6IHRoaXMuY29uZmlybVBhc3N3b3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHN0YXRpYyBtZXRob2QgZm9yIG9wZW5pbmcgdGhlIHdpbmRvdyBvdXRzaWRlIG9mIHRoaXMgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBvcGVuKCk6IHZvaWQge1xuICAgICAgICBXaW5kb3dDb21wb25lbnQub3BlbihSZWdpc3RlcldpbmRvd0NvbXBvbmVudC5JRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIGlucHV0IGRhdGEgKGlmIHZhbGlkKSB0byB0aGUgQXV0aFNlcnZpY2UgaW4gYXR0ZW1wdCBmb3IgYSByZWdpc3RyYXRpb24uXG4gICAgICogQHBhcmFtIGZvcm1PYmpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXIoZm9ybU9iajogSVJlZ2lzdGVyRGF0YSk6IHZvaWQge1xuICAgICAgICAvLyBQcmUtcmVxdWVzdCB2YWxpZGF0aW9uXG4gICAgICAgIGlmICghdGhpcy5yZWdpc3RlckZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIGxldCBjb250cm9scyA9IHRoaXMucmVnaXN0ZXJGb3JtLmNvbnRyb2xzLFxuICAgICAgICAgICAgICAgIGVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGNvbnRyb2xzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xzLmhhc093blByb3BlcnR5KHByb3ApICYmICFjb250cm9sc1twcm9wXS52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChgJyR7cHJvcH0nIGlzIGludmFsaWQuYCk7IC8vIE5vdGU6ICdjb25maXJtUGFzc3dvcmQnIGxvb2tzIHVnbHkuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dSZWdpc3RyYXRpb25FcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBsb2FkZXJcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LnR1cm5PbigpO1xuXG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAgICB0aGlzLl9hdXRoLnJlZ2lzdGVyKGZvcm1PYmopXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wcm9jZXNzUmVnaXN0cmF0aW9uKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVyciA9PiB0aGlzLmhhbmRsZUVycm9ycyhlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IExvYWRlckNvbXBvbmVudC50dXJuT2ZmKClcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIHRoZSByZWdpc3RyYXRpb24gcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcHJvY2Vzc1JlZ2lzdHJhdGlvbihkYXRhOiBJU2VydmVyUmVnaXN0cmF0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgdGhpcy5fbm90aWZpZXIuc2hvdyhOb3RpZmllclR5cGUuU3VjY2VzcywgXCJTdWNjZXNzZnVsIHJlZ2lzdHJhdGlvblwiKTtcblxuICAgICAgICBXaW5kb3dDb21wb25lbnQuY2xvc2UoUmVnaXN0ZXJXaW5kb3dDb21wb25lbnQuSUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbGwgaW5jb21pbmcgZXJyb3JzIG9jY3VycmVkIG9uIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yKTogdm9pZCB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmFkUmVxdWVzdChlcnJvci5fYm9keSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ub3RpZmllci5zaG93KE5vdGlmaWVyVHlwZS5FcnJvciwgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgcmVsb2FkLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gICAgICAgICAgICAvLyB0b2RvIGxvZyBzZXJ2ZXIgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgYSByZWdpc3RyYXRpb24gcmVxdWVzdCAoRXJyb3IgNDAwKS5cbiAgICAgKiBAcGFyYW0gb3V0cHV0RGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgcHJvY2Vzc0JhZFJlcXVlc3Qob3V0cHV0RGF0YSk6IHZvaWQge1xuICAgICAgICB2YXIgZGF0YTogSVNlcnZlclJlZ2lzdHJhdGlvbkRhdGEgPSBKU09OLnBhcnNlKG91dHB1dERhdGEpO1xuXG4gICAgICAgIHRoaXMuc2hvd1JlZ2lzdHJhdGlvbkVycm9ycyhkYXRhLmVycm9ycyk7XG4gICAgICAgIExvYWRlckNvbXBvbmVudC50dXJuT2ZmKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gYnkgY2xlYXJpbmcgdGhlIHZhbHVlcyBvZiBhbGwgY29udHJvbHMuXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUudXBkYXRlVmFsdWUoXCJcIik7XG4gICAgICAgIHRoaXMuZW1haWwudXBkYXRlVmFsdWUoXCJcIik7XG4gICAgICAgIHRoaXMucGFzc3dvcmQudXBkYXRlVmFsdWUoXCJcIik7XG4gICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLnVwZGF0ZVZhbHVlKFwiXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIGlucHV0IGNvbnRyb2xzIGFuZCB0aGVpciByZXNwZWN0aXZlIHZhbGlkYXRvcnMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb250cm9scygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IG5ldyBDb250cm9sKFwiXCIsIEF1dGhWYWxpZGF0b3JzLnVzZXJuYW1lVmFsaWRhdGlvbigpKTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IG5ldyBDb250cm9sKFwiXCIsIEF1dGhWYWxpZGF0b3JzLmVtYWlsVmFsaWRhdGlvbigpKTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IG5ldyBDb250cm9sKFwiXCIsIEF1dGhWYWxpZGF0b3JzLnBhc3N3b3JkVmFsaWRhdGlvbigpKTtcbiAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBuZXcgQ29udHJvbChcIlwiLCBBdXRoVmFsaWRhdG9ycy5wYXNzd29yZENvbmZpcm1hdGlvblZhbGlkYXRpb24odGhpcy5wYXNzd29yZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSBlcnJvcnMgb2NjdXJyZWQgd2hlbiBhIHVzZXIgYXR0ZW1wdHMgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93UmVnaXN0cmF0aW9uRXJyb3JzKGVycm9ycz86IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2cgPSBcIlwiO1xuXG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnICs9IGVyciArIFwiPGJyPlwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcnMgPSB0cnVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
