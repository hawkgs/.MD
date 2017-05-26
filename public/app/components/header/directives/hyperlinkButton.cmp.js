System.register(["angular2/core", "angular2/common", "angular2/src/platform/dom/dom_tokens", "../../md_editor/editor/services/EditorSelection"], function(exports_1, context_1) {
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
    var core_1, common_1, dom_tokens_1, EditorSelection_1;
    var HyperlinkButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (EditorSelection_1_1) {
                EditorSelection_1 = EditorSelection_1_1;
            }],
        execute: function() {
            HyperlinkButtonDirective = (function () {
                function HyperlinkButtonDirective(doc) {
                    this._doc = doc;
                }
                HyperlinkButtonDirective.prototype.wrapInAnchor = function () {
                    var a;
                    if (EditorSelection_1.EditorSelection.sel) {
                        EditorSelection_1.EditorSelection.sel.deleteContents();
                        a = this.createAnchorTag(this.url);
                        EditorSelection_1.EditorSelection.sel.insertNode(a);
                    }
                };
                HyperlinkButtonDirective.prototype.createAnchorTag = function (url) {
                    var a = this._doc.createElement("a");
                    a.href = url;
                    a.innerHTML = EditorSelection_1.EditorSelection.text;
                    return a;
                };
                HyperlinkButtonDirective = __decorate([
                    core_1.Component({
                        selector: "[hlink-btn-cmp]",
                        directives: [common_1.NgModel],
                        template: "\n        <div class=\"disp\"></div>\n        <div class=\"cont\">\n            <div class=\"item-cont\">\n                <input [(ngModel)]=\"url\"  type=\"text\" placeholder=\"URL\" />\n                <button class=\"default theme-bg dd-close\" (click)=\"wrapInAnchor()\">Create</button>\n            </div>\n        </div>"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], HyperlinkButtonDirective);
                return HyperlinkButtonDirective;
            }());
            exports_1("HyperlinkButtonDirective", HyperlinkButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaHlwZXJsaW5rQnV0dG9uLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFRSSxrQ0FBOEIsR0FBRztvQkFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUM7Z0JBS00sK0NBQVksR0FBbkI7b0JBQ0ksSUFBSSxDQUFDLENBQUM7b0JBRU4sRUFBRSxDQUFDLENBQUMsaUNBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFFckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7Z0JBQ0wsQ0FBQztnQkFPTyxrREFBZSxHQUF2QixVQUF3QixHQUFXO29CQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFckMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxpQ0FBZSxDQUFDLElBQUksQ0FBQztvQkFFbkMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQWxETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFVBQVUsRUFBRSxDQUFDLGdCQUFPLENBQUM7d0JBQ3JCLFFBQVEsRUFBRSx5VUFPQztxQkFDZCxDQUFDOytCQVNlLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOzs0Q0FUL0I7Z0JBd0NGLCtCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCwrREF1Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2h5cGVybGlua0J1dHRvbi5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtOZ01vZGVsfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge0VkaXRvclNlbGVjdGlvbn0gZnJvbSBcIi4uLy4uL21kX2VkaXRvci9lZGl0b3Ivc2VydmljZXMvRWRpdG9yU2VsZWN0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIltobGluay1idG4tY21wXVwiLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ01vZGVsXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInVybFwiICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVVJMXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVmYXVsdCB0aGVtZS1iZyBkZC1jbG9zZVwiIChjbGljayk9XCJ3cmFwSW5BbmNob3IoKVwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgSHlwZXJsaW5rQnV0dG9uRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhICdkb2N1bWVudCcgZm9yIERPTSBtYW5pcHVsYXRpb24uXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYykge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHMgdGhlIHRleHQgc2VsZWN0aW9uIGluIEEgdGFnIGJ5IGEgcHJvdmlkZWQgQHVybC5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JhcEluQW5jaG9yKCk6IHZvaWQge1xuICAgICAgICB2YXIgYTtcblxuICAgICAgICBpZiAoRWRpdG9yU2VsZWN0aW9uLnNlbCkge1xuICAgICAgICAgICAgRWRpdG9yU2VsZWN0aW9uLnNlbC5kZWxldGVDb250ZW50cygpO1xuXG4gICAgICAgICAgICBhID0gdGhpcy5jcmVhdGVBbmNob3JUYWcodGhpcy51cmwpO1xuICAgICAgICAgICAgRWRpdG9yU2VsZWN0aW9uLnNlbC5pbnNlcnROb2RlKGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgSFRNTCBmb3IgdGhlIGFuY2hvciB0YWcuXG4gICAgICogQHBhcmFtIHVybCAtIFVSTCB0byB0aGUgc291cmNlXG4gICAgICogQHJldHVybnMge0hUTUxBbmNob3JFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQW5jaG9yVGFnKHVybDogc3RyaW5nKTogSFRNTEFuY2hvckVsZW1lbnQge1xuICAgICAgICB2YXIgYSA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICAgIGEuaW5uZXJIVE1MID0gRWRpdG9yU2VsZWN0aW9uLnRleHQ7XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
