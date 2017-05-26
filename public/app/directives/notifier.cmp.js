System.register(["angular2/core", "../services/NotifierService", "../services/enums/NotifierType"], function(exports_1, context_1) {
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
    var core_1, NotifierService_1, NotifierType_1;
    var NotifierComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NotifierService_1_1) {
                NotifierService_1 = NotifierService_1_1;
            },
            function (NotifierType_1_1) {
                NotifierType_1 = NotifierType_1_1;
            }],
        execute: function() {
            NotifierComponent = (function () {
                function NotifierComponent(elem, service) {
                    this._service = service;
                    this._nativeEl = elem.nativeElement;
                }
                Object.defineProperty(NotifierComponent.prototype, "message", {
                    get: function () {
                        return this._service.message;
                    },
                    enumerable: true,
                    configurable: true
                });
                NotifierComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.elem = this._nativeEl.querySelector("div");
                    setTimeout(function () {
                        _this.startUpMessages();
                    }, 1000);
                };
                NotifierComponent.prototype.startUpMessages = function () {
                    var startUpMessage = "\n        <strong>Welcome to .MD</strong><br/>\n        Be aware that the project is still under<br/>\n        development which means some of the<br/>\n        functionality is incomplete and/or buggy.\n        ";
                    this._service.show(NotifierType_1.NotifierType.Notice, startUpMessage, 7000);
                };
                NotifierComponent = __decorate([
                    core_1.Component({
                        selector: "notifier",
                        template: "<div [innerHTML]=\"message\"></div>",
                        styles: ["\n        div {\n            position: fixed;\n            bottom: 25px; left: 25px;\n            max-width: 0;\n            color: #FFF;\n            background: red;\n            overflow: hidden;\n            white-space: nowrap;\n            padding: 20px 0;\n            box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.4);\n            transition: left, max-width, padding 0.3s ease;\n        }\n\n        div.active { padding: 20px; max-width: 500px; }\n        div.error { background: #cd2a2a; }\n        div.success { background: #2abe4f; }\n        div.notice { background: #2175ad; }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, NotifierService_1.NotifierService])
                ], NotifierComponent);
                return NotifierComponent;
            }());
            exports_1("NotifierComponent", NotifierComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbm90aWZpZXIuY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQVNJLDJCQUFZLElBQWdCLEVBQUUsT0FBd0I7b0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLENBQUM7Z0JBTUQsc0JBQVcsc0NBQU87eUJBQWxCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDakMsQ0FBQzs7O21CQUFBO2dCQUtNLG9DQUFRLEdBQWY7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBR3pELFVBQVUsQ0FBQzt3QkFDUCxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQUtPLDJDQUFlLEdBQXZCO29CQUNJLElBQUksY0FBYyxHQUFXLHNOQUs1QixDQUFDO29CQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFyRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLHFDQUFtQzt3QkFDN0MsTUFBTSxFQUFFLENBQUMsaWxCQWtCUixDQUFDO3FCQUNMLENBQUM7O3FDQUFBO2dCQWdERix3QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsaURBK0NDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9ub3RpZmllci5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtOb3RpZmllclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9Ob3RpZmllclNlcnZpY2VcIjtcblxuLy8gRW51bXNcbmltcG9ydCB7Tm90aWZpZXJUeXBlfSBmcm9tIFwiLi4vc2VydmljZXMvZW51bXMvTm90aWZpZXJUeXBlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5vdGlmaWVyXCIsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAyNXB4OyBsZWZ0OiAyNXB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQsIG1heC13aWR0aCwgcGFkZGluZyAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuYWN0aXZlIHsgcGFkZGluZzogMjBweDsgbWF4LXdpZHRoOiA1MDBweDsgfVxuICAgICAgICBkaXYuZXJyb3IgeyBiYWNrZ3JvdW5kOiAjY2QyYTJhOyB9XG4gICAgICAgIGRpdi5zdWNjZXNzIHsgYmFja2dyb3VuZDogIzJhYmU0ZjsgfVxuICAgICAgICBkaXYubm90aWNlIHsgYmFja2dyb3VuZDogIzIxNzVhZDsgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBOb3RpZmllclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbmF0aXZlRWw7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGVsZW1lbnQgcmVmZXJlbmNlIHRvIHRoZSBjb3JyZXNwb25kaW5nIHNlcnZpY2UgKE5vdGlmaWVyU2VydmljZSkuXG4gICAgICogQHBhcmFtIGVsZW1cbiAgICAgKiBAcGFyYW0gc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnRSZWYsIHNlcnZpY2U6IE5vdGlmaWVyU2VydmljZSkge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5fbmF0aXZlRWwgPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbm90aWZpZXIgbWVzc2FnZSBmcm9tIGl0cyBzZXJ2aWNlLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHVibGljIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYWxsIHN0YXJ0dXAgbWVzc2FnZXMgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZCBhbmQgc2V0cyBpdHMgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS5lbGVtID0gdGhpcy5fbmF0aXZlRWwucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcblxuICAgICAgICAvLyBQdXQgc29tZSBkZWxheWluZ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRVcE1lc3NhZ2VzKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYWxsIHN0YXJ0dXAgbWVzc2FnZXMgdG8gdGhlIHVzZXIuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFydFVwTWVzc2FnZXMoKSB7XG4gICAgICAgIHZhciBzdGFydFVwTWVzc2FnZTogc3RyaW5nID0gYFxuICAgICAgICA8c3Ryb25nPldlbGNvbWUgdG8gLk1EPC9zdHJvbmc+PGJyLz5cbiAgICAgICAgQmUgYXdhcmUgdGhhdCB0aGUgcHJvamVjdCBpcyBzdGlsbCB1bmRlcjxici8+XG4gICAgICAgIGRldmVsb3BtZW50IHdoaWNoIG1lYW5zIHNvbWUgb2YgdGhlPGJyLz5cbiAgICAgICAgZnVuY3Rpb25hbGl0eSBpcyBpbmNvbXBsZXRlIGFuZC9vciBidWdneS5cbiAgICAgICAgYDtcblxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnNob3coTm90aWZpZXJUeXBlLk5vdGljZSwgc3RhcnRVcE1lc3NhZ2UsIDcwMDApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
