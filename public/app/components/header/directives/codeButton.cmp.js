System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens", "../../../services/Escapers"], function(exports_1, context_1) {
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
    var core_1, dom_tokens_1, Escapers_1;
    var CodeButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (Escapers_1_1) {
                Escapers_1 = Escapers_1_1;
            }],
        execute: function() {
            CodeButtonComponent = (function () {
                function CodeButtonComponent(doc) {
                    this._doc = doc;
                }
                CodeButtonComponent.prototype.inlineCode = function () {
                    this.wrapCodeInTag("code");
                };
                CodeButtonComponent.prototype.blockCode = function () {
                    this.wrapCodeInTag("pre");
                };
                CodeButtonComponent.prototype.keepFocusOnEditor = function (event) {
                    event.preventDefault();
                };
                CodeButtonComponent.prototype.wrapCodeInTag = function (tagName) {
                    var selection = Escapers_1.Escapers.escapeHtml(window.getSelection().toString());
                    this._doc.execCommand("insertHTML", false, "<" + tagName + ">" + selection + "</" + tagName + ">");
                };
                CodeButtonComponent = __decorate([
                    core_1.Component({
                        selector: "[code-btn-cmp]",
                        template: "\n        <p class=\"disp\"></p>\n        <ul class=\"cont\">\n            <li (click)=\"inlineCode()\" (mousedown)=\"keepFocusOnEditor($event)\" class=\"dd-close\">Inline</li>\n            <li (click)=\"blockCode()\" (mousedown)=\"keepFocusOnEditor($event)\" class=\"dd-close\">Block</li>\n        </ul>"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], CodeButtonComponent);
                return CodeButtonComponent;
            }());
            exports_1("CodeButtonComponent", CodeButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvY29kZUJ1dHRvbi5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBT0ksNkJBQThCLEdBQUc7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixDQUFDO2dCQUtNLHdDQUFVLEdBQWpCO29CQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBS00sdUNBQVMsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFNTSwrQ0FBaUIsR0FBeEIsVUFBeUIsS0FBSztvQkFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQU1PLDJDQUFhLEdBQXJCLFVBQXNCLE9BQWU7b0JBQ2pDLElBQUksU0FBUyxHQUFXLG1CQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUU5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQUksT0FBTyxTQUFJLFNBQVMsVUFBSyxPQUFPLE1BQUcsQ0FBQyxDQUFDO2dCQUN4RixDQUFDO2dCQWxETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxrVEFLQTtxQkFDYixDQUFDOytCQVFlLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOzt1Q0FSL0I7Z0JBMkNGLDBCQUFDO1lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtZQTFDRCxxREEwQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2NvZGVCdXR0b24uY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7RXNjYXBlcnN9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Fc2NhcGVyc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIltjb2RlLWJ0bi1jbXBdXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHAgY2xhc3M9XCJkaXNwXCI+PC9wPlxuICAgICAgICA8dWwgY2xhc3M9XCJjb250XCI+XG4gICAgICAgICAgICA8bGkgKGNsaWNrKT1cImlubGluZUNvZGUoKVwiIChtb3VzZWRvd24pPVwia2VlcEZvY3VzT25FZGl0b3IoJGV2ZW50KVwiIGNsYXNzPVwiZGQtY2xvc2VcIj5JbmxpbmU8L2xpPlxuICAgICAgICAgICAgPGxpIChjbGljayk9XCJibG9ja0NvZGUoKVwiIChtb3VzZWRvd24pPVwia2VlcEZvY3VzT25FZGl0b3IoJGV2ZW50KVwiIGNsYXNzPVwiZGQtY2xvc2VcIj5CbG9jazwvbGk+XG4gICAgICAgIDwvdWw+YFxufSlcbmV4cG9ydCBjbGFzcyBDb2RlQnV0dG9uQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9kb2M7XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGEgJ2RvY3VtZW50JyBmb3IgRE9NIG1hbmlwdWxhdGlvbi5cbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jKSB7XG4gICAgICAgIHRoaXMuX2RvYyA9IGRvYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcy9pbnNlcnRzIENPREUgKGlubGluZSBjb2RlKSB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5saW5lQ29kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53cmFwQ29kZUluVGFnKFwiY29kZVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcy9pbnNlcnRzIFBSRSAoYmxvY2sgY29kZSkgdG8gdGhlIHRleHQgc2VsZWN0aW9uIGluIHRoZSBlZGl0b3IuXG4gICAgICovXG4gICAgcHVibGljIGJsb2NrQ29kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53cmFwQ29kZUluVGFnKFwicHJlXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtlZXBzIGZvY3VzIG9uIHRoZSBlZGl0b3Igb24gZWxlbWVudCBtb3VzZWRvd24gZXZlbnQuXG4gICAgICogQHBhcmFtIGV2ZW50IC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBrZWVwRm9jdXNPbkVkaXRvcihldmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBzIHRoZSBjdXJyZW50IGNvZGUgc2VsZWN0aW9uIGluIHRhZyAoZWl0aGVyICdjb2RlJyBmb3Igc2luZ2xlLWxpbmUgb3IgJ3ByZScgZm9yIG11bHRpKVxuICAgICAqIEBwYXJhbSB0YWdOYW1lIC0gJ2NvZGUnIG9yICdwcmUnXG4gICAgICovXG4gICAgcHJpdmF0ZSB3cmFwQ29kZUluVGFnKHRhZ05hbWU6IHN0cmluZykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uOiBzdHJpbmcgPSBFc2NhcGVycy5lc2NhcGVIdG1sKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKTtcblxuICAgICAgICB0aGlzLl9kb2MuZXhlY0NvbW1hbmQoXCJpbnNlcnRIVE1MXCIsIGZhbHNlLCBgPCR7dGFnTmFtZX0+JHtzZWxlY3Rpb259PC8ke3RhZ05hbWV9PmApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
