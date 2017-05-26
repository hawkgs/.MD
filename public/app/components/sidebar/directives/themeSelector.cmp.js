System.register(["angular2/core", "../services/ThemeColors", "../services/ThemeChanger", "../../../services/SetClassNative", "../../../services/Converters"], function(exports_1, context_1) {
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
    var core_1, ThemeColors_1, ThemeChanger_1, SetClassNative_1, Converters_1;
    var ThemeSelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ThemeColors_1_1) {
                ThemeColors_1 = ThemeColors_1_1;
            },
            function (ThemeChanger_1_1) {
                ThemeChanger_1 = ThemeChanger_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            },
            function (Converters_1_1) {
                Converters_1 = Converters_1_1;
            }],
        execute: function() {
            ThemeSelectorComponent = (function () {
                function ThemeSelectorComponent(themeChanger, elem) {
                    this._themeChanger = themeChanger;
                    this._masterElem = elem;
                    this.currentTheme = this._themeChanger.loadCurrentTheme();
                }
                Object.defineProperty(ThemeSelectorComponent.prototype, "themeColors", {
                    get: function () {
                        return ThemeColors_1.ThemeColors.clr;
                    },
                    enumerable: true,
                    configurable: true
                });
                ThemeSelectorComponent.prototype.ngOnInit = function () {
                    this._nativeElem = this._masterElem.nativeElement.querySelector("#theme-selector");
                };
                ThemeSelectorComponent.prototype.changeTheme = function (event, color) {
                    var clicked = event.target;
                    if (!this._current) {
                        this.getCurrentThemePickerReference();
                    }
                    if (this._current === clicked) {
                        return;
                    }
                    this._themeChanger.changeTheme(color);
                    SetClassNative_1.SetClassNative.remove(this._current, ThemeSelectorComponent.SEL_THEME_CLASS);
                    SetClassNative_1.SetClassNative.add(clicked, ThemeSelectorComponent.SEL_THEME_CLASS);
                    this._current = clicked;
                };
                ThemeSelectorComponent.prototype.getCurrentThemePickerReference = function () {
                    var self = this;
                    [].forEach.call(this._nativeElem.childNodes, function (child) {
                        if (child.style && Converters_1.Converters.rgbToHex(child.style.backgroundColor) === self.currentTheme) {
                            self._current = child;
                        }
                    });
                };
                ThemeSelectorComponent.SEL_THEME_CLASS = "selected";
                ThemeSelectorComponent = __decorate([
                    core_1.Component({
                        selector: "[theme-selector-cmp]",
                        providers: [ThemeChanger_1.ThemeChanger],
                        template: "\n        <div id=\"theme-selector\">\n            <template ngFor #color=\"$implicit\" [ngForOf]=\"themeColors\">\n                <div [ngClass]=\"{selected: (currentTheme === color), 'color-pick': true}\" style=\"background: {{color}}\"\n                     (click)=\"changeTheme($event, color)\"></div>\n            </template>\n        </div>",
                        styles: ["\n        #theme-selector {\n            padding: 15px;\n            text-align: center;\n            height: 40px;\n            cursor: pointer;\n        }\n\n        .color-pick {\n            width: 30px; height: 30px;\n            margin-right: 10px;\n            border: 3px solid transparent;\n            float: left;\n            transition: border-color 0.2s ease;\n            box-sizing: border-box;\n        }\n\n        .color-pick:hover { border-color: rgba(255, 255, 255, 0.5); }\n        .color-pick.selected { border-color: rgba(255, 255, 255, 0.85); }\n    "]
                    }), 
                    __metadata('design:paramtypes', [ThemeChanger_1.ThemeChanger, core_1.ElementRef])
                ], ThemeSelectorComponent);
                return ThemeSelectorComponent;
            }());
            exports_1("ThemeSelectorComponent", ThemeSelectorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL3RoZW1lU2VsZWN0b3IuY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0NBO2dCQWNJLGdDQUFZLFlBQTBCLEVBQUUsSUFBZ0I7b0JBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO29CQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFFeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzlELENBQUM7Z0JBTUQsc0JBQVcsK0NBQVc7eUJBQXRCO3dCQUNJLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLEdBQUcsQ0FBQztvQkFDM0IsQ0FBQzs7O21CQUFBO2dCQUtNLHlDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFPTSw0Q0FBVyxHQUFsQixVQUFtQixLQUFLLEVBQUUsS0FBYTtvQkFDbkMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFHM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7b0JBQzFDLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFdEMsK0JBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDN0UsK0JBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUVwRSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDNUIsQ0FBQztnQkFLTywrREFBOEIsR0FBdEM7b0JBQ0ksSUFBSSxJQUFJLEdBQTJCLElBQUksQ0FBQztvQkFFeEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxLQUFLO3dCQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBdkVjLHNDQUFlLEdBQVcsVUFBVSxDQUFDO2dCQWhDeEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxTQUFTLEVBQUUsQ0FBQywyQkFBWSxDQUFDO3dCQUN6QixRQUFRLEVBQUUsOFZBTUM7d0JBQ1gsTUFBTSxFQUFFLENBQUMsaWtCQW1CUixDQUFDO3FCQUNMLENBQUM7OzBDQUFBO2dCQTBFRiw2QkFBQztZQUFELENBekVBLEFBeUVDLElBQUE7WUF6RUQsMkRBeUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL2RpcmVjdGl2ZXMvdGhlbWVTZWxlY3Rvci5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtUaGVtZUNvbG9yc30gZnJvbSBcIi4uL3NlcnZpY2VzL1RoZW1lQ29sb3JzXCI7XG5pbXBvcnQge0lUaGVtZUNoYW5nZXJ9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb250cmFjdHMvSVRoZW1lQ2hhbmdlclwiO1xuaW1wb3J0IHtUaGVtZUNoYW5nZXJ9IGZyb20gXCIuLi9zZXJ2aWNlcy9UaGVtZUNoYW5nZXJcIjtcbmltcG9ydCB7U2V0Q2xhc3NOYXRpdmV9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9TZXRDbGFzc05hdGl2ZVwiO1xuaW1wb3J0IHtDb252ZXJ0ZXJzfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvQ29udmVydGVyc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbdGhlbWUtc2VsZWN0b3ItY21wXVwiLFxuICAgIHByb3ZpZGVyczogW1RoZW1lQ2hhbmdlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBpZD1cInRoZW1lLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgbmdGb3IgI2NvbG9yPVwiJGltcGxpY2l0XCIgW25nRm9yT2ZdPVwidGhlbWVDb2xvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogKGN1cnJlbnRUaGVtZSA9PT0gY29sb3IpLCAnY29sb3ItcGljayc6IHRydWV9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB7e2NvbG9yfX1cIlxuICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVRoZW1lKCRldmVudCwgY29sb3IpXCI+PC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgI3RoZW1lLXNlbGVjdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sb3ItcGljayB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbG9yLXBpY2s6aG92ZXIgeyBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuICAgICAgICAuY29sb3ItcGljay5zZWxlY3RlZCB7IGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTsgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgc3RhdGljIFNFTF9USEVNRV9DTEFTUzogc3RyaW5nID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgcHVibGljIGN1cnJlbnRUaGVtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3RoZW1lQ2hhbmdlcjogSVRoZW1lQ2hhbmdlcjtcbiAgICBwcml2YXRlIF9tYXN0ZXJFbGVtOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgX2N1cnJlbnQ7XG4gICAgcHJpdmF0ZSBfbmF0aXZlRWxlbTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlbWVDaGFuZ2VyIGluc3RhbmNlIGFuZCBtYXN0ZXIgZWxlbWVudCByZWZlcmVuY2UuIFRoZW4gbG9hZHMgZGVmYXVsdCB0aGVtZS5cbiAgICAgKiBAcGFyYW0gdGhlbWVDaGFuZ2VyXG4gICAgICogQHBhcmFtIGVsZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0aGVtZUNoYW5nZXI6IFRoZW1lQ2hhbmdlciwgZWxlbTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl90aGVtZUNoYW5nZXIgPSB0aGVtZUNoYW5nZXI7XG4gICAgICAgIHRoaXMuX21hc3RlckVsZW0gPSBlbGVtO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhpcy5fdGhlbWVDaGFuZ2VyLmxvYWRDdXJyZW50VGhlbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd3JhcHBlciBmb3IgVGhlbWVDb2xvcnMuY2xyLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHRoZW1lQ29sb3JzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFRoZW1lQ29sb3JzLmNscjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBAX25hdGl2ZUVsZW1lbnQgdG8gdGhlIHRoZW1lIHNlbGVjdG9yIGVsZW1lbnQuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9uYXRpdmVFbGVtID0gdGhpcy5fbWFzdGVyRWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlbWUtc2VsZWN0b3JcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgdGhlbWUgYWNjb3JkaW5nIHRvIGNsaWNrZWQgY29sb3IgcGlja2VyLlxuICAgICAqIEBwYXJhbSBldmVudCAtIERPTSBldmVudCBvYmplY3Qgb2YgdGhlIGNsaWNrZWQgcGlja2VyXG4gICAgICogQHBhcmFtIGNvbG9yIC0gSEVYIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VUaGVtZShldmVudCwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB2YXIgY2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAvLyBDYWxsZWQgb25seSBvbiBmaXJzdCBjbGljayBhZnRlciBwYWdlIGxvYWRcbiAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUaGVtZVBpY2tlclJlZmVyZW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPT09IGNsaWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RoZW1lQ2hhbmdlci5jaGFuZ2VUaGVtZShjb2xvcik7XG5cbiAgICAgICAgU2V0Q2xhc3NOYXRpdmUucmVtb3ZlKHRoaXMuX2N1cnJlbnQsIFRoZW1lU2VsZWN0b3JDb21wb25lbnQuU0VMX1RIRU1FX0NMQVNTKTtcbiAgICAgICAgU2V0Q2xhc3NOYXRpdmUuYWRkKGNsaWNrZWQsIFRoZW1lU2VsZWN0b3JDb21wb25lbnQuU0VMX1RIRU1FX0NMQVNTKTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gY2xpY2tlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBkZXRlcm1pbmluZyB0aGUgdGhpcy5fY3VycmVudCBhZnRlciBwYWdlIGxvYWQsIG9uIGZpcnN0IGNsaWNrIG9mIGEgcGlja2VyLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q3VycmVudFRoZW1lUGlja2VyUmVmZXJlbmNlKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2VsZjogVGhlbWVTZWxlY3RvckNvbXBvbmVudCA9IHRoaXM7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMuX25hdGl2ZUVsZW0uY2hpbGROb2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuc3R5bGUgJiYgQ29udmVydGVycy5yZ2JUb0hleChjaGlsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpID09PSBzZWxmLmN1cnJlbnRUaGVtZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2N1cnJlbnQgPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
