System.register(["angular2/core", "../../windows/directives/aboutWindow.cmp/aboutWindow.cmp"], function(exports_1, context_1) {
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
    var core_1, aboutWindow_cmp_1;
    var AboutDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aboutWindow_cmp_1_1) {
                aboutWindow_cmp_1 = aboutWindow_cmp_1_1;
            }],
        execute: function() {
            AboutDirective = (function () {
                function AboutDirective() {
                }
                AboutDirective.prototype.openAboutWindow = function () {
                    aboutWindow_cmp_1.AboutWindowComponent.open();
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], AboutDirective.prototype, "openAboutWindow", null);
                AboutDirective = __decorate([
                    core_1.Directive({
                        selector: "[about-drv]"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutDirective);
                return AboutDirective;
            }());
            exports_1("AboutDirective", AboutDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2Fib3V0LmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO2dCQVFBLENBQUM7Z0JBSFUsd0NBQWUsR0FBdEI7b0JBQ0ksc0NBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBSEQ7b0JBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7cUVBQUE7Z0JBUDFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7cUJBQzFCLENBQUM7O2tDQUFBO2dCQVNGLHFCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwyQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2Fib3V0LmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7QWJvdXRXaW5kb3dDb21wb25lbnR9IGZyb20gXCIuLi8uLi93aW5kb3dzL2RpcmVjdGl2ZXMvYWJvdXRXaW5kb3cuY21wL2Fib3V0V2luZG93LmNtcFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbYWJvdXQtZHJ2XVwiXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0RGlyZWN0aXZlIHtcbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGUgYWJvdXQgd2luZG93IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgLk1EXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9wZW5BYm91dFdpbmRvdygpOiB2b2lkIHtcbiAgICAgICAgQWJvdXRXaW5kb3dDb21wb25lbnQub3BlbigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
