System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "./app/app.cmp"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, router_1, app_cmp_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_cmp_1_1) {
                app_cmp_1 = app_cmp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_cmp_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BLG1CQUFTLENBQUMsc0JBQVksRUFBRTtnQkFDcEIseUJBQWdCO2dCQUNoQixjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQzthQUNoRSxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tIFwiYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlclwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC9hcHAuY21wXCI7XG4vL2ltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8vZW5hYmxlUHJvZE1vZGUoKTtcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSlcbl0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
