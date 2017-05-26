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
    var StrikethroughButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            StrikethroughButtonDirective = (function () {
                function StrikethroughButtonDirective(doc) {
                    this._doc = doc;
                }
                StrikethroughButtonDirective.prototype.onClick = function () {
                    this._doc.execCommand("strikeThrough", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], StrikethroughButtonDirective.prototype, "onClick", null);
                StrikethroughButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[strike-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], StrikethroughButtonDirective);
                return StrikethroughButtonDirective;
            }());
            exports_1("StrikethroughButtonDirective", StrikethroughButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvc3RyaWtldGhyb3VnaEJ1dHRvbi5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFPSSxzQ0FBOEIsR0FBRztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBTU0sOENBQU8sR0FBZDtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBSEQ7b0JBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7MkVBQUE7Z0JBakIxQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7cUJBQy9CLENBQUM7K0JBUWUsYUFBTSxDQUFDLHFCQUFRLENBQUM7O2dEQVIvQjtnQkFtQkYsbUNBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHVFQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvc3RyaWtldGhyb3VnaEJ1dHRvbi5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3R9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdHJpa2UtYnRuLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdHJpa2V0aHJvdWdoQnV0dG9uRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF9kb2M7XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGEgJ2RvY3VtZW50JyBmb3IgRE9NIG1hbmlwdWxhdGlvbi5cbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jKSB7XG4gICAgICAgIHRoaXMuX2RvYyA9IGRvYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcy9pbnNlcnRzIFNUUklLRSB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jLmV4ZWNDb21tYW5kKFwic3RyaWtlVGhyb3VnaFwiLCBmYWxzZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
