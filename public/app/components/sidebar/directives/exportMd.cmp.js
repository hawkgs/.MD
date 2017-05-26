System.register(["angular2/core", "../../md_editor/editor/services/EditorRef", "../../../services/MdParser", "../../header/services/DocNameSaveManager"], function(exports_1, context_1) {
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
    var core_1, EditorRef_1, MdParser_1, DocNameSaveManager_1;
    var ExportMdComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (EditorRef_1_1) {
                EditorRef_1 = EditorRef_1_1;
            },
            function (MdParser_1_1) {
                MdParser_1 = MdParser_1_1;
            },
            function (DocNameSaveManager_1_1) {
                DocNameSaveManager_1 = DocNameSaveManager_1_1;
            }],
        execute: function() {
            ExportMdComponent = (function () {
                function ExportMdComponent() {
                    this.mdData = { fileName: "", data: "" };
                }
                ExportMdComponent.prototype.packMdForExport = function () {
                    var generatedMd = MdParser_1.MdParser.parseHtmlToMd(EditorRef_1.EditorRef.ref.innerHTML);
                    this.mdData.data = ExportMdComponent.DEF_DATA + btoa(generatedMd);
                    this.mdData.fileName = DocNameSaveManager_1.DocNameSaveManager.getDocName() + ".md";
                };
                ExportMdComponent.DEF_DATA = "data:text/plain;base64,";
                ExportMdComponent = __decorate([
                    core_1.Component({
                        selector: "[export-md-cmp]",
                        styles: ["\n      ul.sb-list {\n          list-style-type: none;\n      }\n\n      ul.sb-list > li {\n          border-top: 1px solid rgba(255, 255, 255, 0.05);\n      }\n\n      ul.sb-list a {\n          width: 100%; height: 100%;\n          color: inherit;\n          padding: 15px 30px;\n          display: block;\n          transition: background 0.3s ease;\n      }\n\n      ul.sb-list a:hover {\n          border: none;\n          background: rgba(255, 255, 255, 0.05);\n      }\n    "],
                        template: "\n        <ul class=\"sb-list\">\n            <li><a href=\"{{mdData.data}}\" download=\"{{mdData.fileName}}\" (click)=\"packMdForExport()\">MD</a></li>\n            <li><a href=\"\">PDF</a></li>\n        </ul>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExportMdComponent);
                return ExportMdComponent;
            }());
            exports_1("ExportMdComponent", ExportMdComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2V4cG9ydE1kLmNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdDQTtnQkFPSTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQzdDLENBQUM7Z0JBS00sMkNBQWUsR0FBdEI7b0JBQ0ksSUFBSSxXQUFXLEdBQVcsbUJBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRTFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFrQixDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDbkUsQ0FBQztnQkFsQmMsMEJBQVEsR0FBVyx5QkFBeUIsQ0FBQztnQkEvQmhFO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsTUFBTSxFQUFFLENBQUMsa2VBcUJSLENBQUM7d0JBQ0YsUUFBUSxFQUFFLG9OQUlBO3FCQUNiLENBQUM7O3FDQUFBO2dCQXFCRix3QkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsaURBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL2RpcmVjdGl2ZXMvZXhwb3J0TWQuY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge0VkaXRvclJlZn0gZnJvbSBcIi4uLy4uL21kX2VkaXRvci9lZGl0b3Ivc2VydmljZXMvRWRpdG9yUmVmXCI7XG5pbXBvcnQge01kUGFyc2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvTWRQYXJzZXJcIjtcbmltcG9ydCB7RG9jTmFtZVNhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vaGVhZGVyL3NlcnZpY2VzL0RvY05hbWVTYXZlTWFuYWdlclwiO1xuXG4vLyBJbnRlcmZhY2VzXG5pbXBvcnQge0lGaWxlRGF0YX0gZnJvbSBcIi4vY29udHJhY3RzL0lGaWxlRGF0YVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbZXhwb3J0LW1kLWNtcF1cIixcbiAgICBzdHlsZXM6IFtgXG4gICAgICB1bC5zYi1saXN0IHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIHVsLnNiLWxpc3QgPiBsaSB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICB9XG5cbiAgICAgIHVsLnNiLWxpc3QgYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIHVsLnNiLWxpc3QgYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHVsIGNsYXNzPVwic2ItbGlzdFwiPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ7e21kRGF0YS5kYXRhfX1cIiBkb3dubG9hZD1cInt7bWREYXRhLmZpbGVOYW1lfX1cIiAoY2xpY2spPVwicGFja01kRm9yRXhwb3J0KClcIj5NRDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5QREY8L2E+PC9saT5cbiAgICAgICAgPC91bD5gXG59KVxuZXhwb3J0IGNsYXNzIEV4cG9ydE1kQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBERUZfREFUQTogc3RyaW5nID0gXCJkYXRhOnRleHQvcGxhaW47YmFzZTY0LFwiO1xuICAgIHB1YmxpYyBtZERhdGE6IElGaWxlRGF0YTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGRlZmF1bHQgZGF0YSBvYmplY3RzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1kRGF0YSA9IHsgZmlsZU5hbWU6IFwiXCIsIGRhdGE6IFwiXCIgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb250ZW50IG9mIHRoZSBlZGl0b3IsIGdlbmVyYXRlcyBNRCwgYW5kIGxvYWRzIGl0IHRvIGFuY2hvciBzbyB0aGF0IGl0IGNhbiBiZSBkb3dubG9hZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYWNrTWRGb3JFeHBvcnQoKTogdm9pZCB7XG4gICAgICAgIHZhciBnZW5lcmF0ZWRNZDogc3RyaW5nID0gTWRQYXJzZXIucGFyc2VIdG1sVG9NZChFZGl0b3JSZWYucmVmLmlubmVySFRNTCk7XG5cbiAgICAgICAgdGhpcy5tZERhdGEuZGF0YSA9IEV4cG9ydE1kQ29tcG9uZW50LkRFRl9EQVRBICsgYnRvYShnZW5lcmF0ZWRNZCk7XG4gICAgICAgIHRoaXMubWREYXRhLmZpbGVOYW1lID0gRG9jTmFtZVNhdmVNYW5hZ2VyLmdldERvY05hbWUoKSArIFwiLm1kXCI7IC8vdG9kbyBzYXZlIG5hbWUgaGVyZVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
