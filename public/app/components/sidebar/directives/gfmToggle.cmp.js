System.register(["angular2/core", "../../../directives/switchControl.cmp", "../../../services/GfmService"], function(exports_1, context_1) {
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
    var core_1, switchControl_cmp_1, GfmService_1;
    var GfmToggleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (switchControl_cmp_1_1) {
                switchControl_cmp_1 = switchControl_cmp_1_1;
            },
            function (GfmService_1_1) {
                GfmService_1 = GfmService_1_1;
            }],
        execute: function() {
            GfmToggleComponent = (function () {
                function GfmToggleComponent() {
                }
                Object.defineProperty(GfmToggleComponent.prototype, "gfmState", {
                    get: function () {
                        return GfmService_1.GfmService.isGfmOn;
                    },
                    enumerable: true,
                    configurable: true
                });
                GfmToggleComponent.prototype.changeGfmState = function () {
                    GfmService_1.GfmService.toggleGfm();
                };
                GfmToggleComponent = __decorate([
                    core_1.Component({
                        selector: "[gfm-toggle-cmp]",
                        directives: [switchControl_cmp_1.SwitchControlComponent],
                        template: "\n        <span>Toggle GFM</span>\n        <switch-ctrl [isClicked]=\"gfmState\" (click)=\"changeGfmState()\"></switch-ctrl>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GfmToggleComponent);
                return GfmToggleComponent;
            }());
            exports_1("GfmToggleComponent", GfmToggleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2dmbVRvZ2dsZS5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtnQkFlQSxDQUFDO2dCQVZHLHNCQUFXLHdDQUFRO3lCQUFuQjt3QkFDSSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQzlCLENBQUM7OzttQkFBQTtnQkFLTSwyQ0FBYyxHQUFyQjtvQkFDSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFVBQVUsRUFBRSxDQUFDLDBDQUFzQixDQUFDO3dCQUNwQyxRQUFRLEVBQUUsOEhBRXdFO3FCQUNyRixDQUFDOztzQ0FBQTtnQkFnQkYseUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELG1EQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL2RpcmVjdGl2ZXMvZ2ZtVG9nZ2xlLmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQge1N3aXRjaENvbnRyb2xDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi9kaXJlY3RpdmVzL3N3aXRjaENvbnRyb2wuY21wXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge0dmbVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9HZm1TZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIltnZm0tdG9nZ2xlLWNtcF1cIixcbiAgICBkaXJlY3RpdmVzOiBbU3dpdGNoQ29udHJvbENvbXBvbmVudF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4+VG9nZ2xlIEdGTTwvc3Bhbj5cbiAgICAgICAgPHN3aXRjaC1jdHJsIFtpc0NsaWNrZWRdPVwiZ2ZtU3RhdGVcIiAoY2xpY2spPVwiY2hhbmdlR2ZtU3RhdGUoKVwiPjwvc3dpdGNoLWN0cmw+YCxcbn0pXG5leHBvcnQgY2xhc3MgR2ZtVG9nZ2xlQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIChnZXQgYWNjZXNzb3IpIG9mIHN0YXRpYyBHZm1TZXJ2aWNlLmlzR2ZtT24uXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IEdGTSBzdGF0ZSAob24vb2ZmKVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ2ZtU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBHZm1TZXJ2aWNlLmlzR2ZtT247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdpbmcgdGhlIHN0YXRlICh0b2dnbGluZykgb2YgR0ZNLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VHZm1TdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgR2ZtU2VydmljZS50b2dnbGVHZm0oKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
