System.register(["angular2/core", "angular2/router", "angular2/http", "../components/header/header.cmp", "../components/md_editor/mdEditor.cmp", "../components/sidebar/sidebar.cmp", "../components/windows/windows.cmp", "../components/profile/profile.cmp", "../directives/cloak.drv", "../directives/loader.cmp", "../directives/notifier.cmp", "../services/GfmService", "../components/sidebar/services/ToggleSidebar", "../services/NotifierService", "../services/Logger", "../components/md_editor/editor/services/DocSaveManager", "../components/header/services/DocNameSaveManager", "../services/AuthService", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, header_cmp_1, mdEditor_cmp_1, sidebar_cmp_1, windows_cmp_1, profile_cmp_1, cloak_drv_1, loader_cmp_1, notifier_cmp_1, GfmService_1, ToggleSidebar_1, NotifierService_1, Logger_1, DocSaveManager_1, DocNameSaveManager_1, AuthService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (header_cmp_1_1) {
                header_cmp_1 = header_cmp_1_1;
            },
            function (mdEditor_cmp_1_1) {
                mdEditor_cmp_1 = mdEditor_cmp_1_1;
            },
            function (sidebar_cmp_1_1) {
                sidebar_cmp_1 = sidebar_cmp_1_1;
            },
            function (windows_cmp_1_1) {
                windows_cmp_1 = windows_cmp_1_1;
            },
            function (profile_cmp_1_1) {
                profile_cmp_1 = profile_cmp_1_1;
            },
            function (cloak_drv_1_1) {
                cloak_drv_1 = cloak_drv_1_1;
            },
            function (loader_cmp_1_1) {
                loader_cmp_1 = loader_cmp_1_1;
            },
            function (notifier_cmp_1_1) {
                notifier_cmp_1 = notifier_cmp_1_1;
            },
            function (GfmService_1_1) {
                GfmService_1 = GfmService_1_1;
            },
            function (ToggleSidebar_1_1) {
                ToggleSidebar_1 = ToggleSidebar_1_1;
            },
            function (NotifierService_1_1) {
                NotifierService_1 = NotifierService_1_1;
            },
            function (Logger_1_1) {
                Logger_1 = Logger_1_1;
            },
            function (DocSaveManager_1_1) {
                DocSaveManager_1 = DocSaveManager_1_1;
            },
            function (DocNameSaveManager_1_1) {
                DocNameSaveManager_1 = DocNameSaveManager_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(gfm) {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        template: "\n      <router-outlet></router-outlet>\n\n      <div cloak-drv id=\"editor-cloak\"></div>\n      <header header-cmp id=\"main-header\" class=\"theme-bg\"></header>\n      <aside sidebar-cmp id=\"sidebar\"></aside>\n      <windows></windows>\n      <loader></loader>\n      <notifier></notifier>\n    ",
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            header_cmp_1.HeaderComponent,
                            sidebar_cmp_1.SidebarComponent,
                            windows_cmp_1.WindowsComponent,
                            cloak_drv_1.CloakDirective,
                            loader_cmp_1.LoaderComponent,
                            notifier_cmp_1.NotifierComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            GfmService_1.GfmService,
                            ToggleSidebar_1.ToggleSidebar,
                            NotifierService_1.NotifierService,
                            Logger_1.Logger,
                            DocSaveManager_1.DocSaveManager,
                            DocNameSaveManager_1.DocNameSaveManager,
                            AuthService_1.AuthService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: "/", component: mdEditor_cmp_1.MdEditorComponent, as: "Home", useAsDefault: true },
                        { path: "/profile", component: profile_cmp_1.ProfileComponent, as: "Profile" },
                    ]), 
                    __metadata('design:paramtypes', [GfmService_1.GfmService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9FQTtnQkFDSSxzQkFBYSxHQUFlO2dCQUFVLENBQUM7Z0JBdEMzQztvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSwrU0FTVDt3QkFDRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsVUFBVSxFQUFFOzRCQUNSLDBCQUFpQjs0QkFDakIsNEJBQWU7NEJBQ2YsOEJBQWdCOzRCQUNoQiw4QkFBZ0I7NEJBQ2hCLDBCQUFjOzRCQUNkLDRCQUFlOzRCQUNmLGdDQUFpQjt5QkFDcEI7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLHFCQUFjOzRCQUNkLHVCQUFVOzRCQUNWLDZCQUFhOzRCQUNiLGlDQUFlOzRCQUNmLGVBQU07NEJBQ04sK0JBQWM7NEJBQ2QsdUNBQWtCOzRCQUNsQix5QkFBVzt5QkFDZDtxQkFDSixDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQ0FBaUIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsOEJBQWdCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRTtxQkFDbkUsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY21wXCI7XG5pbXBvcnQge01kRWRpdG9yQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZF9lZGl0b3IvbWRFZGl0b3IuY21wXCI7XG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jbXBcIjtcbmltcG9ydCB7V2luZG93c0NvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2luZG93cy93aW5kb3dzLmNtcFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY21wXCI7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7Q2xvYWtEaXJlY3RpdmV9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2Nsb2FrLmRydlwiO1xuaW1wb3J0IHtMb2FkZXJDb21wb25lbnR9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2xvYWRlci5jbXBcIjtcbmltcG9ydCB7Tm90aWZpZXJDb21wb25lbnR9IGZyb20gXCIuLi9kaXJlY3RpdmVzL25vdGlmaWVyLmNtcFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtHZm1TZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvR2ZtU2VydmljZVwiOyAvLyBMb2FkLW9ubHlcbmltcG9ydCB7VG9nZ2xlU2lkZWJhcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9zZXJ2aWNlcy9Ub2dnbGVTaWRlYmFyXCI7XG5pbXBvcnQge05vdGlmaWVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL05vdGlmaWVyU2VydmljZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCIuLi9zZXJ2aWNlcy9Mb2dnZXJcIjtcbi8vIHNhdmVyc1xuaW1wb3J0IHtEb2NTYXZlTWFuYWdlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9zZXJ2aWNlcy9Eb2NTYXZlTWFuYWdlclwiO1xuaW1wb3J0IHtEb2NOYW1lU2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9zZXJ2aWNlcy9Eb2NOYW1lU2F2ZU1hbmFnZXJcIjtcbi8vIGF1dGhlbnRpY2F0aW9uXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvQXV0aFNlcnZpY2VcIjtcblxuLy8gUnhKU1xuaW1wb3J0IFwicnhqcy9SeFwiOyAvLyBhbGwgb3BlcmF0b3JzXG5cbi8vIE1haW4gQ29tcG9uZW50IChBcHApXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXG4gICAgICA8ZGl2IGNsb2FrLWRydiBpZD1cImVkaXRvci1jbG9ha1wiPjwvZGl2PlxuICAgICAgPGhlYWRlciBoZWFkZXItY21wIGlkPVwibWFpbi1oZWFkZXJcIiBjbGFzcz1cInRoZW1lLWJnXCI+PC9oZWFkZXI+XG4gICAgICA8YXNpZGUgc2lkZWJhci1jbXAgaWQ9XCJzaWRlYmFyXCI+PC9hc2lkZT5cbiAgICAgIDx3aW5kb3dzPjwvd2luZG93cz5cbiAgICAgIDxsb2FkZXI+PC9sb2FkZXI+XG4gICAgICA8bm90aWZpZXI+PC9ub3RpZmllcj5cbiAgICBgLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBST1VURVJfRElSRUNUSVZFUyxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgICAgICBXaW5kb3dzQ29tcG9uZW50LFxuICAgICAgICBDbG9ha0RpcmVjdGl2ZSxcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LFxuICAgICAgICBOb3RpZmllckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEhUVFBfUFJPVklERVJTLFxuICAgICAgICBHZm1TZXJ2aWNlLFxuICAgICAgICBUb2dnbGVTaWRlYmFyLFxuICAgICAgICBOb3RpZmllclNlcnZpY2UsXG4gICAgICAgIExvZ2dlcixcbiAgICAgICAgRG9jU2F2ZU1hbmFnZXIsXG4gICAgICAgIERvY05hbWVTYXZlTWFuYWdlcixcbiAgICAgICAgQXV0aFNlcnZpY2VcbiAgICBdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6IFwiL1wiLCBjb21wb25lbnQ6IE1kRWRpdG9yQ29tcG9uZW50LCBhczogXCJIb21lXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHsgcGF0aDogXCIvcHJvZmlsZVwiLCBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnQsIGFzOiBcIlByb2ZpbGVcIiB9LFxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChnZm06IEdmbVNlcnZpY2UpIHsgLyoqKi8gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
