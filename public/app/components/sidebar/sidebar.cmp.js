System.register(["angular2/core", "angular2/router", "./directives/loginForm.cmp", "./directives/logout.drv", "./directives/exportMd.cmp", "./directives/newDocument.drv", "./directives/gfmToggle.cmp", "./directives/themeSelector.cmp", "./directives/about.drv", "./directives/common/sbExpandableItem.drv", "./services/ToggleSidebar", "../../services/AuthService"], function(exports_1, context_1) {
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
    var core_1, router_1, loginForm_cmp_1, logout_drv_1, exportMd_cmp_1, newDocument_drv_1, gfmToggle_cmp_1, themeSelector_cmp_1, about_drv_1, sbExpandableItem_drv_1, ToggleSidebar_1, AuthService_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (loginForm_cmp_1_1) {
                loginForm_cmp_1 = loginForm_cmp_1_1;
            },
            function (logout_drv_1_1) {
                logout_drv_1 = logout_drv_1_1;
            },
            function (exportMd_cmp_1_1) {
                exportMd_cmp_1 = exportMd_cmp_1_1;
            },
            function (newDocument_drv_1_1) {
                newDocument_drv_1 = newDocument_drv_1_1;
            },
            function (gfmToggle_cmp_1_1) {
                gfmToggle_cmp_1 = gfmToggle_cmp_1_1;
            },
            function (themeSelector_cmp_1_1) {
                themeSelector_cmp_1 = themeSelector_cmp_1_1;
            },
            function (about_drv_1_1) {
                about_drv_1 = about_drv_1_1;
            },
            function (sbExpandableItem_drv_1_1) {
                sbExpandableItem_drv_1 = sbExpandableItem_drv_1_1;
            },
            function (ToggleSidebar_1_1) {
                ToggleSidebar_1 = ToggleSidebar_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(elem, sidebarService, auth, router) {
                    sidebarService.sidebarRef = elem;
                    this.auth = auth;
                    this.router = router;
                }
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: "[sidebar-cmp]",
                        template: "\n      <div class=\"cont\">\n          <template [ngIf]=\"!auth.isAuthenticated\">\n              <div sb-expandable-drv class=\"sb-item list\">\n                  <p>Login</p>\n                  <div login-form-cmp></div>\n              </div>\n          </template>\n          <template [ngIf]=\"auth.isAuthenticated\">\n              <div logout-drv class=\"sb-item\">\n                  <p>Logout</p>\n              </div>\n              <hr/>\n              <div class=\"sb-item\">\n                  <p>Profile Settings</p>\n              </div>\n              <hr/>\n              <div class=\"sb-item\">\n                  <p>Repository</p>\n              </div>\n          </template>\n          <hr/>\n          <template [ngIf]=\"router.isRouteActive(router.generate(['Home']))\">\n              <div sb-expandable-drv class=\"sb-item list\">\n                  <p>Export As</p>\n                  <div export-md-cmp></div>\n              </div>\n              <hr/>\n              <div new-doc-drv class=\"sb-item\">\n                  <p>Start New Document</p>\n              </div>\n              <hr/>\n              <div class=\"sb-item\">\n                  <p gfm-toggle-cmp></p>\n              </div>\n              <hr/>\n          </template>\n          <div sb-expandable-drv class=\"sb-item list\">\n              <p>Pick Theme Color</p>\n              <div theme-selector-cmp></div>\n          </div>\n          <hr/>\n          <div about-drv class=\"sb-item\">\n              <p>About</p>\n          </div>\n      </div>\n    ",
                        styles: ["\n      /* Content Container */\n      /* previously '#sidebar > .cont' - Ng2 will do with the scope now */\n      .cont {\n          width: 300px;\n      }\n\n      /* SIDEBAR ITEM */\n\n      /* Text */\n      .sb-item > p {\n          padding: 15px;\n          font-weight: 600;\n          cursor: pointer;\n          transition: background 0.3s ease;\n      }\n\n      .sb-item > p:hover {\n          background: rgba(255, 255, 255, 0.05);\n      }\n\n      /* Content (if in list mode) */\n      .sb-item.list > div {\n          position: relative;\n          max-height: 0;\n          transition: max-height 0.3s ease;\n          box-sizing: border-box;\n          overflow: hidden;\n      }\n\n      .sb-item.list > div.expanded {\n          max-height: 300px;\n      }\n    "],
                        directives: [
                            loginForm_cmp_1.LoginFormComponent,
                            logout_drv_1.LogoutDirective,
                            exportMd_cmp_1.ExportMdComponent,
                            newDocument_drv_1.NewDocumentDirective,
                            gfmToggle_cmp_1.GfmToggleComponent,
                            themeSelector_cmp_1.ThemeSelectorComponent,
                            about_drv_1.AboutDirective,
                            sbExpandableItem_drv_1.SbExpandableItemDirective
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, ToggleSidebar_1.ToggleSidebar, AuthService_1.AuthService, router_1.Router])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlIQTtnQkFXSSwwQkFBWSxJQUFnQixFQUNoQixjQUE2QixFQUM3QixJQUFpQixFQUNqQixNQUFjO29CQUV0QixjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixDQUFDO2dCQWpITDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsbWhEQThDVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxneEJBaUNSLENBQUM7d0JBQ0YsVUFBVSxFQUFFOzRCQUNSLGtDQUFrQjs0QkFDbEIsNEJBQWU7NEJBQ2YsZ0NBQWlCOzRCQUNqQixzQ0FBb0I7NEJBQ3BCLGtDQUFrQjs0QkFDbEIsMENBQXNCOzRCQUN0QiwwQkFBYzs0QkFDZCxnREFBeUI7eUJBQzVCO3FCQUNKLENBQUM7O29DQUFBO2dCQXFCRix1QkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsK0NBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQge0xvZ2luRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9sb2dpbkZvcm0uY21wXCI7XG5pbXBvcnQge0xvZ291dERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9sb2dvdXQuZHJ2XCI7XG5pbXBvcnQge0V4cG9ydE1kQ29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY3RpdmVzL2V4cG9ydE1kLmNtcFwiO1xuaW1wb3J0IHtOZXdEb2N1bWVudERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZXdEb2N1bWVudC5kcnZcIjtcbmltcG9ydCB7R2ZtVG9nZ2xlQ29tcG9uZW50fSBmcm9tIFwiLi9kaXJlY3RpdmVzL2dmbVRvZ2dsZS5jbXBcIjtcbmltcG9ydCB7VGhlbWVTZWxlY3RvckNvbXBvbmVudH0gZnJvbSBcIi4vZGlyZWN0aXZlcy90aGVtZVNlbGVjdG9yLmNtcFwiO1xuaW1wb3J0IHtBYm91dERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9hYm91dC5kcnZcIjtcblxuLy8gY29tbW9uXG5pbXBvcnQge1NiRXhwYW5kYWJsZUl0ZW1EaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY29tbW9uL3NiRXhwYW5kYWJsZUl0ZW0uZHJ2XCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge1RvZ2dsZVNpZGViYXJ9IGZyb20gXCIuL3NlcnZpY2VzL1RvZ2dsZVNpZGViYXJcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbc2lkZWJhci1jbXBdXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250XCI+XG4gICAgICAgICAgPHRlbXBsYXRlIFtuZ0lmXT1cIiFhdXRoLmlzQXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IHNiLWV4cGFuZGFibGUtZHJ2IGNsYXNzPVwic2ItaXRlbSBsaXN0XCI+XG4gICAgICAgICAgICAgICAgICA8cD5Mb2dpbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgbG9naW4tZm9ybS1jbXA+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIFtuZ0lmXT1cImF1dGguaXNBdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgIDxkaXYgbG9nb3V0LWRydiBjbGFzcz1cInNiLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxwPkxvZ291dDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8cD5Qcm9maWxlIFNldHRpbmdzPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNiLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlJlcG9zaXRvcnk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGhyLz5cbiAgICAgICAgICA8dGVtcGxhdGUgW25nSWZdPVwicm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFsnSG9tZSddKSlcIj5cbiAgICAgICAgICAgICAgPGRpdiBzYi1leHBhbmRhYmxlLWRydiBjbGFzcz1cInNiLWl0ZW0gbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPHA+RXhwb3J0IEFzPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBleHBvcnQtbWQtY21wPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgPGRpdiBuZXctZG9jLWRydiBjbGFzcz1cInNiLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxwPlN0YXJ0IE5ldyBEb2N1bWVudDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8cCBnZm0tdG9nZ2xlLWNtcD48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBzYi1leHBhbmRhYmxlLWRydiBjbGFzcz1cInNiLWl0ZW0gbGlzdFwiPlxuICAgICAgICAgICAgICA8cD5QaWNrIFRoZW1lIENvbG9yPC9wPlxuICAgICAgICAgICAgICA8ZGl2IHRoZW1lLXNlbGVjdG9yLWNtcD48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxkaXYgYWJvdXQtZHJ2IGNsYXNzPVwic2ItaXRlbVwiPlxuICAgICAgICAgICAgICA8cD5BYm91dDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgLyogQ29udGVudCBDb250YWluZXIgKi9cbiAgICAgIC8qIHByZXZpb3VzbHkgJyNzaWRlYmFyID4gLmNvbnQnIC0gTmcyIHdpbGwgZG8gd2l0aCB0aGUgc2NvcGUgbm93ICovXG4gICAgICAuY29udCB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgfVxuXG4gICAgICAvKiBTSURFQkFSIElURU0gKi9cblxuICAgICAgLyogVGV4dCAqL1xuICAgICAgLnNiLWl0ZW0gPiBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuc2ItaXRlbSA+IHA6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICB9XG5cbiAgICAgIC8qIENvbnRlbnQgKGlmIGluIGxpc3QgbW9kZSkgKi9cbiAgICAgIC5zYi1pdGVtLmxpc3QgPiBkaXYge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnNiLWl0ZW0ubGlzdCA+IGRpdi5leHBhbmRlZCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICB9XG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBMb2dpbkZvcm1Db21wb25lbnQsXG4gICAgICAgIExvZ291dERpcmVjdGl2ZSxcbiAgICAgICAgRXhwb3J0TWRDb21wb25lbnQsXG4gICAgICAgIE5ld0RvY3VtZW50RGlyZWN0aXZlLFxuICAgICAgICBHZm1Ub2dnbGVDb21wb25lbnQsXG4gICAgICAgIFRoZW1lU2VsZWN0b3JDb21wb25lbnQsXG4gICAgICAgIEFib3V0RGlyZWN0aXZlLFxuICAgICAgICBTYkV4cGFuZGFibGVJdGVtRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2U7XG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogUHV0cyB0aGUgaW5qZWN0ZWQgc2lkZWJhciBlbGVtZW50IHJlZmVyZW5jZSBpbiBpdHMgY29udGFpbmVyIChpbiBUb2dnbGVTaWRlYmFyKSBhbmQgc2V0cyBzZXJ2aWNlcy5cbiAgICAgKiBAcGFyYW0gZWxlbVxuICAgICAqIEBwYXJhbSBzaWRlYmFyU2VydmljZVxuICAgICAqIEBwYXJhbSBhdXRoXG4gICAgICogQHBhcmFtIHJvdXRlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgc2lkZWJhclNlcnZpY2U6IFRvZ2dsZVNpZGViYXIsXG4gICAgICAgICAgICAgICAgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgc2lkZWJhclNlcnZpY2Uuc2lkZWJhclJlZiA9IGVsZW07XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
