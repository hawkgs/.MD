System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(http) {
                    this._http = http;
                    this.authValidityCheck();
                }
                Object.defineProperty(AuthService.prototype, "isAuthenticated", {
                    get: function () {
                        return this._isAuthenticated;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AuthService.prototype, "username", {
                    get: function () {
                        var lsObj;
                        if (!this._username) {
                            lsObj = localStorage.getItem(AuthService.LS_AUTH_DATA);
                            if (lsObj) {
                                this._username = JSON.parse(lsObj).username;
                            }
                        }
                        return this._username;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.login = function (credentials) {
                    if (this._isAuthenticated) {
                        return;
                    }
                    var stringifyied = JSON.stringify(credentials), options = new http_1.RequestOptions({ headers: this.getJsonContentTypeHeader() });
                    return this._http.post(AuthService.LOGIN_API_URL, stringifyied, options)
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype.logout = function () {
                    if (this._isAuthenticated) {
                        this._username = "";
                        this._token = "";
                        this._isAuthenticated = false;
                        localStorage.removeItem(AuthService.LS_AUTH_DATA);
                    }
                };
                AuthService.prototype.register = function (data) {
                    if (this._isAuthenticated) {
                        return;
                    }
                    var stringifyied = JSON.stringify(data), options = new http_1.RequestOptions({ headers: this.getJsonContentTypeHeader() });
                    return this._http.post(AuthService.USER_API_URL, stringifyied, options)
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype.saveAuthData = function (data) {
                    var authData = {
                        username: data.username,
                        token: data.token
                    };
                    this._username = data.username;
                    this._token = data.token;
                    this._isAuthenticated = true;
                    localStorage.setItem(AuthService.LS_AUTH_DATA, JSON.stringify(authData));
                };
                AuthService.prototype.authValidityCheck = function () {
                    var _this = this;
                    if (!localStorage.getItem(AuthService.LS_AUTH_DATA)) {
                        this._isAuthenticated = false;
                        return;
                    }
                    var tokenHeader = this.getJwtBearerHeader(), options = new http_1.RequestOptions({ headers: tokenHeader });
                    this._http.get(AuthService.AUTH_API_URL, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.processOkValidityRequest(data); }, function (err) { return _this.processBadValidityRequest(err); });
                };
                AuthService.prototype.processOkValidityRequest = function (data) {
                    if (data.success) {
                        this._isAuthenticated = true;
                    }
                };
                AuthService.prototype.processBadValidityRequest = function (error) {
                    var body = error._body;
                    if (error.status === 401 && !body.success) {
                        localStorage.removeItem(AuthService.LS_AUTH_DATA);
                        this._isAuthenticated = false;
                    }
                    else {
                        console.error(error);
                    }
                };
                AuthService.prototype.getJwtBearerHeader = function () {
                    if (!this._token) {
                        this._token = JSON.parse(localStorage.getItem(AuthService.LS_AUTH_DATA)).token;
                    }
                    return new http_1.Headers({ "Content-Type": "application/json", "Authorization": "Bearer " + this._token });
                };
                AuthService.prototype.getJsonContentTypeHeader = function () {
                    return new http_1.Headers({ "Content-Type": "application/json" });
                };
                AuthService.USER_API_URL = "/api/users";
                AuthService.LOGIN_API_URL = "/auth/login";
                AuthService.AUTH_API_URL = "/auth/valid";
                AuthService.LS_AUTH_DATA = "md_auth_data";
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBZUkscUJBQVksSUFBVTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQU1ELHNCQUFXLHdDQUFlO3lCQUExQjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUNqQyxDQUFDOzs7bUJBQUE7Z0JBTUQsc0JBQVcsaUNBQVE7eUJBQW5CO3dCQUNJLElBQUksS0FBSyxDQUFDO3dCQUVWLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFFdkQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDOzRCQUNoRCxDQUFDO3dCQUNMLENBQUM7d0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQzFCLENBQUM7OzttQkFBQTtnQkFPTSwyQkFBSyxHQUFaLFVBQWEsV0FBOEI7b0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQzFDLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUUvRSxNQUFNLENB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Q0FBQztnQkE5S2Msd0JBQVksR0FBVyxZQUFZLENBQUM7Z0JBQ3BDLHlCQUFhLEdBQVcsYUFBYSxDQUFDO2dCQUN0Qyx3QkFBWSxHQUFXLGFBQWEsQ0FBQztnQkFDckMsd0JBQVksR0FBVyxjQUFjLENBQUM7Z0JBTHpEO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWlMYixrQkFBQztZQUFELENBaExBLEFBZ0xDLElBQUE7WUFoTEQscUNBZ0xDLENBQUEiLCJmaWxlIjoic2VydmljZXMvQXV0aFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbi8vIEludGVyZmFjZXNcbmltcG9ydCB7SVJlZ2lzdGVyRGF0YX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2luZG93cy9kaXJlY3RpdmVzL3JlZ2lzdGVyV2luZG93LmNtcC9jb250cmFjdHMvSVJlZ2lzdGVyRGF0YVwiO1xuaW1wb3J0IHtJTG9naW5DcmVkZW50aWFsc30gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2NvbnRyYWN0cy9JTG9naW5DcmVkZW50aWFsc1wiO1xuaW1wb3J0IHtJU2VydmVyUmVnaXN0cmF0aW9uRGF0YX0gZnJvbSBcIi4vY29udHJhY3RzL0lTZXJ2ZXJSZWdpc3RyYXRpb25EYXRhXCI7XG5pbXBvcnQge0lTZXJ2ZXJBdXRoRGF0YX0gZnJvbSBcIi4vY29udHJhY3RzL0lTZXJ2ZXJBdXRoRGF0YVwiO1xuXG4vKipcbiAqIE1hbmFnZXMgYWxsIG9mIHRoZSBwcm9jZXNzZXMgcmVsYXRlZCB0byB1c2VyIGF1dGhlbnRpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIFVTRVJfQVBJX1VSTDogc3RyaW5nID0gXCIvYXBpL3VzZXJzXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgTE9HSU5fQVBJX1VSTDogc3RyaW5nID0gXCIvYXV0aC9sb2dpblwiO1xuICAgIHByaXZhdGUgc3RhdGljIEFVVEhfQVBJX1VSTDogc3RyaW5nID0gXCIvYXV0aC92YWxpZFwiO1xuICAgIHByaXZhdGUgc3RhdGljIExTX0FVVEhfREFUQTogc3RyaW5nID0gXCJtZF9hdXRoX2RhdGFcIjtcblxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHA7XG4gICAgcHJpdmF0ZSBfaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFNldHMgSFRUUCBjbGllbnQuXG4gICAgICogQHBhcmFtIGh0dHBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuX2h0dHAgPSBodHRwO1xuICAgICAgICB0aGlzLmF1dGhWYWxpZGl0eUNoZWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBhdXRoZW50aWNhdGlvbiBzdGF0ZSBvZiB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYXV0aGVudGljYXRlZCB1c2VyLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgbHNPYmo7XG5cbiAgICAgICAgaWYgKCF0aGlzLl91c2VybmFtZSkge1xuICAgICAgICAgICAgbHNPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoU2VydmljZS5MU19BVVRIX0RBVEEpO1xuXG4gICAgICAgICAgICBpZiAobHNPYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VybmFtZSA9IEpTT04ucGFyc2UobHNPYmopLnVzZXJuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgaW4gYXR0ZW1wdCBmb3IgYSBsb2dpbi5cbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbHNcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxSPn0gT2JzZXJ2YWJsZSBvYmplY3QgdG8gd2hpY2ggd2Ugc2hvdWxkIC5zdWJzY3JpYmUoKVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dpbihjcmVkZW50aWFsczogSUxvZ2luQ3JlZGVudGlhbHMpOiBPYnNlcnZhYmxlPElTZXJ2ZXJBdXRoRGF0YT4ge1xuICAgICAgICBpZiAodGhpcy5faXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RyaW5naWZ5aWVkID0gSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuZ2V0SnNvbkNvbnRlbnRUeXBlSGVhZGVyKCkgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBdXRoU2VydmljZS5MT0dJTl9BUElfVVJMLCBzdHJpbmdpZnlpZWQsIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8SVNlcnZlckF1dGhEYXRhPiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2cgb3V0cyB0aGUgdXNlciBieSByZW1vdmluZyB0aGUgYXV0aCBkYXRhIGZyb20gdGhlIGxvY2FsU3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5faXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VybmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQXV0aFNlcnZpY2UuTFNfQVVUSF9EQVRBKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgaW4gYXR0ZW1wdCBmb3IgYSByZWdpc3RyYXRpb24uXG4gICAgICogQHBhcmFtIGRhdGEgLSBGb3JtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxSPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXIoZGF0YTogSVJlZ2lzdGVyRGF0YSk6IE9ic2VydmFibGU8SVNlcnZlclJlZ2lzdHJhdGlvbkRhdGE+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0cmluZ2lmeWllZCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IHRoaXMuZ2V0SnNvbkNvbnRlbnRUeXBlSGVhZGVyKCkgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBdXRoU2VydmljZS5VU0VSX0FQSV9VUkwsIHN0cmluZ2lmeWllZCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxJU2VydmVyUmVnaXN0cmF0aW9uRGF0YT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIGF1dGhlbnRpY2F0aW9uIGRhdGEgdG8gdGhlIGxvY2FsU3RvcmFnZS5cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzYXZlQXV0aERhdGEoZGF0YTogSVNlcnZlckF1dGhEYXRhKTogdm9pZCB7XG4gICAgICAgIHZhciBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgdGhpcy5faXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBdXRoU2VydmljZS5MU19BVVRIX0RBVEEsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgdmFsaWRhdGlvbiBjaGVjayBvZiB0aGUgY3VycmVudCBKV1QgaW4gdGhlIGxvY2FsU3RvcmFnZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGF1dGhWYWxpZGl0eUNoZWNrKCk6IHZvaWQge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBub3RoaW5nIGluIGxvY2FsU3RvcmFnZSAuLi5cbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoU2VydmljZS5MU19BVVRIX0RBVEEpKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVsc2UgY2hlY2sgdGhlIHZhbGlkaXR5IG9mIHRoZSB0b2tlbiB3aXRoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyXG4gICAgICAgIGxldCB0b2tlbkhlYWRlcjogSGVhZGVycyA9IHRoaXMuZ2V0Snd0QmVhcmVySGVhZGVyKCksXG4gICAgICAgICAgICBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdG9rZW5IZWFkZXIgfSk7XG5cbiAgICAgICAgdGhpcy5faHR0cC5nZXQoQXV0aFNlcnZpY2UuQVVUSF9BUElfVVJMLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnByb2Nlc3NPa1ZhbGlkaXR5UmVxdWVzdChkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gdGhpcy5wcm9jZXNzQmFkVmFsaWRpdHlSZXF1ZXN0KGVycikgLy8gdG9kbyBsb2dnZXJcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBzdWNjZXNzZnVsIHJlc3BvbnNlIGlzIHN1Y2Nlc3NmdWwgYW5kIGlmIHllcywgc2V0cyB0aGUgYXV0aGVudGljYXRpb24gc3RhdGUgdG8gdHJ1ZS5cbiAgICAgKiBAcGFyYW0gZGF0YSAtIFJldHVybmVkIEpTT04gZGF0YSBmcm9tIHRoZSB2YWxpZGl0eSByZXF1ZXN0XG4gICAgICovXG4gICAgcHJpdmF0ZSBwcm9jZXNzT2tWYWxpZGl0eVJlcXVlc3QoZGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIgaXMgdW5hdXRoZW50aWNhdGVkICg0MDEpIG9yIGEgc2VydmVyIGVycm9yIG9jY3VycmVkIGFuZCBzZXRzIHRoZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICAgKiBAcGFyYW0gZXJyb3IgLSBSZXR1cm5lZCBlcnJvciBmcm9tIHRoZSBiYWQgcmVxdWVzdFxuICAgICAqL1xuICAgIHByaXZhdGUgcHJvY2Vzc0JhZFZhbGlkaXR5UmVxdWVzdChlcnJvcik6IHZvaWQge1xuICAgICAgICB2YXIgYm9keSA9IGVycm9yLl9ib2R5O1xuXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSAmJiAhYm9keS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBdXRoU2VydmljZS5MU19BVVRIX0RBVEEpO1xuICAgICAgICAgICAgdGhpcy5faXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gdG9kbyBsb2dnZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggdGhlIEpXVC5cbiAgICAgKiBAcmV0dXJucyB7SGVhZGVyc31cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEp3dEJlYXJlckhlYWRlcigpOiBIZWFkZXJzIHtcbiAgICAgICAgaWYgKCF0aGlzLl90b2tlbikge1xuICAgICAgICAgICAgdGhpcy5fdG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEF1dGhTZXJ2aWNlLkxTX0FVVEhfREFUQSkpLnRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBIZWFkZXJzKHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dGhpcy5fdG9rZW59YCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIEpTT04gY29udGVudCB0eXBlIGhlYWRlci5cbiAgICAgKiBAcmV0dXJucyB7SGVhZGVyc31cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldEpzb25Db250ZW50VHlwZUhlYWRlcigpOiBIZWFkZXJzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIZWFkZXJzKHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
