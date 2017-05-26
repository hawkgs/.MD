System.register(["angular2/core", "angular2/common", "../../windows/directives/registerWindow.cmp/registerWindow.cmp", "../../../directives/loader.cmp", "../../../services/AuthService", "../../../services/validators/AuthValidators", "../services/ToggleSidebar"], function(exports_1, context_1) {
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
    var core_1, common_1, registerWindow_cmp_1, loader_cmp_1, AuthService_1, AuthValidators_1, ToggleSidebar_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (registerWindow_cmp_1_1) {
                registerWindow_cmp_1 = registerWindow_cmp_1_1;
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
            function (ToggleSidebar_1_1) {
                ToggleSidebar_1 = ToggleSidebar_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(fb, auth, sbService) {
                    this.displayErrors = false;
                    this._auth = auth;
                    this._sidebarService = sbService;
                    this.createControls();
                    this.loginForm = fb.group({
                        "username": this.username,
                        "password": this.password
                    });
                }
                LoginFormComponent.prototype.openRegisterWindow = function () {
                    registerWindow_cmp_1.RegisterWindowComponent.open();
                };
                LoginFormComponent.prototype.login = function (formObj) {
                    var _this = this;
                    if (!this.loginForm.valid) {
                        this.showInvalidLoginError();
                        return;
                    }
                    loader_cmp_1.LoaderComponent.turnOn();
                    this._auth.login(formObj)
                        .subscribe(function (data) { return _this.authenticate(data); }, function (err) { return console.error(err); }, function () { return loader_cmp_1.LoaderComponent.turnOff(); });
                };
                LoginFormComponent.prototype.authenticate = function (data) {
                    if (!data.success) {
                        this.showInvalidLoginError();
                        return;
                    }
                    this.displayErrors = false;
                    this._sidebarService.toggle();
                    this._auth.saveAuthData(data);
                };
                LoginFormComponent.prototype.createControls = function () {
                    this.username = new common_1.Control("", AuthValidators_1.AuthValidators.usernameValidation());
                    this.password = new common_1.Control("", AuthValidators_1.AuthValidators.usernameValidation());
                };
                LoginFormComponent.prototype.showInvalidLoginError = function () {
                    this.displayErrors = true;
                    this.errMsg = "The login credentials are invalid";
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: "[login-form-cmp]",
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n        <form [ngFormModel]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n            <p class=\"error-msg\" [ngClass]=\"{show: displayErrors}\">{{errMsg}}</p>\n            <p><input type=\"text\" placeholder=\"Username\" [ngFormControl]=\"loginForm.controls['username']\" maxlength=\"25\" /></p>\n            <p><input type=\"password\" placeholder=\"Password\" [ngFormControl]=\"loginForm.controls['password']\" maxlength=\"25\" /></p>\n            <p>\n                <button class=\"default theme-bg\">Login</button>\n                <a id=\"create-acc\" href=\"javascript:;\" (click)=\"openRegisterWindow()\">Create account</a>\n            </p>\n        </form>",
                        styles: ["\n        form { padding: 15px; }\n        input { width: 100%; margin-bottom: 10px; }\n\n        #create-acc {\n            font-size: 13px;\n            font-weight: 600;\n            float: right;\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, AuthService_1.AuthService, ToggleSidebar_1.ToggleSidebar])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2xvZ2luRm9ybS5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBaUJJLDRCQUFZLEVBQWUsRUFBRSxJQUFpQixFQUFFLFNBQXdCO29CQUNwRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO29CQUNqQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQzVCLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUtNLCtDQUFrQixHQUF6QjtvQkFDSSw0Q0FBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFNTSxrQ0FBSyxHQUFaLFVBQWEsT0FBMEI7b0JBQXZDLGlCQWtCQztvQkFoQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUM3QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFHRCw0QkFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUd6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7eUJBRXBCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLEVBQy9CLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsRUFDekIsY0FBTSxPQUFBLDRCQUFlLENBQUMsT0FBTyxFQUFFLEVBQXpCLENBQXlCLENBQ2xDLENBQUM7Z0JBQ1YsQ0FBQztnQkFNTyx5Q0FBWSxHQUFwQixVQUFxQixJQUFxQjtvQkFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7d0JBQzdCLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFLTywyQ0FBYyxHQUF0QjtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsK0JBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSwrQkFBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFLTyxrREFBcUIsR0FBN0I7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUNBQW1DLENBQUM7Z0JBQ3RELENBQUM7Z0JBakhMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsQ0FBQzt3QkFDN0IsUUFBUSxFQUFFLHdxQkFTRTt3QkFDWixNQUFNLEVBQUUsQ0FBQyxvTkFRSDt5QkFDTDtxQkFDSixDQUFDOztzQ0FBQTtnQkEyRkYseUJBQUM7WUFBRCxDQTFGQSxBQTBGQyxJQUFBO1lBMUZELG1EQTBGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2xvZ2luRm9ybS5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbCwgQ29udHJvbEdyb3VwLCBBYnN0cmFjdENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHtSZWdpc3RlcldpbmRvd0NvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3dpbmRvd3MvZGlyZWN0aXZlcy9yZWdpc3RlcldpbmRvdy5jbXAvcmVnaXN0ZXJXaW5kb3cuY21wXCI7XG5pbXBvcnQge0xvYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uL2RpcmVjdGl2ZXMvbG9hZGVyLmNtcFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhWYWxpZGF0b3JzfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdmFsaWRhdG9ycy9BdXRoVmFsaWRhdG9yc1wiO1xuaW1wb3J0IHtUb2dnbGVTaWRlYmFyfSBmcm9tIFwiLi4vc2VydmljZXMvVG9nZ2xlU2lkZWJhclwiO1xuXG4vLyBJbnRlcmZhY2VzXG5pbXBvcnQge0lMb2dpbkNyZWRlbnRpYWxzfSBmcm9tIFwiLi9jb250cmFjdHMvSUxvZ2luQ3JlZGVudGlhbHNcIjtcbmltcG9ydCB7SVNlcnZlckF1dGhEYXRhfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvY29udHJhY3RzL0lTZXJ2ZXJBdXRoRGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbbG9naW4tZm9ybS1jbXBdXCIsXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImxvZ2luRm9ybVwiIChuZ1N1Ym1pdCk9XCJsb2dpbihsb2dpbkZvcm0udmFsdWUpXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1zZ1wiIFtuZ0NsYXNzXT1cIntzaG93OiBkaXNwbGF5RXJyb3JzfVwiPnt7ZXJyTXNnfX08L3A+XG4gICAgICAgICAgICA8cD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibG9naW5Gb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddXCIgbWF4bGVuZ3RoPVwiMjVcIiAvPjwvcD5cbiAgICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgW25nRm9ybUNvbnRyb2xdPVwibG9naW5Gb3JtLmNvbnRyb2xzWydwYXNzd29yZCddXCIgbWF4bGVuZ3RoPVwiMjVcIiAvPjwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWZhdWx0IHRoZW1lLWJnXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBpZD1cImNyZWF0ZS1hY2NcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cIm9wZW5SZWdpc3RlcldpbmRvdygpXCI+Q3JlYXRlIGFjY291bnQ8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZm9ybT5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgZm9ybSB7IHBhZGRpbmc6IDE1cHg7IH1cbiAgICAgICAgaW5wdXQgeyB3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4gICAgICAgICNjcmVhdGUtYWNjIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1gXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkZvcm1Db21wb25lbnQge1xuICAgIHB1YmxpYyBkaXNwbGF5RXJyb3JzOiBib29sZWFuO1xuICAgIHB1YmxpYyBlcnJNc2c6IHN0cmluZztcblxuICAgIHB1YmxpYyBsb2dpbkZvcm06IENvbnRyb2xHcm91cDtcbiAgICBwdWJsaWMgdXNlcm5hbWU6IEFic3RyYWN0Q29udHJvbDtcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IEFic3RyYWN0Q29udHJvbDtcblxuICAgIHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3NpZGViYXJTZXJ2aWNlOiBUb2dnbGVTaWRlYmFyO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBuZWVkZWQgc2VydmljZShzKSBhbmQgYnVpbGRzIHRoZSBsb2dpbiBmb3JtIGZyb20gdGhlIGNyZWF0ZWQgY29udHJvbHMuXG4gICAgICogQHBhcmFtIGZiXG4gICAgICogQHBhcmFtIGF1dGhcbiAgICAgKiBAcGFyYW0gc2JTZXJ2aWNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBhdXRoOiBBdXRoU2VydmljZSwgc2JTZXJ2aWNlOiBUb2dnbGVTaWRlYmFyKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5fc2lkZWJhclNlcnZpY2UgPSBzYlNlcnZpY2U7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29udHJvbHMoKTtcblxuICAgICAgICB0aGlzLmxvZ2luRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgcmVnaXN0cmF0aW9uIHdpbmRvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlblJlZ2lzdGVyV2luZG93KCk6IHZvaWQge1xuICAgICAgICBSZWdpc3RlcldpbmRvd0NvbXBvbmVudC5vcGVuKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIGlucHV0IGRhdGEgKGlmIHZhbGlkKSB0byB0aGUgQXV0aFNlcnZpY2UgaW4gYXR0ZW1wdCBmb3IgYSBsb2dpbi5cbiAgICAgKiBAcGFyYW0gZm9ybU9ialxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpbihmb3JtT2JqOiBJTG9naW5DcmVkZW50aWFscyk6IHZvaWQge1xuICAgICAgICAvLyBQcmUtcmVxdWVzdCB2YWxpZGF0aW9uIC0gcmVxdWlyZW1lbnQsIGxlbmd0aCwgYWxsb3dlZCBzeW1ib2xzLlxuICAgICAgICBpZiAoIXRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dJbnZhbGlkTG9naW5FcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnQgdGhlIGxvYWRlclxuICAgICAgICBMb2FkZXJDb21wb25lbnQudHVybk9uKCk7XG5cbiAgICAgICAgLy8gUHJvY2VlZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICAgIHRoaXMuX2F1dGgubG9naW4oZm9ybU9iailcbiAgICAgICAgICAgIC8vLmRlbGF5KDIwMDApIC8vIHRlc3RpbmcgbG9hZGVyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5hdXRoZW50aWNhdGUoZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSwgLy8gVE9ETyBMT0dHRVJcbiAgICAgICAgICAgICAgICAoKSA9PiBMb2FkZXJDb21wb25lbnQudHVybk9mZigpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZlciBvdXRwdXQgZGF0YS5cbiAgICAgKiBAcGFyYW0gZGF0YSAtIFJldHVybmVkIEpTT04gZnJvbSB0aGUgc2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGUoZGF0YTogSVNlcnZlckF1dGhEYXRhKTogdm9pZCB7XG4gICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dJbnZhbGlkTG9naW5FcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NpZGViYXJTZXJ2aWNlLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLl9hdXRoLnNhdmVBdXRoRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFsbCBpbnB1dCBjb250cm9scyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSB2YWxpZGF0b3JzLlxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQ29udHJvbHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBuZXcgQ29udHJvbChcIlwiLCBBdXRoVmFsaWRhdG9ycy51c2VybmFtZVZhbGlkYXRpb24oKSk7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBuZXcgQ29udHJvbChcIlwiLCBBdXRoVmFsaWRhdG9ycy51c2VybmFtZVZhbGlkYXRpb24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV0cyBhIGxvZ2luIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGVycm9yIGNvbnRhaW5lciBmb3IgaW52YWxpZCBjcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dJbnZhbGlkTG9naW5FcnJvcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJNc2cgPSBcIlRoZSBsb2dpbiBjcmVkZW50aWFscyBhcmUgaW52YWxpZFwiO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
