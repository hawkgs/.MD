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
    var ItalicButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            ItalicButtonDirective = (function () {
                function ItalicButtonDirective(doc) {
                    this._doc = doc;
                }
                ItalicButtonDirective.prototype.onClick = function () {
                    document.execCommand("italic", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], ItalicButtonDirective.prototype, "onClick", null);
                ItalicButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[italic-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], ItalicButtonDirective);
                return ItalicButtonDirective;
            }());
            exports_1("ItalicButtonDirective", ItalicButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaXRhbGljQnV0dG9uLmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQU9JLCtCQUE4QixHQUFHO29CQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQztnQkFNTSx1Q0FBTyxHQUFkO29CQUNJLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUhEO29CQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7O29FQUFBO2dCQWpCMUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3FCQUMvQixDQUFDOytCQVFlLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOzt5Q0FSL0I7Z0JBbUJGLDRCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx5REFrQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2l0YWxpY0J1dHRvbi5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3R9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltpdGFsaWMtYnRuLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBJdGFsaWNCdXR0b25EaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX2RvYztcblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYSAnZG9jdW1lbnQnIGZvciBET00gbWFuaXB1bGF0aW9uLlxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2MpIHtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBzL2luc2VydHMgSSAoaXRhbGljKSB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpdGFsaWNcIiwgZmFsc2UpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
