System.register(["angular2/core", "../services/CloakService"], function(exports_1, context_1) {
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
    var core_1, CloakService_1;
    var CloakDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CloakService_1_1) {
                CloakService_1 = CloakService_1_1;
            }],
        execute: function() {
            CloakDirective = (function () {
                function CloakDirective(elem) {
                    CloakService_1.CloakService.cloakEl = elem;
                }
                CloakDirective = __decorate([
                    core_1.Directive({
                        selector: "[cloak-drv]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CloakDirective);
                return CloakDirective;
            }());
            exports_1("CloakDirective", CloakDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvY2xvYWsuZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBS0ksd0JBQVksSUFBZ0I7b0JBQ3hCLDJCQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztnQkFWTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3FCQUMxQixDQUFDOztrQ0FBQTtnQkFTRixxQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsMkNBUUMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2Nsb2FrLmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtDbG9ha1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9DbG9ha1NlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2Nsb2FrLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBDbG9ha0RpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogUHV0cyB0aGUgaW5qZWN0ZWQgZWxlbWVudCByZWZlcmVuY2UgaW4gYSBjb250YWluZXIgKENsb2FrU2VydmljZSkuXG4gICAgICogQHBhcmFtIGVsZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIENsb2FrU2VydmljZS5jbG9ha0VsID0gZWxlbTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
