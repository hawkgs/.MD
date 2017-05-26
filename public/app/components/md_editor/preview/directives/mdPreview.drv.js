System.register(["angular2/core", "../services/MdPreviewRef"], function(exports_1, context_1) {
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
    var core_1, MdPreviewRef_1;
    var MdPreviewDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MdPreviewRef_1_1) {
                MdPreviewRef_1 = MdPreviewRef_1_1;
            }],
        execute: function() {
            MdPreviewDirective = (function () {
                function MdPreviewDirective(elem) {
                    MdPreviewRef_1.MdPreviewRef.ref = elem.nativeElement;
                }
                MdPreviewDirective = __decorate([
                    core_1.Directive({
                        selector: "[md-preview-drv]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MdPreviewDirective);
                return MdPreviewDirective;
            }());
            exports_1("MdPreviewDirective", MdPreviewDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL3ByZXZpZXcvZGlyZWN0aXZlcy9tZFByZXZpZXcuZHJ2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBS0ksNEJBQVksSUFBZ0I7b0JBQ3hCLDJCQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzFDLENBQUM7Z0JBVkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0JBQWtCO3FCQUMvQixDQUFDOztzQ0FBQTtnQkFTRix5QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsbURBUUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21kX2VkaXRvci9wcmV2aWV3L2RpcmVjdGl2ZXMvbWRQcmV2aWV3LmRydi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtNZFByZXZpZXdSZWZ9IGZyb20gXCIuLi9zZXJ2aWNlcy9NZFByZXZpZXdSZWZcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW21kLXByZXZpZXctZHJ2XVwiXG59KVxuZXhwb3J0IGNsYXNzIE1kUHJldmlld0RpcmVjdGl2ZSB7XG4gICAgLyoqXG4gICAgICogUHV0cyB0aGUgaW5qZWN0ZWQgZWxlbWVudCByZWZlcmVuY2UgdG8gYSBjb250YWluZXIgKE1kUHJldmlld1JlZikuXG4gICAgICogQHBhcmFtIGVsZW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIE1kUHJldmlld1JlZi5yZWYgPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
