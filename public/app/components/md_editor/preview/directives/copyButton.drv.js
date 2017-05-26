System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens", "../services/MdPreviewRef"], function(exports_1, context_1) {
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
    var core_1, dom_tokens_1, MdPreviewRef_1;
    var CopyButtonDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (MdPreviewRef_1_1) {
                MdPreviewRef_1 = MdPreviewRef_1_1;
            }],
        execute: function() {
            CopyButtonDirective = (function () {
                function CopyButtonDirective(doc, elem, renderer) {
                    this._doc = doc;
                    this._elem = elem;
                    this._renderer = renderer;
                }
                CopyButtonDirective.prototype.onClick = function () {
                    var isSuccessful, self = this;
                    MdPreviewRef_1.MdPreviewRef.ref.focus();
                    MdPreviewRef_1.MdPreviewRef.ref.setSelectionRange(0, 9999);
                    try {
                        isSuccessful = this._doc.execCommand("copy");
                        if (isSuccessful) {
                            this.setButtonClass(CopyButtonDirective.SUCC_CLASS, true);
                        }
                        else {
                            this.setButtonClass(CopyButtonDirective.ERR_CLASS, true);
                        }
                    }
                    catch (err) {
                        this.setButtonClass(CopyButtonDirective.ERR_CLASS, true);
                    }
                    setTimeout(function () {
                        self.setButtonClass(CopyButtonDirective.SUCC_CLASS, false);
                        self.setButtonClass(CopyButtonDirective.ERR_CLASS, false);
                    }, CopyButtonDirective.SHOW_TIME);
                };
                CopyButtonDirective.prototype.setButtonClass = function (className, isAdd) {
                    this._renderer.setElementClass(this._elem.nativeElement, className, isAdd);
                };
                CopyButtonDirective.SUCC_CLASS = "success";
                CopyButtonDirective.ERR_CLASS = "error";
                CopyButtonDirective.SHOW_TIME = 350;
                __decorate([
                    core_1.HostListener("click"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], CopyButtonDirective.prototype, "onClick", null);
                CopyButtonDirective = __decorate([
                    core_1.Directive({
                        selector: "[copy-btn-drv]"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object, core_1.ElementRef, core_1.Renderer])
                ], CopyButtonDirective);
                return CopyButtonDirective;
            }());
            exports_1("CopyButtonDirective", CopyButtonDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL3ByZXZpZXcvZGlyZWN0aXZlcy9jb3B5QnV0dG9uLmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQWVJLDZCQUE4QixHQUFHLEVBQUUsSUFBZ0IsRUFBRSxRQUFrQjtvQkFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQztnQkFNTSxxQ0FBTyxHQUFkO29CQUNJLElBQUksWUFBWSxFQUNaLElBQUksR0FBd0IsSUFBSSxDQUFDO29CQUVyQywyQkFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsMkJBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUU1QyxJQUFJLENBQUM7d0JBQ0QsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUU3QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM5RCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUM3RCxDQUFDO29CQUNMLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0QsQ0FBQztvQkFFRCxVQUFVLENBQUM7d0JBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM5RCxDQUFDLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBT08sNENBQWMsR0FBdEIsVUFBdUIsU0FBaUIsRUFBRSxLQUFjO29CQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBeERjLDhCQUFVLEdBQVcsU0FBUyxDQUFDO2dCQUMvQiw2QkFBUyxHQUFXLE9BQU8sQ0FBQztnQkFDNUIsNkJBQVMsR0FBVyxHQUFHLENBQUM7Z0JBcUJ2QztvQkFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7OztrRUFBQTtnQkEzQjFCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtxQkFDN0IsQ0FBQzsrQkFnQmUsYUFBTSxDQUFDLHFCQUFRLENBQUM7O3VDQWhCL0I7Z0JBMkRGLDBCQUFDO1lBQUQsQ0ExREEsQUEwREMsSUFBQTtZQTFERCxxREEwREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21kX2VkaXRvci9wcmV2aWV3L2RpcmVjdGl2ZXMvY29weUJ1dHRvbi5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vuc1wiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtNZFByZXZpZXdSZWZ9IGZyb20gXCIuLi9zZXJ2aWNlcy9NZFByZXZpZXdSZWZcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2NvcHktYnRuLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBDb3B5QnV0dG9uRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBTVUNDX0NMQVNTOiBzdHJpbmcgPSBcInN1Y2Nlc3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBFUlJfQ0xBU1M6IHN0cmluZyA9IFwiZXJyb3JcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBTSE9XX1RJTUU6IG51bWJlciA9IDM1MDsgLy8gbXNcblxuICAgIHByaXZhdGUgX2RvYztcbiAgICBwcml2YXRlIF9lbGVtOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgJ2RvY3VtZW50Jywgc2V0cyBpbmplY3RlZCBlbGVtZW50IHJlZmVyZW5jZSBhbmQgUmVuZGVyZXIuXG4gICAgICogQHBhcmFtIGRvY1xuICAgICAqIEBwYXJhbSBlbGVtXG4gICAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jLCBlbGVtOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jO1xuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgdGhlIGNvbnRlbnQgb2YgdGhlIHByZXZpZXcgdG8gdGhlIHVzZXIncyBjbGlwYm9hcmQuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHZhciBpc1N1Y2Nlc3NmdWwsXG4gICAgICAgICAgICBzZWxmOiBDb3B5QnV0dG9uRGlyZWN0aXZlID0gdGhpcztcblxuICAgICAgICBNZFByZXZpZXdSZWYucmVmLmZvY3VzKCk7XG4gICAgICAgIE1kUHJldmlld1JlZi5yZWYuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlzU3VjY2Vzc2Z1bCA9IHRoaXMuX2RvYy5leGVjQ29tbWFuZChcImNvcHlcIik7XG5cbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkNsYXNzKENvcHlCdXR0b25EaXJlY3RpdmUuU1VDQ19DTEFTUywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uQ2xhc3MoQ29weUJ1dHRvbkRpcmVjdGl2ZS5FUlJfQ0xBU1MsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uQ2xhc3MoQ29weUJ1dHRvbkRpcmVjdGl2ZS5FUlJfQ0xBU1MsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnNldEJ1dHRvbkNsYXNzKENvcHlCdXR0b25EaXJlY3RpdmUuU1VDQ19DTEFTUywgZmFsc2UpO1xuICAgICAgICAgICAgc2VsZi5zZXRCdXR0b25DbGFzcyhDb3B5QnV0dG9uRGlyZWN0aXZlLkVSUl9DTEFTUywgZmFsc2UpO1xuICAgICAgICB9LCBDb3B5QnV0dG9uRGlyZWN0aXZlLlNIT1dfVElNRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY2xhc3Mgb2YgdGhlICdDb3B5IFRvIENsaXBib2FyZCcgYnV0dG9uIGFjY29yZGluZyB0byB0aGUgcmVzcGVjdGl2ZSBhY3Rpb24gb3V0Y29tZSAoc3VjYy91bnN1Y2MgY29weSkuXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSBpc0FkZCAtIFNob3VsZCB0aGUgY2xhc3MgYmUgYWRkZWQgb3Igbm90ICh0cnVlL2ZhbHNlKVxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0QnV0dG9uQ2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcsIGlzQWRkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLl9lbGVtLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSwgaXNBZGQpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
