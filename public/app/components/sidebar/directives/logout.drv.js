System.register(["angular2/core", "angular2/router", "../../../services/AuthService"], function(exports_1, context_1) {
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
    var core_1, router_1, AuthService_1;
    var LogoutDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            LogoutDirective = (function () {
                function LogoutDirective(auth, router) {
                    this._auth = auth;
                    this._router = router;
                }
                LogoutDirective.prototype.logout = function () {
                    this._auth.logout();
                    this._router.navigate(["Home"]);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], LogoutDirective.prototype, "logout", null);
                LogoutDirective = __decorate([
                    core_1.Directive({
                        selector: "[logout-drv]"
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router])
                ], LogoutDirective);
                return LogoutDirective;
            }());
            exports_1("LogoutDirective", LogoutDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2xvZ291dC5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFRSSx5QkFBWSxJQUFpQixFQUFFLE1BQWM7b0JBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDMUIsQ0FBQztnQkFNTSxnQ0FBTSxHQUFiO29CQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFKRDtvQkFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozs2REFBQTtnQkFuQjFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7cUJBQzNCLENBQUM7O21DQUFBO2dCQXNCRixzQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsNkNBcUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL2RpcmVjdGl2ZXMvbG9nb3V0LmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltsb2dvdXQtZHJ2XVwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dERpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfYXV0aDogQXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhdXRoZW50aWNhdGlvbiBhbmQgcm91dGVyIHNlcnZpY2VzLlxuICAgICAqIEBwYXJhbSBhdXRoXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuX2F1dGggPSBhdXRoO1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbG9nb3V0IHdoZW5ldmVyIHRoZSB1c2VyIGNsaWNrIG9uIHRoZSBkaXJlY3RpdmUgYW5kIHRoZW4gcmVkaXJlY3RzIHRvIGhvbWUgcGFnZS5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hdXRoLmxvZ291dCgpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiSG9tZVwiXSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
