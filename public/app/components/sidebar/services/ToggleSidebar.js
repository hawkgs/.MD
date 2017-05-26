System.register(["angular2/core", "../../../services/CloakService", "../../../services/SetClassNative", "./common/OpenedSidebarExpandable", "./common/SidebarConsts"], function(exports_1, context_1) {
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
    var core_1, CloakService_1, SetClassNative_1, OpenedSidebarExpandable_1, SidebarConsts_1;
    var ToggleSidebar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CloakService_1_1) {
                CloakService_1 = CloakService_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            },
            function (OpenedSidebarExpandable_1_1) {
                OpenedSidebarExpandable_1 = OpenedSidebarExpandable_1_1;
            },
            function (SidebarConsts_1_1) {
                SidebarConsts_1 = SidebarConsts_1_1;
            }],
        execute: function() {
            ToggleSidebar = (function () {
                function ToggleSidebar(rootRenderer) {
                    var type = new core_1.RenderComponentType(Math.random().toString(), core_1.ViewEncapsulation.None, []);
                    this._renderer = rootRenderer.renderComponent(type);
                    this._isExpanded = false;
                    this._cloakService = CloakService_1.CloakService.getInstance(this._renderer);
                }
                Object.defineProperty(ToggleSidebar.prototype, "sidebarRef", {
                    set: function (value) {
                        this._sidebarRef = value;
                        this.attemptSettingHideEvent();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ToggleSidebar.prototype, "buttonRef", {
                    set: function (value) {
                        this._buttonRef = value;
                        this._isBtnClicked = false;
                        this.attemptSettingHideEvent();
                    },
                    enumerable: true,
                    configurable: true
                });
                ToggleSidebar.prototype.toggle = function () {
                    this.setSidebarState(!this._isExpanded);
                    this._cloakService.toggle();
                    this.toggleButton();
                };
                ToggleSidebar.prototype.attemptSettingHideEvent = function () {
                    if (this._buttonRef && this._sidebarRef) {
                        this.documentHideOnClickOut();
                    }
                };
                ToggleSidebar.prototype.toggleButton = function () {
                    this.setButtonState(!this._isBtnClicked);
                };
                ToggleSidebar.prototype.setSidebarState = function (isExpanded) {
                    this._isExpanded = isExpanded;
                    this._renderer.setElementClass(this._sidebarRef.nativeElement, ToggleSidebar.EXPND_CLASS, isExpanded);
                };
                ToggleSidebar.prototype.setButtonState = function (isClicked) {
                    this._isBtnClicked = isClicked;
                    this._renderer.setElementClass(this._buttonRef.nativeElement, ToggleSidebar.BTN_CLICK_CLASS, isClicked);
                };
                ToggleSidebar.prototype.documentHideOnClickOut = function () {
                    var self = this, sidebarId = "#" + this._sidebarRef.nativeElement.id, buttonId = "#" + this._buttonRef.nativeElement.id;
                    jqlite(document).on("click", function (event) {
                        if (self._isExpanded &&
                            !jqlite(event.target).closest(sidebarId).length &&
                            !jqlite(event.target).closest(buttonId).length) {
                            self.setButtonState(false);
                            self.setSidebarState(false);
                            self._cloakService.deactivate();
                            if (OpenedSidebarExpandable_1.OpenedSidebarExpandable.content) {
                                SetClassNative_1.SetClassNative.remove(OpenedSidebarExpandable_1.OpenedSidebarExpandable.content, SidebarConsts_1.SidebarConsts.OPENED_CLASS);
                            }
                        }
                    });
                };
                ToggleSidebar.EXPND_CLASS = "expanded";
                ToggleSidebar.BTN_CLICK_CLASS = "clicked";
                ToggleSidebar = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.RootRenderer])
                ], ToggleSidebar);
                return ToggleSidebar;
            }());
            exports_1("ToggleSidebar", ToggleSidebar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9zZXJ2aWNlcy9Ub2dnbGVTaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQWdCSSx1QkFBWSxZQUEwQjtvQkFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSwwQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsd0JBQWlCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUV6RixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUV6QixJQUFJLENBQUMsYUFBYSxHQUFHLDJCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFNRCxzQkFBVyxxQ0FBVTt5QkFBckIsVUFBc0IsS0FBaUI7d0JBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3dCQUd6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDbkMsQ0FBQzs7O21CQUFBO2dCQU1ELHNCQUFXLG9DQUFTO3lCQUFwQixVQUFxQixLQUFpQjt3QkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUczQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDbkMsQ0FBQzs7O21CQUFBO2dCQUtNLDhCQUFNLEdBQWI7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUtPLCtDQUF1QixHQUEvQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQztnQkFDTCxDQUFDO2dCQUtPLG9DQUFZLEdBQXBCO29CQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBTU8sdUNBQWUsR0FBdkIsVUFBd0IsVUFBbUI7b0JBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMxRyxDQUFDO2dCQU1PLHNDQUFjLEdBQXRCLFVBQXVCLFNBQWtCO29CQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDNUcsQ0FBQztnQkFNTyw4Q0FBc0IsR0FBOUI7b0JBQ0ksSUFBSSxJQUFJLEdBQWtCLElBQUksRUFDMUIsU0FBUyxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQzNELFFBQVEsR0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO29CQUU5RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEtBQUs7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXOzRCQUNoQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU07NEJBQy9DLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFFakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFFaEMsRUFBRSxDQUFDLENBQUMsaURBQXVCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDbEMsK0JBQWMsQ0FBQyxNQUFNLENBQUMsaURBQXVCLENBQUMsT0FBTyxFQUFFLDZCQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3ZGLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQWxIYyx5QkFBVyxHQUFXLFVBQVUsQ0FBQztnQkFDakMsNkJBQWUsR0FBVyxTQUFTLENBQUM7Z0JBSHZEO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQXFIYixvQkFBQztZQUFELENBcEhBLEFBb0hDLElBQUE7WUFwSEQseUNBb0hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL3NlcnZpY2VzL1RvZ2dsZVNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5qZWN0YWJsZSxcbiAgICBSZW5kZXJlcixcbiAgICBSb290UmVuZGVyZXIsXG4gICAgUmVuZGVyQ29tcG9uZW50VHlwZSxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtDbG9ha1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9DbG9ha1NlcnZpY2VcIjtcbmltcG9ydCB7U2V0Q2xhc3NOYXRpdmV9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9TZXRDbGFzc05hdGl2ZVwiO1xuaW1wb3J0IHtPcGVuZWRTaWRlYmFyRXhwYW5kYWJsZX0gZnJvbSBcIi4vY29tbW9uL09wZW5lZFNpZGViYXJFeHBhbmRhYmxlXCI7XG5pbXBvcnQge1NpZGViYXJDb25zdHN9IGZyb20gXCIuL2NvbW1vbi9TaWRlYmFyQ29uc3RzXCI7XG5cbmRlY2xhcmUgdmFyIGpxbGl0ZTtcblxuLyoqXG4gKiBTaWRlYmFyIHRvZ2dsZSBtYW5hZ2VyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlU2lkZWJhciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgRVhQTkRfQ0xBU1M6IHN0cmluZyA9IFwiZXhwYW5kZWRcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBCVE5fQ0xJQ0tfQ0xBU1M6IHN0cmluZyA9IFwiY2xpY2tlZFwiO1xuXG4gICAgcHJpdmF0ZSBfc2lkZWJhclJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9pc0V4cGFuZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcbiAgICBwcml2YXRlIF9jbG9ha1NlcnZpY2U6IENsb2FrU2VydmljZTtcblxuICAgIHByaXZhdGUgX2J1dHRvblJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIF9pc0J0bkNsaWNrZWQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGEgUm9vdFJlbmRlcmVyIGFuZCBnZXRzIENsb2FrU2VydmljZSBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gcm9vdFJlbmRlcmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm9vdFJlbmRlcmVyOiBSb290UmVuZGVyZXIpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBuZXcgUmVuZGVyQ29tcG9uZW50VHlwZShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCksIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsIFtdKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJvb3RSZW5kZXJlci5yZW5kZXJDb21wb25lbnQodHlwZSk7XG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jbG9ha1NlcnZpY2UgPSBDbG9ha1NlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5fcmVuZGVyZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNpZGViYXIgcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFJlZmVyZW5jZSB0byB0aGUgc2lkZWJhclxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgc2lkZWJhclJlZih2YWx1ZTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9zaWRlYmFyUmVmID0gdmFsdWU7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3Qga25vdyB3aGljaCByZWZlcmVuY2Ugd2lsbCBiZSBzZXQgZmlyc3QgLSBidXR0b24gb3Igc2lkZWJhciBvbmVcbiAgICAgICAgdGhpcy5hdHRlbXB0U2V0dGluZ0hpZGVFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRvZ2dsZSBidXR0b24gcmVmZXJlbmNlIGFuZCBpbml0aWFsaXplcyB0aGUgY29ycmVzcG9uZGluZyBldmVudHMgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFJlZmVyZW5jZSB0byB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIHNldCBidXR0b25SZWYodmFsdWU6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fYnV0dG9uUmVmID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX2lzQnRuQ2xpY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IGtub3cgd2hpY2ggcmVmZXJlbmNlIHdpbGwgYmUgc2V0IGZpcnN0IC0gYnV0dG9uIG9yIHNpZGViYXIgb25lXG4gICAgICAgIHRoaXMuYXR0ZW1wdFNldHRpbmdIaWRlRXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBzaWRlYmFyIChvbi9vZmYpLlxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U2lkZWJhclN0YXRlKCF0aGlzLl9pc0V4cGFuZGVkKTtcblxuICAgICAgICB0aGlzLl9jbG9ha1NlcnZpY2UudG9nZ2xlKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gc2V0IHRoZSBoaWRlIGV2ZW50IGZvciB0aGUgc2lkZWJhciBpZiBib3RoIHRoZSBidXR0b24gYW5kIHNpZGViYXIgcmVmZXJlbmNlcyBhcmUgcHJlc2VudC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGF0dGVtcHRTZXR0aW5nSGlkZUV2ZW50KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYnV0dG9uUmVmICYmIHRoaXMuX3NpZGViYXJSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRIaWRlT25DbGlja091dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBidXR0b24gdmlzdWFsIHN0YXRlIChjbGlja2VkIG9yIG5vdCkuXG4gICAgICovXG4gICAgcHJpdmF0ZSB0b2dnbGVCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0QnV0dG9uU3RhdGUoIXRoaXMuX2lzQnRuQ2xpY2tlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBzaWRlYmFyIHN0YXRlIGJ5IGEgcHJvdmlkZWQgYm9vbGVhbiB2YWx1ZSB1c2luZyB0aGUgUmVuZGVyZXIuXG4gICAgICogQHBhcmFtIGlzRXhwYW5kZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIHNldFNpZGViYXJTdGF0ZShpc0V4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBpc0V4cGFuZGVkO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fc2lkZWJhclJlZi5uYXRpdmVFbGVtZW50LCBUb2dnbGVTaWRlYmFyLkVYUE5EX0NMQVNTLCBpc0V4cGFuZGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRvZ2dsZSBidXR0b24gc3RhdGUgYnkgYSBwcm92aWRlZCBib29sZWFuIHZhbHVlIHVzaW5nIHRoZSBSZW5kZXJlci5cbiAgICAgKiBAcGFyYW0gaXNDbGlja2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRCdXR0b25TdGF0ZShpc0NsaWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNCdG5DbGlja2VkID0gaXNDbGlja2VkO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5fYnV0dG9uUmVmLm5hdGl2ZUVsZW1lbnQsIFRvZ2dsZVNpZGViYXIuQlROX0NMSUNLX0NMQVNTLCBpc0NsaWNrZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGF1dG8gaGlkZSBldmVudCB0byB0aGUgZG9jdW1lbnQgKERPTSkgc28gdGhhdCB3aGVuZXZlciB0aGUgdXNlclxuICAgICAqIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBzaWRlYmFyIGl0IGdldHMgaGlkZGVuLlxuICAgICAqL1xuICAgIHByaXZhdGUgZG9jdW1lbnRIaWRlT25DbGlja091dCgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHNlbGY6IFRvZ2dsZVNpZGViYXIgPSB0aGlzLFxuICAgICAgICAgICAgc2lkZWJhcklkOiBzdHJpbmcgPSBcIiNcIiArIHRoaXMuX3NpZGViYXJSZWYubmF0aXZlRWxlbWVudC5pZCxcbiAgICAgICAgICAgIGJ1dHRvbklkOiBzdHJpbmcgPSBcIiNcIiArIHRoaXMuX2J1dHRvblJlZi5uYXRpdmVFbGVtZW50LmlkO1xuXG4gICAgICAgIGpxbGl0ZShkb2N1bWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX2lzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgICAgICAhanFsaXRlKGV2ZW50LnRhcmdldCkuY2xvc2VzdChzaWRlYmFySWQpLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICFqcWxpdGUoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KGJ1dHRvbklkKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIHNlbGYuc2V0QnV0dG9uU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U2lkZWJhclN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9jbG9ha1NlcnZpY2UuZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE9wZW5lZFNpZGViYXJFeHBhbmRhYmxlLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgU2V0Q2xhc3NOYXRpdmUucmVtb3ZlKE9wZW5lZFNpZGViYXJFeHBhbmRhYmxlLmNvbnRlbnQsIFNpZGViYXJDb25zdHMuT1BFTkVEX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
