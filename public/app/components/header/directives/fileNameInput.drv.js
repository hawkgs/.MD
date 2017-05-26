System.register(["angular2/core", "../services/DocNameSaveManager"], function(exports_1, context_1) {
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
    var core_1, DocNameSaveManager_1;
    var FileNameInputDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DocNameSaveManager_1_1) {
                DocNameSaveManager_1 = DocNameSaveManager_1_1;
            }],
        execute: function() {
            FileNameInputDirective = (function () {
                function FileNameInputDirective(saver, elem) {
                    this._saveManager = saver;
                    this._saveManager.init(elem.nativeElement);
                }
                FileNameInputDirective = __decorate([
                    core_1.Directive({
                        selector: "[file-inp-drv]",
                    }), 
                    __metadata('design:paramtypes', [DocNameSaveManager_1.DocNameSaveManager, core_1.ElementRef])
                ], FileNameInputDirective);
                return FileNameInputDirective;
            }());
            exports_1("FileNameInputDirective", FileNameInputDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvZmlsZU5hbWVJbnB1dC5kcnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFRSSxnQ0FBWSxLQUF5QixFQUFFLElBQWdCO29CQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtxQkFFN0IsQ0FBQzs7MENBQUE7Z0JBYUYsNkJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDJEQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvZGlyZWN0aXZlcy9maWxlTmFtZUlucHV0LmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtJRG9jTmFtZVNhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vc2VydmljZXMvY29udHJhY3RzL0lEb2NOYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7RG9jTmFtZVNhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vc2VydmljZXMvRG9jTmFtZVNhdmVNYW5hZ2VyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltmaWxlLWlucC1kcnZdXCIsXG4gICAgLy9wcm92aWRlcnM6IFtEb2NOYW1lU2F2ZXJdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVOYW1lSW5wdXREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX3NhdmVNYW5hZ2VyOiBJRG9jTmFtZVNhdmVNYW5hZ2VyO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5qZWN0ZWQgc2F2ZXIgYW5kIGluaXRpYWxpemVzIGl0LlxuICAgICAqIEBwYXJhbSBzYXZlclxuICAgICAqIEBwYXJhbSBlbGVtXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2F2ZXI6IERvY05hbWVTYXZlTWFuYWdlciwgZWxlbTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlciA9IHNhdmVyO1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlci5pbml0KGVsZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
