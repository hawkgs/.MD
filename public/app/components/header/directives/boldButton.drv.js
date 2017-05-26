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
    var BoldButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            BoldButtonDirective = (function () {
                function BoldButtonDirective(doc) {
                    this._doc = doc;
                }
                BoldButtonDirective.prototype.onClick = function () {
                    this._doc.execCommand("bold", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], BoldButtonDirective.prototype, "onClick", null);
                BoldButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[bold-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], BoldButtonDirective);
                return BoldButtonDirective;
            }());
            exports_1("BoldButtonDirective", BoldButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvYm9sZEJ1dHRvbi5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFPSSw2QkFBOEIsR0FBRztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBTU0scUNBQU8sR0FBZDtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBSEQ7b0JBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7a0VBQUE7Z0JBakIxQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzdCLENBQUM7K0JBUWUsYUFBTSxDQUFDLHFCQUFRLENBQUM7O3VDQVIvQjtnQkFtQkYsMEJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFEQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvYm9sZEJ1dHRvbi5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3R9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltib2xkLWJ0bi1kcnZdXCJcbn0pXG5leHBvcnQgY2xhc3MgQm9sZEJ1dHRvbkRpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhICdkb2N1bWVudCcgZm9yIERPTSBtYW5pcHVsYXRpb24uXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYykge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHMvaW5zZXJ0cyBCIChib2xkKSB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jLmV4ZWNDb21tYW5kKFwiYm9sZFwiLCBmYWxzZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
