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
    var ImageButtonComponent;
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
            ImageButtonComponent = (function () {
                function ImageButtonComponent(doc) {
                    this._doc = doc;
                }
                ImageButtonComponent.prototype.wrapInImage = function () {
                    var img;
                    if (EditorSelection_1.EditorSelection.sel) {
                        EditorSelection_1.EditorSelection.sel.deleteContents();
                        img = this.createImageTag(this.url, this.alternative);
                        EditorSelection_1.EditorSelection.sel.insertNode(img);
                    }
                };
                ImageButtonComponent.prototype.createImageTag = function (url, alt) {
                    var img = this._doc.createElement("img");
                    img.src = url;
                    img.alt = alt;
                    return img;
                };
                ImageButtonComponent = __decorate([
                    core_1.Component({
                        selector: "[img-btn-cmp]",
                        directives: [common_1.NgModel],
                        template: "\n        <div class=\"disp\"></div>\n        <div class=\"cont\">\n            <div class=\"item-cont\">\n                <input type=\"text\" [(ngModel)]=\"url\" placeholder=\"URL\" /><br/>\n                <input type=\"text\" [(ngModel)]=\"alternative\" placeholder=\"Alternative Text\" /><br/>\n                <button class=\"default theme-bg dd-close\" (click)=\"wrapInImage()\">Create</button>\n            </div>\n        </div>"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], ImageButtonComponent);
                return ImageButtonComponent;
            }());
            exports_1("ImageButtonComponent", ImageButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaW1hZ2VCdXR0b24uY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQVNJLDhCQUE4QixHQUFHO29CQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQztnQkFLTSwwQ0FBVyxHQUFsQjtvQkFDSSxJQUFJLEdBQUcsQ0FBQztvQkFFUixFQUFFLENBQUMsQ0FBQyxpQ0FBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLGlDQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUVyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDdEQsaUNBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxDQUFDO2dCQUNMLENBQUM7Z0JBUU8sNkNBQWMsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEdBQVc7b0JBQzNDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV6QyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZCxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFFZCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBckRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFVBQVUsRUFBRSxDQUFDLGdCQUFPLENBQUM7d0JBQ3JCLFFBQVEsRUFBRSx1YkFRQztxQkFDZCxDQUFDOytCQVVlLGFBQU0sQ0FBQyxxQkFBUSxDQUFDOzt3Q0FWL0I7Z0JBMENGLDJCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCx1REF5Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2ltYWdlQnV0dG9uLmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge05nTW9kZWx9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7RWRpdG9yU2VsZWN0aW9ufSBmcm9tIFwiLi4vLi4vbWRfZWRpdG9yL2VkaXRvci9zZXJ2aWNlcy9FZGl0b3JTZWxlY3Rpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiW2ltZy1idG4tY21wXVwiLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ01vZGVsXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJVUkxcIiAvPjxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJhbHRlcm5hdGl2ZVwiIHBsYWNlaG9sZGVyPVwiQWx0ZXJuYXRpdmUgVGV4dFwiIC8+PGJyLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVmYXVsdCB0aGVtZS1iZyBkZC1jbG9zZVwiIChjbGljayk9XCJ3cmFwSW5JbWFnZSgpXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUJ1dHRvbkNvbXBvbmVudCB7XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBhbHRlcm5hdGl2ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2RvYztcblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYSAnZG9jdW1lbnQnIGZvciBET00gbWFuaXB1bGF0aW9uLlxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2MpIHtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgSU1HIGluIHRoZSBlZGl0b3IgYnkgYSBwcm92aWRlZCBVUkwgYW5kIEFsdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JhcEluSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIHZhciBpbWc7XG5cbiAgICAgICAgaWYgKEVkaXRvclNlbGVjdGlvbi5zZWwpIHtcbiAgICAgICAgICAgIEVkaXRvclNlbGVjdGlvbi5zZWwuZGVsZXRlQ29udGVudHMoKTtcblxuICAgICAgICAgICAgaW1nID0gdGhpcy5jcmVhdGVJbWFnZVRhZyh0aGlzLnVybCwgdGhpcy5hbHRlcm5hdGl2ZSk7XG4gICAgICAgICAgICBFZGl0b3JTZWxlY3Rpb24uc2VsLmluc2VydE5vZGUoaW1nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgSFRNTCBmb3IgdGhlIElNRyB0YWcuXG4gICAgICogQHBhcmFtIHVybCAtIFVSTCB0byB0aGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0gYWx0IC0gQWx0ZXJuYXRpdmUgdGV4dFxuICAgICAqIEByZXR1cm5zIHtIVE1MSW1hZ2VFbGVtZW50fEhUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlSW1hZ2VUYWcodXJsOiBzdHJpbmcsIGFsdDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIHZhciBpbWcgPSB0aGlzLl9kb2MuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICBpbWcuYWx0ID0gYWx0O1xuXG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
