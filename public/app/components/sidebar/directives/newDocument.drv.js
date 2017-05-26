System.register(["angular2/core", "../../windows/directives/newDocWindow.cmp"], function(exports_1, context_1) {
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
    var core_1, newDocWindow_cmp_1;
    var NewDocumentDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (newDocWindow_cmp_1_1) {
                newDocWindow_cmp_1 = newDocWindow_cmp_1_1;
            }],
        execute: function() {
            NewDocumentDirective = (function () {
                function NewDocumentDirective() {
                }
                NewDocumentDirective.prototype.openNewDocWindow = function () {
                    newDocWindow_cmp_1.NewDocWindowComponent.open();
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], NewDocumentDirective.prototype, "openNewDocWindow", null);
                NewDocumentDirective = __decorate([
                    core_1.Directive({
                        selector: "[new-doc-drv]"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewDocumentDirective);
                return NewDocumentDirective;
            }());
            exports_1("NewDocumentDirective", NewDocumentDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL25ld0RvY3VtZW50LmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO2dCQVFBLENBQUM7Z0JBSFUsK0NBQWdCLEdBQXZCO29CQUNJLHdDQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2dCQUhEO29CQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7OzRFQUFBO2dCQVAxQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3FCQUM1QixDQUFDOzt3Q0FBQTtnQkFTRiwyQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdURBUUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NpZGViYXIvZGlyZWN0aXZlcy9uZXdEb2N1bWVudC5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge05ld0RvY1dpbmRvd0NvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3dpbmRvd3MvZGlyZWN0aXZlcy9uZXdEb2NXaW5kb3cuY21wXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltuZXctZG9jLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBOZXdEb2N1bWVudERpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIG5ldyBkb2N1bWVudCB3aW5kb3cuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9wZW5OZXdEb2NXaW5kb3coKTogdm9pZCB7XG4gICAgICAgIE5ld0RvY1dpbmRvd0NvbXBvbmVudC5vcGVuKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
