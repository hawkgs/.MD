System.register(["angular2/core", "./editor/editor.cmp", "./preview/preview.cmp"], function(exports_1, context_1) {
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
    var core_1, editor_cmp_1, preview_cmp_1;
    var MdEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (editor_cmp_1_1) {
                editor_cmp_1 = editor_cmp_1_1;
            },
            function (preview_cmp_1_1) {
                preview_cmp_1 = preview_cmp_1_1;
            }],
        execute: function() {
            MdEditorComponent = (function () {
                function MdEditorComponent() {
                }
                MdEditorComponent = __decorate([
                    core_1.Component({
                        selector: "md-editor",
                        directives: [
                            editor_cmp_1.EditorComponent,
                            preview_cmp_1.PreviewComponent
                        ],
                        template: "\n        <section editor-cmp id=\"main-field\"></section>\n        <preview-cmp></preview-cmp>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MdEditorComponent);
                return MdEditorComponent;
            }());
            exports_1("MdEditorComponent", MdEditorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL21kRWRpdG9yLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtnQkFBZ0MsQ0FBQztnQkFWakM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsVUFBVSxFQUFFOzRCQUNSLDRCQUFlOzRCQUNmLDhCQUFnQjt5QkFDbkI7d0JBQ0QsUUFBUSxFQUFFLGlHQUVzQjtxQkFDbkMsQ0FBQzs7cUNBQUE7Z0JBQzhCLHdCQUFDO1lBQUQsQ0FBaEMsQUFBaUMsSUFBQTtZQUFqQyxpREFBaUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21kX2VkaXRvci9tZEVkaXRvci5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHtFZGl0b3JDb21wb25lbnR9IGZyb20gXCIuL2VkaXRvci9lZGl0b3IuY21wXCI7XG5pbXBvcnQge1ByZXZpZXdDb21wb25lbnR9IGZyb20gXCIuL3ByZXZpZXcvcHJldmlldy5jbXBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibWQtZWRpdG9yXCIsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBFZGl0b3JDb21wb25lbnQsXG4gICAgICAgIFByZXZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGVkaXRvci1jbXAgaWQ9XCJtYWluLWZpZWxkXCI+PC9zZWN0aW9uPlxuICAgICAgICA8cHJldmlldy1jbXA+PC9wcmV2aWV3LWNtcD5gXG59KVxuZXhwb3J0IGNsYXNzIE1kRWRpdG9yQ29tcG9uZW50IHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
