System.register(["angular2/core", "./common/window.cmp/window.cmp", "../../md_editor/editor/services/DocSaveManager", "../../header/services/DocNameSaveManager"], function(exports_1, context_1) {
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
    var core_1, window_cmp_1, DocSaveManager_1, DocNameSaveManager_1;
    var NewDocWindowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (window_cmp_1_1) {
                window_cmp_1 = window_cmp_1_1;
            },
            function (DocSaveManager_1_1) {
                DocSaveManager_1 = DocSaveManager_1_1;
            },
            function (DocNameSaveManager_1_1) {
                DocNameSaveManager_1 = DocNameSaveManager_1_1;
            }],
        execute: function() {
            NewDocWindowComponent = (function () {
                function NewDocWindowComponent(saveManager, nameSaveManager) {
                    this._saveManager = saveManager;
                    this._nameSaveManager = nameSaveManager;
                }
                NewDocWindowComponent.open = function () {
                    window_cmp_1.WindowComponent.open(NewDocWindowComponent.ID);
                };
                NewDocWindowComponent.prototype.closeWindow = function () {
                    window_cmp_1.WindowComponent.close(NewDocWindowComponent.ID);
                };
                NewDocWindowComponent.prototype.newDocument = function () {
                    this._saveManager.clearDocument();
                    this._nameSaveManager.resetName();
                    this.closeWindow();
                };
                NewDocWindowComponent.ID = "new_document";
                NewDocWindowComponent = __decorate([
                    core_1.Component({
                        selector: "[new-doc-cmp]",
                        template: "\n        <p>\n            Are you sure you want to start a new document?<br/>\n            All unsaved changes on the current document will be lost.\n        </p>\n        <p>\n            <button class=\"default cancel\" (click)=\"closeWindow()\">No</button>\n            <button class=\"default theme-bg\" (click)=\"newDocument()\">Yes</button>\n        </p>",
                        styles: ["\n        button {\n            margin: 10px 0 0 10px;\n            font-size: 14px;\n            min-width: 75px;\n            float:right;\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [DocSaveManager_1.DocSaveManager, DocNameSaveManager_1.DocNameSaveManager])
                ], NewDocWindowComponent);
                return NewDocWindowComponent;
            }());
            exports_1("NewDocWindowComponent", NewDocWindowComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2luZG93cy9kaXJlY3RpdmVzL25ld0RvY1dpbmRvdy5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBVUksK0JBQVksV0FBMkIsRUFBRSxlQUFtQztvQkFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7Z0JBQzVDLENBQUM7Z0JBS2EsMEJBQUksR0FBbEI7b0JBQ0ksNEJBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBS00sMkNBQVcsR0FBbEI7b0JBQ0ksNEJBQWUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBS00sMkNBQVcsR0FBbEI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUVsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBcENjLHdCQUFFLEdBQVcsY0FBYyxDQUFDO2dCQXJCL0M7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDJXQVFEO3dCQUNULE1BQU0sRUFBRSxDQUFDLHlKQU1IO3lCQUNMO3FCQUNKLENBQUM7O3lDQUFBO2dCQXVDRiw0QkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QseURBc0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy93aW5kb3dzL2RpcmVjdGl2ZXMvbmV3RG9jV2luZG93LmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1dpbmRvd0NvbXBvbmVudH0gZnJvbSBcIi4vY29tbW9uL3dpbmRvdy5jbXAvd2luZG93LmNtcFwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtJRG9jU2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi8uLi9tZF9lZGl0b3IvZWRpdG9yL3NlcnZpY2VzL2NvbnRyYWN0cy9JRG9jU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7RG9jU2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi8uLi9tZF9lZGl0b3IvZWRpdG9yL3NlcnZpY2VzL0RvY1NhdmVNYW5hZ2VyXCI7XG5pbXBvcnQge0lEb2NOYW1lU2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi8uLi9oZWFkZXIvc2VydmljZXMvY29udHJhY3RzL0lEb2NOYW1lU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7RG9jTmFtZVNhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vaGVhZGVyL3NlcnZpY2VzL0RvY05hbWVTYXZlTWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbbmV3LWRvYy1jbXBdXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHA+XG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3RhcnQgYSBuZXcgZG9jdW1lbnQ/PGJyLz5cbiAgICAgICAgICAgIEFsbCB1bnNhdmVkIGNoYW5nZXMgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnQgd2lsbCBiZSBsb3N0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlZmF1bHQgY2FuY2VsXCIgKGNsaWNrKT1cImNsb3NlV2luZG93KClcIj5ObzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlZmF1bHQgdGhlbWUtYmdcIiAoY2xpY2spPVwibmV3RG9jdW1lbnQoKVwiPlllczwvYnV0dG9uPlxuICAgICAgICA8L3A+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDc1cHg7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgfWBcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0RvY1dpbmRvd0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgSUQ6IHN0cmluZyA9IFwibmV3X2RvY3VtZW50XCI7XG4gICAgcHJpdmF0ZSBfc2F2ZU1hbmFnZXI6IElEb2NTYXZlTWFuYWdlcjtcbiAgICBwcml2YXRlIF9uYW1lU2F2ZU1hbmFnZXI6IElEb2NOYW1lU2F2ZU1hbmFnZXI7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGluamVjdGVkIHNhdmUgbWFuYWdlcnMgKGRvY3VtZW50IGFuZCBuYW1lKS5cbiAgICAgKiBAcGFyYW0gc2F2ZU1hbmFnZXJcbiAgICAgKiBAcGFyYW0gbmFtZVNhdmVNYW5hZ2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2F2ZU1hbmFnZXI6IERvY1NhdmVNYW5hZ2VyLCBuYW1lU2F2ZU1hbmFnZXI6IERvY05hbWVTYXZlTWFuYWdlcikge1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlciA9IHNhdmVNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9uYW1lU2F2ZU1hbmFnZXIgPSBuYW1lU2F2ZU1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgc3RhdGljIG1ldGhvZCBmb3Igb3BlbmluZyB0aGUgd2luZG93IG91dHNpZGUgb2YgdGhpcyBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIG9wZW4oKTogdm9pZCB7XG4gICAgICAgIFdpbmRvd0NvbXBvbmVudC5vcGVuKE5ld0RvY1dpbmRvd0NvbXBvbmVudC5JRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSB3aW5kb3csIGlmIHRoZSB1c2VyIHNlbGVjdCAnTm8nLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbG9zZVdpbmRvdygpOiB2b2lkIHtcbiAgICAgICAgV2luZG93Q29tcG9uZW50LmNsb3NlKE5ld0RvY1dpbmRvd0NvbXBvbmVudC5JRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBkb2N1bWVudCAobmV3IGRvY3VtZW50KSAtIG5hbWUgYW5kIGNvbnRlbnQuXG4gICAgICovXG4gICAgcHVibGljIG5ld0RvY3VtZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlci5jbGVhckRvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuX25hbWVTYXZlTWFuYWdlci5yZXNldE5hbWUoKTtcblxuICAgICAgICB0aGlzLmNsb3NlV2luZG93KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
