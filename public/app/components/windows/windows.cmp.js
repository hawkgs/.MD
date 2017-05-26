System.register(["angular2/core", "angular2/router", "./directives/common/window.cmp/window.cmp", "./directives/registerWindow.cmp/registerWindow.cmp", "./directives/aboutWindow.cmp/aboutWindow.cmp", "./directives/newDocWindow.cmp", "../../services/AuthService"], function(exports_1, context_1) {
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
    var core_1, router_1, window_cmp_1, registerWindow_cmp_1, aboutWindow_cmp_1, newDocWindow_cmp_1, AuthService_1;
    var WindowsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (window_cmp_1_1) {
                window_cmp_1 = window_cmp_1_1;
            },
            function (registerWindow_cmp_1_1) {
                registerWindow_cmp_1 = registerWindow_cmp_1_1;
            },
            function (aboutWindow_cmp_1_1) {
                aboutWindow_cmp_1 = aboutWindow_cmp_1_1;
            },
            function (newDocWindow_cmp_1_1) {
                newDocWindow_cmp_1 = newDocWindow_cmp_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            WindowsComponent = (function () {
                function WindowsComponent(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                WindowsComponent = __decorate([
                    core_1.Component({
                        selector: "windows",
                        template: "\n      <window *ngIf=\"!auth.isAuthenticated\" win-title=\"Registration\" win-id=\"register\">\n          <div register-win-cmp></div>\n      </window>\n      <window win-title=\"About\" win-id=\"about\">\n          <div about-win-cmp></div>\n      </window>\n      <window *ngIf=\"router.isRouteActive(router.generate(['Home']))\" win-title=\"New Document\" win-id=\"new_document\">\n          <div new-doc-cmp></div>\n      </window>\n    ",
                        directives: [
                            window_cmp_1.WindowComponent,
                            registerWindow_cmp_1.RegisterWindowComponent,
                            aboutWindow_cmp_1.AboutWindowComponent,
                            newDocWindow_cmp_1.NewDocWindowComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router])
                ], WindowsComponent);
                return WindowsComponent;
            }());
            exports_1("WindowsComponent", WindowsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93cy93aW5kb3dzLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFTSSwwQkFBWSxJQUFpQixFQUFFLE1BQWM7b0JBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDRiQVVUO3dCQUNELFVBQVUsRUFBRTs0QkFDUiw0QkFBZTs0QkFDZiw0Q0FBdUI7NEJBQ3ZCLHNDQUFvQjs0QkFDcEIsd0NBQXFCO3lCQUN4QjtxQkFDSixDQUFDOztvQ0FBQTtnQkFjRix1QkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQsK0NBYUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3dpbmRvd3Mvd2luZG93cy5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7V2luZG93Q29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY3RpdmVzL2NvbW1vbi93aW5kb3cuY21wL3dpbmRvdy5jbXBcIjsgLy8gY29tbW9uXG5pbXBvcnQge1JlZ2lzdGVyV2luZG93Q29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JlZ2lzdGVyV2luZG93LmNtcC9yZWdpc3RlcldpbmRvdy5jbXBcIjtcbmltcG9ydCB7QWJvdXRXaW5kb3dDb21wb25lbnR9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYWJvdXRXaW5kb3cuY21wL2Fib3V0V2luZG93LmNtcFwiO1xuaW1wb3J0IHtOZXdEb2NXaW5kb3dDb21wb25lbnR9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmV3RG9jV2luZG93LmNtcFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIndpbmRvd3NcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHdpbmRvdyAqbmdJZj1cIiFhdXRoLmlzQXV0aGVudGljYXRlZFwiIHdpbi10aXRsZT1cIlJlZ2lzdHJhdGlvblwiIHdpbi1pZD1cInJlZ2lzdGVyXCI+XG4gICAgICAgICAgPGRpdiByZWdpc3Rlci13aW4tY21wPjwvZGl2PlxuICAgICAgPC93aW5kb3c+XG4gICAgICA8d2luZG93IHdpbi10aXRsZT1cIkFib3V0XCIgd2luLWlkPVwiYWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGFib3V0LXdpbi1jbXA+PC9kaXY+XG4gICAgICA8L3dpbmRvdz5cbiAgICAgIDx3aW5kb3cgKm5nSWY9XCJyb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoWydIb21lJ10pKVwiIHdpbi10aXRsZT1cIk5ldyBEb2N1bWVudFwiIHdpbi1pZD1cIm5ld19kb2N1bWVudFwiPlxuICAgICAgICAgIDxkaXYgbmV3LWRvYy1jbXA+PC9kaXY+XG4gICAgICA8L3dpbmRvdz5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgV2luZG93Q29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlcldpbmRvd0NvbXBvbmVudCxcbiAgICAgICAgQWJvdXRXaW5kb3dDb21wb25lbnQsXG4gICAgICAgIE5ld0RvY1dpbmRvd0NvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgV2luZG93c0NvbXBvbmVudCB7XG4gICAgcHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIGFuZCByb3V0ZXIgc2VydmljZXMuXG4gICAgICogQHBhcmFtIGF1dGhcbiAgICAgKiBAcGFyYW0gcm91dGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
