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
    var LoaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoaderComponent = (function () {
                function LoaderComponent() {
                }
                Object.defineProperty(LoaderComponent.prototype, "isActive", {
                    get: function () {
                        return LoaderComponent.isActive;
                    },
                    enumerable: true,
                    configurable: true
                });
                LoaderComponent.turnOn = function () {
                    LoaderComponent.isActive = true;
                };
                LoaderComponent.turnOff = function () {
                    LoaderComponent.isActive = false;
                };
                LoaderComponent.isActive = false;
                LoaderComponent = __decorate([
                    core_1.Component({
                        selector: "loader",
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "\n        <div id=\"loader\" [ngClass]=\"{activated: isActive}\">\n            <div class=\"slider theme-bg\"></div>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoaderComponent);
                return LoaderComponent;
            }());
            exports_1("LoaderComponent", LoaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbG9hZGVyLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO2dCQXlCQSxDQUFDO2dCQWpCRyxzQkFBVyxxQ0FBUTt5QkFBbkI7d0JBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7b0JBQ3BDLENBQUM7OzttQkFBQTtnQkFLYSxzQkFBTSxHQUFwQjtvQkFDSSxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDcEMsQ0FBQztnQkFLYSx1QkFBTyxHQUFyQjtvQkFDSSxlQUFlLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDckMsQ0FBQztnQkF2QmMsd0JBQVEsR0FBWSxLQUFLLENBQUM7Z0JBVDdDO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxRQUFRLEVBQUUsc0lBR0M7cUJBQ2QsQ0FBQzs7bUNBQUE7Z0JBMEJGLHNCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCw2Q0F5QkMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2xvYWRlci5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvYWRlclwiLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBpZD1cImxvYWRlclwiIFtuZ0NsYXNzXT1cInthY3RpdmF0ZWQ6IGlzQWN0aXZlfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlciB0aGVtZS1iZ1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgZ2V0dGVyICh3cmFwcGVyKSB3aGljaCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGljIGlzQWN0aXZlLlxuICAgICAqIE5lZWRlZCBmb3IgdGhlIHRlbXBsYXRlLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBMb2FkZXJDb21wb25lbnQuaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHVybnMgb24gdGhlIGxvYWRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHR1cm5PbigpOiB2b2lkIHtcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUdXJucyBvZmYgdGhlIGxvYWRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHR1cm5PZmYoKTogdm9pZCB7XG4gICAgICAgIExvYWRlckNvbXBvbmVudC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
