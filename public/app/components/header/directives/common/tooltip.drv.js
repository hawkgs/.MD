System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TooltipDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TooltipDirective = (function () {
                function TooltipDirective(elem, renderer) {
                    this._elem = elem;
                    this._renderer = renderer;
                    this._timer = { appear: null, disappear: null };
                }
                TooltipDirective.prototype.onMouseover = function () {
                    var _this = this;
                    this._timer.appear = setTimeout(function () {
                        _this.showTooltipClass(true);
                    }, TooltipDirective.APPEAR);
                    this._timer.disappear = setTimeout(function () {
                        _this.showTooltipClass(false);
                    }, TooltipDirective.DISAPPEAR);
                };
                TooltipDirective.prototype.onMouseout = function () {
                    clearTimeout(this._timer.appear);
                    clearTimeout(this._timer.disappear);
                    this.showTooltipClass(false);
                };
                TooltipDirective.prototype.showTooltipClass = function (shouldShow) {
                    this._renderer.setElementClass(this._elem.nativeElement, TooltipDirective.TOOLTIP_CLASS, shouldShow);
                };
                TooltipDirective.APPEAR = 1700;
                TooltipDirective.DISAPPEAR = TooltipDirective.APPEAR + 1000 * 3;
                TooltipDirective.TOOLTIP_CLASS = "tooltip";
                __decorate([
                    core_1.HostListener("mouseover"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], TooltipDirective.prototype, "onMouseover", null);
                __decorate([
                    core_1.HostListener("mouseout"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], TooltipDirective.prototype, "onMouseout", null);
                TooltipDirective = __decorate([
                    core_1.Directive({
                        selector: "[data-title]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], TooltipDirective);
                return TooltipDirective;
            }());
            exports_1("TooltipDirective", TooltipDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvY29tbW9uL3Rvb2x0aXAuZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBY0ksMEJBQVksSUFBZ0IsRUFBRSxRQUFrQjtvQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBTU0sc0NBQVcsR0FBbEI7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO3dCQUM1QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO3dCQUMvQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFNTSxxQ0FBVSxHQUFqQjtvQkFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRXBDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFNTywyQ0FBZ0IsR0FBeEIsVUFBeUIsVUFBbUI7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDekcsQ0FBQztnQkFsRGMsdUJBQU0sR0FBVyxJQUFJLENBQUM7Z0JBQ3RCLDBCQUFTLEdBQVcsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ3ZELDhCQUFhLEdBQVcsU0FBUyxDQUFDO2dCQW9CakQ7b0JBQUMsbUJBQVksQ0FBQyxXQUFXLENBQUM7Ozs7bUVBQUE7Z0JBYzFCO29CQUFDLG1CQUFZLENBQUMsVUFBVSxDQUFDOzs7O2tFQUFBO2dCQXhDN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYztxQkFDM0IsQ0FBQzs7b0NBQUE7Z0JBcURGLHVCQUFDO1lBQUQsQ0FwREEsQUFvREMsSUFBQTtZQXBERCwrQ0FvREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2NvbW1vbi90b29sdGlwLmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbZGF0YS10aXRsZV1cIlxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBBUFBFQVI6IG51bWJlciA9IDE3MDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgRElTQVBQRUFSOiBudW1iZXIgPSBUb29sdGlwRGlyZWN0aXZlLkFQUEVBUiArIDEwMDAgKiAzOyAvLyBTaG93IGZvciAzIHNlY29uZHNcbiAgICBwcml2YXRlIHN0YXRpYyBUT09MVElQX0NMQVNTOiBzdHJpbmcgPSBcInRvb2x0aXBcIjtcblxuICAgIHByaXZhdGUgX2VsZW06IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyO1xuICAgIHByaXZhdGUgX3RpbWVyO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbmplY3RlZCBlbGVtZW50IHJlZmVyZW5jZSBhbmQgUmVuZGVyZXIuIFNldHMgdGltZXIgb2JqZWN0LlxuICAgICAqIEBwYXJhbSBlbGVtXG4gICAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLl90aW1lciA9IHsgYXBwZWFyOiBudWxsLCBkaXNhcHBlYXI6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdG9vbHRpcCBhcHBlYXJzIGFmdGVyIEFQUEVBUiB0aW1lIGFuZCBkaXNhcHBlYXJzIGFmdGVyIERJU0FQUEVBUi5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VvdmVyXCIpXG4gICAgcHVibGljIG9uTW91c2VvdmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl90aW1lci5hcHBlYXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXBDbGFzcyh0cnVlKTtcbiAgICAgICAgfSwgVG9vbHRpcERpcmVjdGl2ZS5BUFBFQVIpO1xuXG4gICAgICAgIHRoaXMuX3RpbWVyLmRpc2FwcGVhciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcENsYXNzKGZhbHNlKTtcbiAgICAgICAgfSwgVG9vbHRpcERpcmVjdGl2ZS5ESVNBUFBFQVIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvb2x0aXAgZGlzYXBwZWFycyBhbmQgY2xlYXJzIGFsbCBjb3JyZXNwb25kaW5nIHRpbWVyIChzbyB0aGF0IHRoZXkgY2FuIGJlIHJlc2V0IG9uIG1vdXNlb3ZlcikuXG4gICAgICovXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlb3V0XCIpXG4gICAgcHVibGljIG9uTW91c2VvdXQoKTogdm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lci5hcHBlYXIpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIuZGlzYXBwZWFyKTtcblxuICAgICAgICB0aGlzLnNob3dUb29sdGlwQ2xhc3MoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmlzaWJpbGl0eSBzdGF0ZSBvZiB0aGUgdG9vbHRpcCBieSBhIHByb3ZpZGVkIGJvb2xlYW4gdmFsdWUuXG4gICAgICogQHBhcmFtIHNob3VsZFNob3dcbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dUb29sdGlwQ2xhc3Moc2hvdWxkU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fZWxlbS5uYXRpdmVFbGVtZW50LCBUb29sdGlwRGlyZWN0aXZlLlRPT0xUSVBfQ0xBU1MsIHNob3VsZFNob3cpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
