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
    var OrderedListButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            OrderedListButtonDirective = (function () {
                function OrderedListButtonDirective(doc) {
                    this._doc = doc;
                }
                OrderedListButtonDirective.prototype.onClick = function () {
                    document.execCommand("insertOrderedList", false);
                };
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], OrderedListButtonDirective.prototype, "onClick", null);
                OrderedListButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[ol-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], OrderedListButtonDirective);
                return OrderedListButtonDirective;
            }());
            exports_1("OrderedListButtonDirective", OrderedListButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvb3JkZXJlZExpc3RCdXR0b24uZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBT0ksb0NBQThCLEdBQUc7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNwQixDQUFDO2dCQU1NLDRDQUFPLEdBQWQ7b0JBQ0ksUUFBUSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFIRDtvQkFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozt5RUFBQTtnQkFqQjFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7cUJBQzNCLENBQUM7K0JBUWUsYUFBTSxDQUFDLHFCQUFRLENBQUM7OzhDQVIvQjtnQkFtQkYsaUNBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELG1FQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvb3JkZXJlZExpc3RCdXR0b24uZHJ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vuc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbb2wtYnRuLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBPcmRlcmVkTGlzdEJ1dHRvbkRpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhICdkb2N1bWVudCcgZm9yIERPTSBtYW5pcHVsYXRpb24uXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYykge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHMvaW5zZXJ0cyBPTCB0byB0aGUgdGV4dCBzZWxlY3Rpb24gaW4gdGhlIGVkaXRvci5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRPcmRlcmVkTGlzdFwiLCBmYWxzZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
