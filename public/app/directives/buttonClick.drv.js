System.register(["angular2/core", "../components/md_editor/editor/services/DocSaveManager"], function(exports_1, context_1) {
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
    var core_1, DocSaveManager_1;
    var ButtonClickDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DocSaveManager_1_1) {
                DocSaveManager_1 = DocSaveManager_1_1;
            }],
        execute: function() {
            ButtonClickDirective = (function () {
                function ButtonClickDirective(elem, renderer, saveManager) {
                    this._elem = elem;
                    this._renderer = renderer;
                    this._saveManager = saveManager;
                }
                ButtonClickDirective.prototype.onMousedown = function () {
                    var self = this;
                    this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, true);
                    this._saveManager.uiFriendlySave();
                    setTimeout(function () {
                        self.onMouseup();
                    }, ButtonClickDirective.REMOVE_AFTER);
                };
                ButtonClickDirective.prototype.onMouseup = function () {
                    this._renderer.setElementClass(this._elem, ButtonClickDirective.CLICK_CLASS, false);
                };
                ButtonClickDirective.REMOVE_AFTER = 500;
                ButtonClickDirective.CLICK_CLASS = "click";
                __decorate([
                    core_1.HostListener("mousedown"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], ButtonClickDirective.prototype, "onMousedown", null);
                __decorate([
                    core_1.HostListener("mouseup"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], ButtonClickDirective.prototype, "onMouseup", null);
                ButtonClickDirective = __decorate([
                    core_1.Directive({
                        selector: "[btn-click]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, DocSaveManager_1.DocSaveManager])
                ], ButtonClickDirective);
                return ButtonClickDirective;
            }());
            exports_1("ButtonClickDirective", ButtonClickDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYnV0dG9uQ2xpY2suZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBY0ksOEJBQVksSUFBZ0IsRUFBRSxRQUFrQixFQUFFLFdBQTJCO29CQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7b0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO2dCQUNwQyxDQUFDO2dCQU1NLDBDQUFXLEdBQWxCO29CQUNJLElBQUksSUFBSSxHQUF5QixJQUFJLENBQUM7b0JBRXRDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUVuQyxVQUFVLENBQUM7d0JBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNyQixDQUFDLEVBQUUsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBTU0sd0NBQVMsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBeENjLGlDQUFZLEdBQVcsR0FBRyxDQUFDO2dCQUMzQixnQ0FBVyxHQUFXLE9BQU8sQ0FBQztnQkFxQjdDO29CQUFDLG1CQUFZLENBQUMsV0FBVyxDQUFDOzs7O3VFQUFBO2dCQWUxQjtvQkFBQyxtQkFBWSxDQUFDLFNBQVMsQ0FBQzs7OztxRUFBQTtnQkF6QzVCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7cUJBQzFCLENBQUM7O3dDQUFBO2dCQTJDRiwyQkFBQztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsdURBMENDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9idXR0b25DbGljay5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7SURvY1NhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZF9lZGl0b3IvZWRpdG9yL3NlcnZpY2VzL2NvbnRyYWN0cy9JRG9jU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7RG9jU2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL21kX2VkaXRvci9lZGl0b3Ivc2VydmljZXMvRG9jU2F2ZU1hbmFnZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2J0bi1jbGlja11cIlxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25DbGlja0RpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgUkVNT1ZFX0FGVEVSOiBudW1iZXIgPSA1MDA7IC8vIDAuNXNcbiAgICBwcml2YXRlIHN0YXRpYyBDTElDS19DTEFTUzogc3RyaW5nID0gXCJjbGlja1wiO1xuXG4gICAgcHJpdmF0ZSBfZWxlbTogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBfc2F2ZU1hbmFnZXI6IElEb2NTYXZlTWFuYWdlcjtcblxuICAgIC8qKlxuICAgICAqIFNldHMgZWxlbWVudCByZWZlcmVuY2UsIHJlbmRlcmVyIGFuZCB0aGUgRG9jU2F2ZU1hbmFnZXIgc2VydmljZS5cbiAgICAgKiBAcGFyYW0gZWxlbVxuICAgICAqIEBwYXJhbSByZW5kZXJlclxuICAgICAqIEBwYXJhbSBzYXZlTWFuYWdlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlciwgc2F2ZU1hbmFnZXI6IERvY1NhdmVNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlciA9IHNhdmVNYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodHMgdGhlIGNsaWNrZWQgYnV0dG9uLlxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIilcbiAgICBwdWJsaWMgb25Nb3VzZWRvd24oKTogdm9pZCB7XG4gICAgICAgIHZhciBzZWxmOiBCdXR0b25DbGlja0RpcmVjdGl2ZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX2VsZW0sIEJ1dHRvbkNsaWNrRGlyZWN0aXZlLkNMSUNLX0NMQVNTLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fc2F2ZU1hbmFnZXIudWlGcmllbmRseVNhdmUoKTsgLy8gc2F2ZVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbk1vdXNldXAoKTtcbiAgICAgICAgfSwgQnV0dG9uQ2xpY2tEaXJlY3RpdmUuUkVNT1ZFX0FGVEVSKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbi1oaWdobGlnaHRzIHRoZSBjbGlja2VkIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2V1cFwiKVxuICAgIHB1YmxpYyBvbk1vdXNldXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLl9lbGVtLCBCdXR0b25DbGlja0RpcmVjdGl2ZS5DTElDS19DTEFTUywgZmFsc2UpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
