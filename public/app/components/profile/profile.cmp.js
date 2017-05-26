System.register(["angular2/core", "angular2/router", "../../services/AuthService"], function(exports_1, context_1) {
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
    var ProfileComponent;
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
            ProfileComponent = (function () {
                function ProfileComponent(auth, router) {
                    if (!auth.isAuthenticated) {
                        router.navigate(["Home"]);
                    }
                    this.auth = auth;
                    this._router = router;
                }
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: "profile",
                        template: ""
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLDBCQUFZLElBQWlCLEVBQUUsTUFBYztvQkFFekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixDQUFDO2dCQWpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsRUFBRTtxQkFDZixDQUFDOztvQ0FBQTtnQkFlRix1QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsK0NBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicHJvZmlsZVwiLFxuICAgIHRlbXBsYXRlOiBcIlwiXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQge1xuICAgIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZTtcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcjtcblxuICAgIC8vIHRvZG9cbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gUHJvdGVjdGVkIHJvdXRlXG4gICAgICAgIGlmICghYXV0aC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCJIb21lXCJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHJvdXRlcjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
