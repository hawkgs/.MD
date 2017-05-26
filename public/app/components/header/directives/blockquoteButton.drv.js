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
    var BlockquoteButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            BlockquoteButtonDirective = (function () {
                function BlockquoteButtonDirective(doc) {
                    this._doc = doc;
                }
                BlockquoteButtonDirective.prototype.onClick = function () {
                    this._doc.execCommand("formatBlock", false, "<BLOCKQUOTE>");
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], BlockquoteButtonDirective.prototype, "onClick", null);
                BlockquoteButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[blockquote-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], BlockquoteButtonDirective);
                return BlockquoteButtonDirective;
            }());
            exports_1("BlockquoteButtonDirective", BlockquoteButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvYmxvY2txdW90ZUJ1dHRvbi5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFPSSxtQ0FBOEIsR0FBRztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBTU0sMkNBQU8sR0FBZDtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUhEO29CQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7O3dFQUFBO2dCQWpCMUI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsc0JBQXNCO3FCQUNuQyxDQUFDOytCQVFlLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOzs2Q0FSL0I7Z0JBbUJGLGdDQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxpRUFrQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2Jsb2NrcXVvdGVCdXR0b24uZHJ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vuc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbYmxvY2txdW90ZS1idG4tZHJ2XVwiXG59KVxuZXhwb3J0IGNsYXNzIEJsb2NrcXVvdGVCdXR0b25EaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX2RvYztcblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYSAnZG9jdW1lbnQnIGZvciBET00gbWFuaXB1bGF0aW9uLlxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2MpIHtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBzL2luc2VydHMgQkxPQ0tRVU9URSB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jLmV4ZWNDb21tYW5kKFwiZm9ybWF0QmxvY2tcIiwgZmFsc2UsIFwiPEJMT0NLUVVPVEU+XCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
