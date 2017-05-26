System.register(["angular2/core", "./directives/mdPreview.drv", "./directives/copyButton.drv", "../editor/services/EditorRef", "./services/MdPreviewRef", "../../../services/MdParser"], function(exports_1, context_1) {
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
    var core_1, mdPreview_drv_1, copyButton_drv_1, EditorRef_1, MdPreviewRef_1, MdParser_1;
    var PreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mdPreview_drv_1_1) {
                mdPreview_drv_1 = mdPreview_drv_1_1;
            },
            function (copyButton_drv_1_1) {
                copyButton_drv_1 = copyButton_drv_1_1;
            },
            function (EditorRef_1_1) {
                EditorRef_1 = EditorRef_1_1;
            },
            function (MdPreviewRef_1_1) {
                MdPreviewRef_1 = MdPreviewRef_1_1;
            },
            function (MdParser_1_1) {
                MdParser_1 = MdParser_1_1;
            }],
        execute: function() {
            PreviewComponent = (function () {
                function PreviewComponent() {
                }
                Object.defineProperty(PreviewComponent.prototype, "isOpened", {
                    get: function () {
                        return PreviewComponent.isOpened;
                    },
                    enumerable: true,
                    configurable: true
                });
                PreviewComponent.togglePreview = function () {
                    EditorRef_1.EditorRef.ref.setAttribute("contenteditable", PreviewComponent.isOpened.toString());
                    if (!PreviewComponent.isOpened) {
                        PreviewComponent.loadMdInPreviewCont();
                    }
                    PreviewComponent.isOpened = !PreviewComponent.isOpened;
                };
                PreviewComponent.loadMdInPreviewCont = function () {
                    var md;
                    md = MdParser_1.MdParser.parseHtmlToMd(EditorRef_1.EditorRef.ref.innerHTML);
                    MdPreviewRef_1.MdPreviewRef.ref.value = md;
                };
                PreviewComponent.prototype.togglePreview = function () {
                    PreviewComponent.togglePreview();
                };
                PreviewComponent.MD_PREV_ID = "#md-preview";
                PreviewComponent.isOpened = false;
                PreviewComponent = __decorate([
                    core_1.Component({
                        selector: "preview-cmp",
                        template: "\n      <section [ngClass]=\"{opened: isOpened}\" id=\"preview\">\n          <div (click)=\"togglePreview()\" class=\"slider\"></div>\n          <button copy-btn-drv id=\"copy-to-clipboard\">Copy To Clipboard</button>\n          <textarea md-preview-drv id=\"md-preview\" readonly placeholder=\"\"></textarea>\n      </section>\n    ",
                        styles: ["\n      /* Preview Container */\n      #preview {\n          position: fixed;\n          width: 980px; height: 0;\n          left: 20px; bottom: 0;\n          transition: height 0.3s ease;\n      }\n\n      #md-preview, #preview > .slider {\n          background: rgba(0, 0, 0, 0.9);\n      }\n\n      /* MD Container */\n      #md-preview {\n          font-family: Consolas, monospace;\n          white-space: pre-wrap;\n          font-size: 14px;\n          color: #FFF;\n          padding: 20px;\n          height: 100%;\n          overflow-y: scroll;\n          box-sizing: border-box;\n          border: none;\n          display: block;\n          width: 100%;\n          resize: none;\n          margin-top: 0;\n      }\n\n      /* Slide Button */\n      #preview > .slider {\n          width: 20px; height: 20px;\n          margin-top: -20px;\n          cursor: pointer;\n      }\n\n      #preview > .slider::after {\n          content: \"\";\n          position: absolute;\n          width: 0; height: 0;\n          margin: 7px 0 0 3px;\n          border-style: solid;\n          border-width: 0 6px 7px 6px;\n          border-color: transparent transparent #FFF transparent;\n          transition: opacity 0.3s ease;\n          opacity: 0.5;\n      }\n\n      #preview > .slider:hover::after {\n          opacity: 1;\n      }\n\n      /* Preview - opened */\n      #preview.opened {\n          height: 70%;\n      }\n\n      #preview.opened > .slider::after {\n          transform: rotate(180deg);\n      }\n\n      /* 'Copy To Clipboard' Button */\n      #copy-to-clipboard {\n          position: absolute;\n          background: none;\n          top: 0; right: 0;\n          margin: 10px 31px 0 0;\n          font-family: \"Open Sans\", sans-serif;\n          font-weight: 600;\n          font-size: 12px;\n          padding: 3px 5px;\n          color: #FFF;\n          border: 2px solid rgba(255, 255, 255, 0.5);\n          transition: border-color 0.3s ease;\n          cursor: pointer;\n      }\n\n      #copy-to-clipboard:hover {\n          border-color: rgba(255, 255, 255, 0.9);\n      }\n\n      #copy-to-clipboard.success {\n          border-color: #59ff59;\n      }\n\n      #copy-to-clipboard.error {\n          border-color: #ff5959;\n      }\n    "],
                        directives: [
                            mdPreview_drv_1.MdPreviewDirective,
                            copyButton_drv_1.CopyButtonDirective
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PreviewComponent);
                return PreviewComponent;
            }());
            exports_1("PreviewComponent", PreviewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL3ByZXZpZXcvcHJldmlldy5jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtSEE7Z0JBQUE7Z0JBMkNBLENBQUM7Z0JBbkNHLHNCQUFXLHNDQUFRO3lCQUFuQjt3QkFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO29CQUNyQyxDQUFDOzs7bUJBQUE7Z0JBS2EsOEJBQWEsR0FBM0I7b0JBQ0kscUJBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUdwRixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUM7b0JBQzNDLENBQUM7b0JBR0QsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2dCQUMzRCxDQUFDO2dCQUtjLG9DQUFtQixHQUFsQztvQkFDSSxJQUFJLEVBQVUsQ0FBQztvQkFFZixFQUFFLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3JELDJCQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBS00sd0NBQWEsR0FBcEI7b0JBQ0ksZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBekNhLDJCQUFVLEdBQVcsYUFBYSxDQUFDO2dCQUNuQyx5QkFBUSxHQUFZLEtBQUssQ0FBQztnQkExRzVDO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSwrVUFNVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxndUVBeUZSLENBQUM7d0JBQ0YsVUFBVSxFQUFFOzRCQUNSLGtDQUFrQjs0QkFDbEIsb0NBQW1CO3lCQUN0QjtxQkFDSixDQUFDOztvQ0FBQTtnQkE0Q0YsdUJBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELCtDQTJDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWRfZWRpdG9yL3ByZXZpZXcvcHJldmlldy5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHtNZFByZXZpZXdEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbWRQcmV2aWV3LmRydlwiO1xuaW1wb3J0IHtDb3B5QnV0dG9uRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2NvcHlCdXR0b24uZHJ2XCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge0VkaXRvclJlZn0gZnJvbSBcIi4uL2VkaXRvci9zZXJ2aWNlcy9FZGl0b3JSZWZcIjtcbmltcG9ydCB7TWRQcmV2aWV3UmVmfSBmcm9tIFwiLi9zZXJ2aWNlcy9NZFByZXZpZXdSZWZcIjtcbmltcG9ydCB7TWRQYXJzZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9NZFBhcnNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwcmV2aWV3LWNtcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8c2VjdGlvbiBbbmdDbGFzc109XCJ7b3BlbmVkOiBpc09wZW5lZH1cIiBpZD1cInByZXZpZXdcIj5cbiAgICAgICAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGVQcmV2aWV3KClcIiBjbGFzcz1cInNsaWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY29weS1idG4tZHJ2IGlkPVwiY29weS10by1jbGlwYm9hcmRcIj5Db3B5IFRvIENsaXBib2FyZDwvYnV0dG9uPlxuICAgICAgICAgIDx0ZXh0YXJlYSBtZC1wcmV2aWV3LWRydiBpZD1cIm1kLXByZXZpZXdcIiByZWFkb25seSBwbGFjZWhvbGRlcj1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAvKiBQcmV2aWV3IENvbnRhaW5lciAqL1xuICAgICAgI3ByZXZpZXcge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB3aWR0aDogOTgwcHg7IGhlaWdodDogMDtcbiAgICAgICAgICBsZWZ0OiAyMHB4OyBib3R0b206IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgI21kLXByZXZpZXcsICNwcmV2aWV3ID4gLnNsaWRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgfVxuXG4gICAgICAvKiBNRCBDb250YWluZXIgKi9cbiAgICAgICNtZC1wcmV2aWV3IHtcbiAgICAgICAgICBmb250LWZhbWlseTogQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLyogU2xpZGUgQnV0dG9uICovXG4gICAgICAjcHJldmlldyA+IC5zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAjcHJldmlldyA+IC5zbGlkZXI6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbjogN3B4IDAgMCAzcHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNnB4IDdweCA2cHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjRkZGIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cblxuICAgICAgI3ByZXZpZXcgPiAuc2xpZGVyOmhvdmVyOjphZnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgLyogUHJldmlldyAtIG9wZW5lZCAqL1xuICAgICAgI3ByZXZpZXcub3BlbmVkIHtcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIH1cblxuICAgICAgI3ByZXZpZXcub3BlbmVkID4gLnNsaWRlcjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC8qICdDb3B5IFRvIENsaXBib2FyZCcgQnV0dG9uICovXG4gICAgICAjY29weS10by1jbGlwYm9hcmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIHRvcDogMDsgcmlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDMxcHggMCAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAjY29weS10by1jbGlwYm9hcmQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgfVxuXG4gICAgICAjY29weS10by1jbGlwYm9hcmQuc3VjY2VzcyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNTlmZjU5O1xuICAgICAgfVxuXG4gICAgICAjY29weS10by1jbGlwYm9hcmQuZXJyb3Ige1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmNTk1OTtcbiAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIE1kUHJldmlld0RpcmVjdGl2ZSxcbiAgICAgICAgQ29weUJ1dHRvbkRpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBNRF9QUkVWX0lEOiBzdHJpbmcgPSBcIiNtZC1wcmV2aWV3XCI7IC8vICMgaXMgbWFuZGF0b3J5IGhlcmVcbiAgICBwdWJsaWMgc3RhdGljIGlzT3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGdldCBhY2Nlc3NvciB3cmFwcGVyIGZvciB0aGUgc3RhdGljIGlzT3BlbmVkLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXNPcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBQcmV2aWV3Q29tcG9uZW50LmlzT3BlbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIHN0YXRlIG9mIHRoZSBwcmV2aWV3IGNvbnRhaW5lciAob24vb2ZmKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgICAgIEVkaXRvclJlZi5yZWYuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFByZXZpZXdDb21wb25lbnQuaXNPcGVuZWQudG9TdHJpbmcoKSk7IC8vIGRpc2FibGVzIGVkaXRpbmcgd2hlbiBvcGVuZWRcblxuICAgICAgICAvLyByZWxvYWRzIE1EIG9ubHkgb24gb3BlbmluZ1xuICAgICAgICBpZiAoIVByZXZpZXdDb21wb25lbnQuaXNPcGVuZWQpIHtcbiAgICAgICAgICAgIFByZXZpZXdDb21wb25lbnQubG9hZE1kSW5QcmV2aWV3Q29udCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlXG4gICAgICAgIFByZXZpZXdDb21wb25lbnQuaXNPcGVuZWQgPSAhUHJldmlld0NvbXBvbmVudC5pc09wZW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZ2VuZXJhdGVkIE1EIGluIHRoZSBwcmV2aWV3IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkTWRJblByZXZpZXdDb250KCk6IHZvaWQge1xuICAgICAgICB2YXIgbWQ6IHN0cmluZztcblxuICAgICAgICBtZCA9IE1kUGFyc2VyLnBhcnNlSHRtbFRvTWQoRWRpdG9yUmVmLnJlZi5pbm5lckhUTUwpO1xuICAgICAgICBNZFByZXZpZXdSZWYucmVmLnZhbHVlID0gbWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3Igc3RhdGljIHRvZ2dsZVByZXZpZXcgbmVlZGVkIGZvciB0aGUgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZVByZXZpZXcoKTogdm9pZCB7XG4gICAgICAgIFByZXZpZXdDb21wb25lbnQudG9nZ2xlUHJldmlldygpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
