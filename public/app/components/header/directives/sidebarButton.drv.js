System.register(["angular2/core", "../../sidebar/services/ToggleSidebar", "../../../services/CloakService"], function(exports_1, context_1) {
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
    var core_1, ToggleSidebar_1, CloakService_1;
    var SidebarButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ToggleSidebar_1_1) {
                ToggleSidebar_1 = ToggleSidebar_1_1;
            },
            function (CloakService_1_1) {
                CloakService_1 = CloakService_1_1;
            }],
        execute: function() {
            SidebarButtonDirective = (function () {
                function SidebarButtonDirective(sidebarService, elem) {
                    this._sidebarService = sidebarService;
                    this._sidebarService.buttonRef = elem;
                }
                SidebarButtonDirective.prototype.onClick = function () {
                    this._sidebarService.toggle();
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], SidebarButtonDirective.prototype, "onClick", null);
                SidebarButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[sidebar-btn-drv]",
                        providers: [CloakService_1.CloakService]
                    }), 
                    __metadata('design:paramtypes', [ToggleSidebar_1.ToggleSidebar, core_1.ElementRef])
                ], SidebarButtonDirective);
                return SidebarButtonDirective;
            }());
            exports_1("SidebarButtonDirective", SidebarButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvc2lkZWJhckJ1dHRvbi5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFRSSxnQ0FBWSxjQUE2QixFQUFFLElBQWdCO29CQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxDQUFDO2dCQU1NLHdDQUFPLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQztnQkFIRDtvQkFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7OztxRUFBQTtnQkFwQjFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsU0FBUyxFQUFFLENBQUMsMkJBQVksQ0FBQztxQkFDNUIsQ0FBQzs7MENBQUE7Z0JBcUJGLDZCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCwyREFvQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL3NpZGViYXJCdXR0b24uZHJ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7VG9nZ2xlU2lkZWJhcn0gZnJvbSBcIi4uLy4uL3NpZGViYXIvc2VydmljZXMvVG9nZ2xlU2lkZWJhclwiO1xuaW1wb3J0IHtDbG9ha1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9DbG9ha1NlcnZpY2VcIjsgLy8gUmVxdWlyZWQgYXMgZGVwZW5kZW5jeSBmb3IgVG9nZ2xlU2lkZWJhciBzZXJ2aWNlXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzaWRlYmFyLWJ0bi1kcnZdXCIsXG4gICAgcHJvdmlkZXJzOiBbQ2xvYWtTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQnV0dG9uRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF9zaWRlYmFyU2VydmljZTogVG9nZ2xlU2lkZWJhcjtcblxuICAgIC8qKlxuICAgICAqIFNldHMgaW5qZWN0ZWQgc2lkZWJhciBzZXJ2aWNlIGFuZCBlbGVtZW50IHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0gc2lkZWJhclNlcnZpY2VcbiAgICAgKiBAcGFyYW0gZWxlbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNpZGViYXJTZXJ2aWNlOiBUb2dnbGVTaWRlYmFyLCBlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX3NpZGViYXJTZXJ2aWNlID0gc2lkZWJhclNlcnZpY2U7XG4gICAgICAgIHRoaXMuX3NpZGViYXJTZXJ2aWNlLmJ1dHRvblJlZiA9IGVsZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBzaWRlYmFyIG9uIGNsaWNrIChvbi9vZmYpLlxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlYmFyU2VydmljZS50b2dnbGUoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
