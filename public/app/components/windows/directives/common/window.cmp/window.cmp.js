System.register(["angular2/core", "../../../services/WinReferences", "../../../../../services/SetClassNative", "../../../../../services/CloakService", "../../../../../services/enums/CloakState"], function(exports_1, context_1) {
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
    var core_1, WinReferences_1, SetClassNative_1, CloakService_1, CloakState_1;
    var WindowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (WinReferences_1_1) {
                WinReferences_1 = WinReferences_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            },
            function (CloakService_1_1) {
                CloakService_1 = CloakService_1_1;
            },
            function (CloakState_1_1) {
                CloakState_1 = CloakState_1_1;
            }],
        execute: function() {
            WindowComponent = (function () {
                function WindowComponent(elem, renderer) {
                    this._masterElem = elem;
                    this._renderer = renderer;
                    WindowComponent.cloakService = CloakService_1.CloakService.getInstance(renderer);
                }
                WindowComponent.open = function (id) {
                    var ref = WinReferences_1.WinReferences.getRef(id);
                    if (ref && ref !== WindowComponent.currentlyOpened) {
                        if (WindowComponent.currentlyOpened) {
                            SetClassNative_1.SetClassNative.remove(WindowComponent.currentlyOpened, WindowComponent.SHOW_CLASS);
                        }
                        WindowComponent.currentlyOpened = ref;
                        SetClassNative_1.SetClassNative.add(ref, WindowComponent.SHOW_CLASS);
                        WindowComponent.centerWindow(ref);
                        WindowComponent.cloakService.activate();
                        WindowComponent.cloakService.state = CloakState_1.CloakState.Locked;
                    }
                };
                WindowComponent.close = function (id) {
                    var ref = WinReferences_1.WinReferences.getRef(id);
                    if (ref) {
                        SetClassNative_1.SetClassNative.remove(ref, WindowComponent.SHOW_CLASS);
                        WindowComponent.unsetCorrespondingWindowObjects();
                    }
                };
                WindowComponent.unsetCorrespondingWindowObjects = function () {
                    WindowComponent.currentlyOpened = null;
                    WindowComponent.cloakService.state = CloakState_1.CloakState.Free;
                    WindowComponent.cloakService.deactivate();
                };
                WindowComponent.centerWindow = function (ref) {
                    var calculatedHeight = Math.round((window.innerHeight - ref.offsetHeight) / 2), calculatedWidth = Math.round((window.innerWidth - ref.offsetWidth) / 2);
                    ref.style.top = calculatedHeight.toString() + "px";
                    ref.style.left = calculatedWidth.toString() + "px";
                };
                WindowComponent.prototype.ngOnInit = function () {
                    this._nativeElem = this._masterElem.nativeElement.querySelector(".window");
                    WinReferences_1.WinReferences.setRef(this.id, this._nativeElem);
                };
                WindowComponent.prototype.ngOnDestroy = function () {
                    WinReferences_1.WinReferences.removeRef(this.id);
                };
                WindowComponent.prototype.close = function () {
                    SetClassNative_1.SetClassNative.remove(this._nativeElem, WindowComponent.SHOW_CLASS);
                    WindowComponent.unsetCorrespondingWindowObjects();
                };
                WindowComponent.SHOW_CLASS = "show";
                __decorate([
                    core_1.Input("win-title"), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input("win-id"), 
                    __metadata('design:type', String)
                ], WindowComponent.prototype, "id", void 0);
                WindowComponent = __decorate([
                    core_1.Component({
                        selector: "window",
                        template: "\n      <div class=\"window\">\n          <div class=\"titlebar theme-bg\">\n              <span>{{title}}</span>\n              <span class=\"close\" (click)=\"close()\">&#10006;</span>\n          </div>\n          <div class=\"content\">\n              <ng-content></ng-content>\n          </div>\n      </div>\n    ",
                        styles: ["\n      .window {\n          position: fixed;\n          width: 0; height: 0;\n          color: #FFF;\n          opacity: 0.5;\n          box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.2);\n          transition: opacity 0.4s ease;\n          overflow: hidden;\n      }\n\n      .window > .titlebar {\n          padding: 10px 15px;\n          font-weight: 600;\n      }\n\n      .window > .titlebar > span.close {\n          font-weight: normal;\n          float: right;\n          opacity: 0.8;\n          cursor: pointer;\n      }\n\n      .window > .titlebar > span.close:hover {\n          opacity: 1;\n      }\n\n      .window > .content {\n          background: #282828;\n          padding: 15px 20px;\n          overflow: hidden;\n      }\n\n      .window.show {\n          min-width: 200px;\n          width: auto; height: auto;\n          opacity: 1.0;\n          overflow: visible;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], WindowComponent);
                return WindowComponent;
            }());
            exports_1("WindowComponent", WindowComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93cy9kaXJlY3RpdmVzL2NvbW1vbi93aW5kb3cuY21wL3dpbmRvdy5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnRUE7Z0JBaUJJLHlCQUFZLElBQWdCLEVBQUUsUUFBa0I7b0JBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFFMUIsZUFBZSxDQUFDLFlBQVksR0FBRywyQkFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEUsQ0FBQztnQkFNYSxvQkFBSSxHQUFsQixVQUFtQixFQUFVO29CQUN6QixJQUFJLEdBQUcsR0FBZ0IsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBRWpELEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOzRCQUNsQywrQkFBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDdkYsQ0FBQzt3QkFFRCxlQUFlLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQzt3QkFDdEMsK0JBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDcEQsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFbEMsZUFBZSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEMsZUFBZSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQzNELENBQUM7Z0JBQ0wsQ0FBQztnQkFNYSxxQkFBSyxHQUFuQixVQUFvQixFQUFVO29CQUMxQixJQUFJLEdBQUcsR0FBZ0IsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ04sK0JBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDdkQsZUFBZSxDQUFDLCtCQUErQixFQUFFLENBQUM7b0JBQ3RELENBQUM7Z0JBQ0wsQ0FBQztnQkFLYywrQ0FBK0IsR0FBOUM7b0JBQ0ksZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDO29CQUNyRCxlQUFlLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQU1jLDRCQUFZLEdBQTNCLFVBQTRCLEdBQWdCO29CQUN4QyxJQUFJLGdCQUFnQixHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDbEYsZUFBZSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFcEYsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNuRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUN2RCxDQUFDO2dCQUtNLGtDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTNFLDZCQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQUtNLHFDQUFXLEdBQWxCO29CQUNJLDZCQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFLTSwrQkFBSyxHQUFaO29CQUNJLCtCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRSxlQUFlLENBQUMsK0JBQStCLEVBQUUsQ0FBQztnQkFDdEQsQ0FBQztnQkFyR2MsMEJBQVUsR0FBVyxNQUFNLENBQUM7Z0JBSTNDO29CQUFDLFlBQUssQ0FBQyxXQUFXLENBQUM7OzhEQUFBO2dCQUNuQjtvQkFBQyxZQUFLLENBQUMsUUFBUSxDQUFDOzsyREFBQTtnQkE1RHBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxnVUFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxxNEJBdUNSLENBQUM7cUJBQ0wsQ0FBQzs7bUNBQUE7Z0JBd0dGLHNCQUFDO1lBQUQsQ0F2R0EsQUF1R0MsSUFBQTtZQXZHRCw2Q0F1R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3dpbmRvd3MvZGlyZWN0aXZlcy9jb21tb24vd2luZG93LmNtcC93aW5kb3cuY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge1dpblJlZmVyZW5jZXN9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9XaW5SZWZlcmVuY2VzXCI7XG5pbXBvcnQge1NldENsYXNzTmF0aXZlfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvU2V0Q2xhc3NOYXRpdmVcIjtcbmltcG9ydCB7Q2xvYWtTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvQ2xvYWtTZXJ2aWNlXCI7XG5cbi8vIEVudW1zXG5pbXBvcnQge0Nsb2FrU3RhdGV9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9lbnVtcy9DbG9ha1N0YXRlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIndpbmRvd1wiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwid2luZG93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlYmFyIHRoZW1lLWJnXCI+XG4gICAgICAgICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+JiMxMDAwNjs8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAud2luZG93IHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAud2luZG93ID4gLnRpdGxlYmFyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLndpbmRvdyA+IC50aXRsZWJhciA+IHNwYW4uY2xvc2Uge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC53aW5kb3cgPiAudGl0bGViYXIgPiBzcGFuLmNsb3NlOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAud2luZG93ID4gLmNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyODI4Mjg7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC53aW5kb3cuc2hvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICB3aWR0aDogYXV0bzsgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBXaW5kb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU0hPV19DTEFTUzogc3RyaW5nID0gXCJzaG93XCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xvYWtTZXJ2aWNlOiBDbG9ha1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudGx5T3BlbmVkOiBIVE1MRWxlbWVudDtcblxuICAgIEBJbnB1dChcIndpbi10aXRsZVwiKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dChcIndpbi1pZFwiKSBpZDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfbWFzdGVyRWxlbTogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9uYXRpdmVFbGVtOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXI7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGluamVjdGVkIG1hc3RlciBlbGVtZW50IHJlZmVyZW5jZSBhbmQgcmVuZGVyZXIsIGdldHMgY2xvYWsgcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSBlbGVtXG4gICAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuX21hc3RlckVsZW0gPSBlbGVtO1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuXG4gICAgICAgIFdpbmRvd0NvbXBvbmVudC5jbG9ha1NlcnZpY2UgPSBDbG9ha1NlcnZpY2UuZ2V0SW5zdGFuY2UocmVuZGVyZXIpOyAvLyB0b2RvIG5vdCBzbyBjb29sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYSB3aW5kb3cgYnkgcHJvdmlkZWQgSUQgKG11c3QgYmUgaW4gV2luUmVmZXJlbmNlcyBjb250YWluZXIpLlxuICAgICAqIEBwYXJhbSBpZCAtIElEIG9mIHRoZSB3aW5kb3dcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIG9wZW4oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB2YXIgcmVmOiBIVE1MRWxlbWVudCA9IFdpblJlZmVyZW5jZXMuZ2V0UmVmKGlkKTtcblxuICAgICAgICBpZiAocmVmICYmIHJlZiAhPT0gV2luZG93Q29tcG9uZW50LmN1cnJlbnRseU9wZW5lZCkge1xuICAgICAgICAgICAgLy8gQ2xvc2VzIHRoZSBjdXJyZW50bHkgb3BlbmVkIHdpbmRvdywgaWYgdGhlcmUgaXMgYW55LlxuICAgICAgICAgICAgaWYgKFdpbmRvd0NvbXBvbmVudC5jdXJyZW50bHlPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBTZXRDbGFzc05hdGl2ZS5yZW1vdmUoV2luZG93Q29tcG9uZW50LmN1cnJlbnRseU9wZW5lZCwgV2luZG93Q29tcG9uZW50LlNIT1dfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBXaW5kb3dDb21wb25lbnQuY3VycmVudGx5T3BlbmVkID0gcmVmO1xuICAgICAgICAgICAgU2V0Q2xhc3NOYXRpdmUuYWRkKHJlZiwgV2luZG93Q29tcG9uZW50LlNIT1dfQ0xBU1MpO1xuICAgICAgICAgICAgV2luZG93Q29tcG9uZW50LmNlbnRlcldpbmRvdyhyZWYpO1xuXG4gICAgICAgICAgICBXaW5kb3dDb21wb25lbnQuY2xvYWtTZXJ2aWNlLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICBXaW5kb3dDb21wb25lbnQuY2xvYWtTZXJ2aWNlLnN0YXRlID0gQ2xvYWtTdGF0ZS5Mb2NrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYSB3aW5kb3cgYnkgcHJvdmlkZWQgSUQgKG11c3QgYmUgaW4gV2luUmVmZXJlbmNlcyBjb250YWluZXIpLlxuICAgICAqIEBwYXJhbSBpZCAtIElEIG9mIHRoZSB3aW5kb3dcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNsb3NlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdmFyIHJlZjogSFRNTEVsZW1lbnQgPSBXaW5SZWZlcmVuY2VzLmdldFJlZihpZCk7XG5cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgU2V0Q2xhc3NOYXRpdmUucmVtb3ZlKHJlZiwgV2luZG93Q29tcG9uZW50LlNIT1dfQ0xBU1MpO1xuICAgICAgICAgICAgV2luZG93Q29tcG9uZW50LnVuc2V0Q29ycmVzcG9uZGluZ1dpbmRvd09iamVjdHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuc2V0cy9yZW1vdmVzL3NldHMgdG8gaW5pdGlhbCBzdGF0ZSBhbGwgb2JqZWN0cy92YXJpYWJsZXMgcmVsYXRlZCB0byB3aW5kb3cgb3BlbmluZy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB1bnNldENvcnJlc3BvbmRpbmdXaW5kb3dPYmplY3RzKCk6IHZvaWQge1xuICAgICAgICBXaW5kb3dDb21wb25lbnQuY3VycmVudGx5T3BlbmVkID0gbnVsbDtcbiAgICAgICAgV2luZG93Q29tcG9uZW50LmNsb2FrU2VydmljZS5zdGF0ZSA9IENsb2FrU3RhdGUuRnJlZTtcbiAgICAgICAgV2luZG93Q29tcG9uZW50LmNsb2FrU2VydmljZS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2VudHJhbGl6ZXMgdGhlIHdpbmRvdyBhY2NvcmRpbmcgdG8gdGhlIGJyb3dzZXIgd2luZG93IGJ5IHByb3ZpZGluZyBpdHMgcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSByZWYgLSBSZWZlcmVuY2Ugb2YgdGhlIHdpbmRvd1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGNlbnRlcldpbmRvdyhyZWY6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHZhciBjYWxjdWxhdGVkSGVpZ2h0OiBudW1iZXIgPSBNYXRoLnJvdW5kKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWYub2Zmc2V0SGVpZ2h0KSAvIDIpLFxuICAgICAgICAgICAgY2FsY3VsYXRlZFdpZHRoOiBudW1iZXIgPSBNYXRoLnJvdW5kKCh3aW5kb3cuaW5uZXJXaWR0aCAtIHJlZi5vZmZzZXRXaWR0aCkgLyAyKTtcblxuICAgICAgICByZWYuc3R5bGUudG9wID0gY2FsY3VsYXRlZEhlaWdodC50b1N0cmluZygpICsgXCJweFwiO1xuICAgICAgICByZWYuc3R5bGUubGVmdCA9IGNhbGN1bGF0ZWRXaWR0aC50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgd2luZG93cyByZWZlcmVuY2UgYW5kIHB1dHMgaXQgaW4gYSBjb250YWluZXIgYnkgdGhlIGdpdmVuIEBpZCBvbiB3aW5kb3cgaW5pdGlhbGl6YXRpb24uXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9uYXRpdmVFbGVtID0gdGhpcy5fbWFzdGVyRWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93XCIpOyAvLyBmaXJzdCBjaGlsZCA9PiAud2luZG93IGVsZW1lbnRcblxuICAgICAgICBXaW5SZWZlcmVuY2VzLnNldFJlZih0aGlzLmlkLCB0aGlzLl9uYXRpdmVFbGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSByZWZlcmVuY2Ugb2YgdGhlIHdpbmRvdyBmcm9tIHRoZSBjb250YWluZXIgd2hlbmV2ZXIgaXQgZ2V0cyBkZXN0cm95ZWQuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBXaW5SZWZlcmVuY2VzLnJlbW92ZVJlZih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIHdpbmRvdyBvbiAnWCcgY2xpY2suXG4gICAgICovXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICBTZXRDbGFzc05hdGl2ZS5yZW1vdmUodGhpcy5fbmF0aXZlRWxlbSwgV2luZG93Q29tcG9uZW50LlNIT1dfQ0xBU1MpO1xuICAgICAgICBXaW5kb3dDb21wb25lbnQudW5zZXRDb3JyZXNwb25kaW5nV2luZG93T2JqZWN0cygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
