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
    var SwitchControlComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SwitchControlComponent = (function () {
                function SwitchControlComponent() {
                }
                SwitchControlComponent.prototype.onClick = function () {
                    this.isClicked = !this.isClicked;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SwitchControlComponent.prototype, "isClicked", void 0);
                SwitchControlComponent = __decorate([
                    core_1.Component({
                        selector: "switch-ctrl",
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: '<span class="switch theme-bg-ev" [ngClass]="{clicked: isClicked}" (click)="onClick()"></span>',
                        styles: ["\n        span.switch {\n            position: relative;\n            width: 45px; height: 24px;\n            border-radius: 20px;\n            background-color: #444;\n            transition: background-color 0.3s ease;\n            float: right;\n            display: inline-block;\n            cursor: pointer;\n        }\n\n        span.switch::after {\n            content: \"\";\n            position: absolute;\n            width: 20px; height: 20px;\n            top: 2px; left: 2px;\n            border-radius: 20px;\n            background: #F5F5F5;\n            transition: left 0.3s ease;\n        }\n\n        span.switch.clicked::after { left: 23px; }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwitchControlComponent);
                return SwitchControlComponent;
            }());
            exports_1("SwitchControlComponent", SwitchControlComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3dpdGNoQ29udHJvbC5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFIVSx3Q0FBTyxHQUFkO29CQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxDQUFDO2dCQVBEO29CQUFDLFlBQUssRUFBRTs7eUVBQUE7Z0JBOUJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxRQUFRLEVBQUUsK0ZBQStGO3dCQUN6RyxNQUFNLEVBQUUsQ0FBQyxpcUJBdUJSLENBQUM7cUJBQ0wsQ0FBQzs7MENBQUE7Z0JBVUYsNkJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELDJEQVNDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9zd2l0Y2hDb250cm9sLmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN3aXRjaC1jdHJsXCIsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwic3dpdGNoIHRoZW1lLWJnLWV2XCIgW25nQ2xhc3NdPVwie2NsaWNrZWQ6IGlzQ2xpY2tlZH1cIiAoY2xpY2spPVwib25DbGljaygpXCI+PC9zcGFuPicsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICBzcGFuLnN3aXRjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogNDVweDsgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uc3dpdGNoOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMnB4OyBsZWZ0OiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5zd2l0Y2guY2xpY2tlZDo6YWZ0ZXIgeyBsZWZ0OiAyM3B4OyB9XG4gICAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbnRyb2xDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGlzQ2xpY2tlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHN0YXRlIG9mIHRoZSBzd2l0Y2ggZnJvbSBvbiB0byBvZmYgYW5kIHZpc2UgdmVyc2EuXG4gICAgICovXG4gICAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gIXRoaXMuaXNDbGlja2VkO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
