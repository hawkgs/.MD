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
    var HorizontalRuleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            HorizontalRuleDirective = (function () {
                function HorizontalRuleDirective(doc) {
                    this._doc = doc;
                }
                HorizontalRuleDirective.prototype.onClick = function () {
                    this._doc.execCommand("insertHorizontalRule", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], HorizontalRuleDirective.prototype, "onClick", null);
                HorizontalRuleDirective = __decorate([
                    core_1.Directive({
                        selector: "[hrule-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], HorizontalRuleDirective);
                return HorizontalRuleDirective;
            }());
            exports_1("HorizontalRuleDirective", HorizontalRuleDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFJ1bGVCdXR0b24uZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBT0ksaUNBQThCLEdBQUc7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixDQUFDO2dCQU1NLHlDQUFPLEdBQWQ7b0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBSEQ7b0JBQUMsbUJBQVksQ0FBQyxPQUFPLENBQUM7Ozs7c0VBQUE7Z0JBakIxQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7cUJBQzlCLENBQUM7K0JBUWUsYUFBTSxDQUFDLHFCQUFRLENBQUM7OzJDQVIvQjtnQkFtQkYsOEJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDZEQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFJ1bGVCdXR0b24uZHJ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vuc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaHJ1bGUtYnRuLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsUnVsZURpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhICdkb2N1bWVudCcgZm9yIERPTSBtYW5pcHVsYXRpb24uXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYykge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBIUiBpbiB0aGUgZWRpdG9yLlxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kb2MuZXhlY0NvbW1hbmQoXCJpbnNlcnRIb3Jpem9udGFsUnVsZVwiLCBmYWxzZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
