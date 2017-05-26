System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, dom_tokens_1;
    var UnorderedListButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            UnorderedListButtonDirective = (function () {
                function UnorderedListButtonDirective(doc) {
                    this._doc = doc;
                }
                UnorderedListButtonDirective.prototype.onClick = function () {
                    document.execCommand("insertUnorderedList", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], UnorderedListButtonDirective.prototype, "onClick", null);
                UnorderedListButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[ul-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], UnorderedListButtonDirective);
                return UnorderedListButtonDirective;
            }());
            exports_1("UnorderedListButtonDirective", UnorderedListButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvdW5vcmRlcmVkTGlzdEJ1dHRvbi5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFPSSxzQ0FBOEIsR0FBRztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBTU0sOENBQU8sR0FBZDtvQkFDSSxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUhEO29CQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7OzJFQUFBO2dCQWpCMUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYztxQkFDM0IsQ0FBQzsrQkFRZSxhQUFNLENBQUMscUJBQVEsQ0FBQzs7Z0RBUi9CO2dCQW1CRixtQ0FBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsdUVBa0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvZGlyZWN0aXZlcy91bm9yZGVyZWRMaXN0QnV0dG9uLmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEluamVjdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3VsLWJ0bi1kcnZdXCJcbn0pXG5leHBvcnQgY2xhc3MgVW5vcmRlcmVkTGlzdEJ1dHRvbkRpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhICdkb2N1bWVudCcgZm9yIERPTSBtYW5pcHVsYXRpb24uXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYykge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHMvaW5zZXJ0cyBVTCB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRVbm9yZGVyZWRMaXN0XCIsIGZhbHNlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
