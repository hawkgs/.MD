System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens", "../preview/preview.cmp", "./services/EditorSelection", "./services/EditorRef", "./services/DocSaveManager", "../../../wrappers/LocalStorage"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, dom_tokens_1, preview_cmp_1, EditorSelection_1, EditorRef_1, DocSaveManager_1, LocalStorage_1;
    var EditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (preview_cmp_1_1) {
                preview_cmp_1 = preview_cmp_1_1;
            },
            function (EditorSelection_1_1) {
                EditorSelection_1 = EditorSelection_1_1;
            },
            function (EditorRef_1_1) {
                EditorRef_1 = EditorRef_1_1;
            },
            function (DocSaveManager_1_1) {
                DocSaveManager_1 = DocSaveManager_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            }],
        execute: function() {
            EditorComponent = (function () {
                function EditorComponent(doc, elem, saveManager) {
                    this._doc = doc;
                    this._nativeEl = elem.nativeElement;
                    this._saveManager = saveManager;
                }
                EditorComponent.prototype.ngOnInit = function () {
                    EditorRef_1.EditorRef.ref = this._nativeEl.querySelector("#editor");
                    this._saveManager.initializeEvents();
                    this.loadCurrentDocument();
                };
                EditorComponent.prototype.containSelection = function () {
                    var winSelection = window.getSelection();
                    EditorSelection_1.EditorSelection.sel = winSelection.getRangeAt(0);
                    EditorSelection_1.EditorSelection.getTextFromSelection(winSelection);
                };
                EditorComponent.prototype.hidePreview = function () {
                    if (preview_cmp_1.PreviewComponent.isOpened) {
                        preview_cmp_1.PreviewComponent.togglePreview();
                    }
                };
                EditorComponent.prototype.onKeyPressSave = function () {
                    this._saveManager.saveWatcher();
                };
                EditorComponent.prototype.onPaste = function (event) {
                    this.removeTextFormatting(event);
                    this._saveManager.uiFriendlySave();
                };
                EditorComponent.prototype.loadCurrentDocument = function () {
                    var storageData = LocalStorage_1.LocalStorage.getItem(DocSaveManager_1.DocSaveManager.LS_DOC_KEY);
                    if (storageData) {
                        EditorRef_1.EditorRef.ref.innerHTML = JSON.parse(storageData).html;
                    }
                };
                EditorComponent.prototype.removeTextFormatting = function (event) {
                    var ev = event.originalEvent || event;
                    if (ev) {
                        event.preventDefault();
                        var text = ev.clipboardData.getData("text/plain");
                        this._doc.execCommand("insertText", false, text);
                    }
                };
                EditorComponent = __decorate([
                    core_1.Component({
                        selector: "[editor-cmp]",
                        template: "\n      <div id=\"editor\"\n           contenteditable=\"true\"\n           (blur)=\"containSelection()\"\n           (click)=\"hidePreview()\"\n           (keypress)=\"onKeyPressSave()\"\n           (paste)=\"onPaste($event)\">\n      </div>\n    ",
                        styles: ["\n      /* Editor Container */\n      #editor {\n          background: #EEE;\n          width: 100%; height: 100%;\n          font-family: Arial, Helvetica, sans-serif;\n          font-size: 16px;\n          line-height: 1.6;\n          box-sizing: border-box;\n          padding: 45px;\n          overflow-y: scroll;\n          word-wrap: break-word;\n      }\n\n      /* COMPONENTS */\n\n      #editor h1 {\n          padding-bottom: 0.3em;\n          font-size: 2.25em;\n          line-height: 1.2;\n          border-bottom: 1px solid #CCC;\n      }\n\n      #editor h2 {\n          padding-bottom: 0.3em;\n          font-size: 1.75em;\n          line-height: 1.225;\n          border-bottom: 1px solid #CCC;\n      }\n\n      #editor h3 {\n          font-size: 1.5em;\n          line-height: 1.43;\n      }\n\n      #editor h4 {\n          font-size: 1.25em;\n      }\n\n      #editor h5 {\n          font-size: 1em;\n      }\n\n      #editor h6 {\n          font-size: 1em;\n          color: #777;\n      }\n\n      #editor hr {\n          background: #CCC;\n          margin: 0.65em 0;\n      }\n\n      #editor blockquote {\n          padding: 0 15px;\n          color: #777;\n          border-left: 4px solid #BBB;\n          margin-left: 0;\n          margin-right: 0;\n      }\n\n      #editor a {\n          color: #4078C0;\n      }\n\n      #editor a:hover {\n          text-decoration: underline;\n          border: none;\n      }\n\n      #editor table {\n          border-spacing: 0;\n          border-collapse: collapse;\n          margin: 0.5em 0 1em 0;\n      }\n\n      #editor table th, #editor table td {\n          border: 1px solid #BBB;\n          padding: 6px 13px;\n      }\n\n      #editor pre, #editor code {\n          background-color: #DDD;\n          font-family: Consolas, monospace;\n          font-size: 85%;\n          border-radius: 3px;\n      }\n\n      #editor pre {\n          padding: 16px;\n          line-height: 1.45;\n          white-space: pre-wrap;\n          white-space: -moz-pre-wrap;\n          white-space: -o-pre-wrap;\n          word-wrap: break-word;\n      }\n\n      #editor code {\n          padding: 0.2em 0.4em;\n      }\n\n      #editor ul, #editor ol {\n          padding: 0.5em 0 0.5em 2em;\n      }\n    "],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object, core_1.ElementRef, DocSaveManager_1.DocSaveManager])
                ], EditorComponent);
                return EditorComponent;
            }());
            exports_1("EditorComponent", EditorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9lZGl0b3IuY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUlBO2dCQVdJLHlCQUE4QixHQUFHLEVBQUUsSUFBZ0IsRUFBRSxXQUEyQjtvQkFDNUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7Z0JBQ3BDLENBQUM7Z0JBS00sa0NBQVEsR0FBZjtvQkFDSSxxQkFBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNyQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFLTSwwQ0FBZ0IsR0FBdkI7b0JBQ0ksSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUV6QyxpQ0FBZSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxpQ0FBZSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUtNLHFDQUFXLEdBQWxCO29CQUNJLEVBQUUsQ0FBQyxDQUFDLDhCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLDhCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQyxDQUFDO2dCQUNMLENBQUM7Z0JBS00sd0NBQWMsR0FBckI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQztnQkFLTSxpQ0FBTyxHQUFkLFVBQWUsS0FBSztvQkFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQUtPLDZDQUFtQixHQUEzQjtvQkFDSSxJQUFJLFdBQVcsR0FBRywyQkFBWSxDQUFDLE9BQU8sQ0FBQywrQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUVsRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNkLHFCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0QsQ0FBQztnQkFDTCxDQUFDO2dCQU1PLDhDQUFvQixHQUE1QixVQUE2QixLQUFLO29CQUM5QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztvQkFFdEMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDTCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRXZCLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNyRCxDQUFDO2dCQUNMLENBQUM7Z0JBM01MO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSwwUEFRVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQywrdEVBd0dSLENBQUM7d0JBQ0YsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7cUJBQ3hDLENBQUM7K0JBWWUsYUFBTSxDQUFDLHFCQUFRLENBQUM7O21DQVovQjtnQkF1RkYsc0JBQUM7WUFBRCxDQXRGQSxBQXNGQyxJQUFBO1lBdEZELDZDQXNGQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9lZGl0b3IuY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHtQcmV2aWV3Q29tcG9uZW50fSBmcm9tIFwiLi4vcHJldmlldy9wcmV2aWV3LmNtcFwiO1xuXG4vLyBJbnRlcmZhY2VzXG5pbXBvcnQge0lEb2NTYXZlTWFuYWdlcn0gZnJvbSBcIi4vc2VydmljZXMvY29udHJhY3RzL0lEb2NTYXZlTWFuYWdlclwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtFZGl0b3JTZWxlY3Rpb259IGZyb20gXCIuL3NlcnZpY2VzL0VkaXRvclNlbGVjdGlvblwiO1xuaW1wb3J0IHtFZGl0b3JSZWZ9IGZyb20gXCIuL3NlcnZpY2VzL0VkaXRvclJlZlwiO1xuaW1wb3J0IHtEb2NTYXZlTWFuYWdlcn0gZnJvbSBcIi4vc2VydmljZXMvRG9jU2F2ZU1hbmFnZXJcIjtcblxuLy8gV3JhcHBlcnNcbmltcG9ydCB7TG9jYWxTdG9yYWdlfSBmcm9tIFwiLi4vLi4vLi4vd3JhcHBlcnMvTG9jYWxTdG9yYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIltlZGl0b3ItY21wXVwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGlkPVwiZWRpdG9yXCJcbiAgICAgICAgICAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgIChibHVyKT1cImNvbnRhaW5TZWxlY3Rpb24oKVwiXG4gICAgICAgICAgIChjbGljayk9XCJoaWRlUHJldmlldygpXCJcbiAgICAgICAgICAgKGtleXByZXNzKT1cIm9uS2V5UHJlc3NTYXZlKClcIlxuICAgICAgICAgICAocGFzdGUpPVwib25QYXN0ZSgkZXZlbnQpXCI+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgIC8qIEVkaXRvciBDb250YWluZXIgKi9cbiAgICAgICNlZGl0b3Ige1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNFRUU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cblxuICAgICAgLyogQ09NUE9ORU5UUyAqL1xuXG4gICAgICAjZWRpdG9yIGgxIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4zZW07XG4gICAgICAgICAgZm9udC1zaXplOiAyLjI1ZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciBoMiB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyNTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40MztcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICB9XG5cbiAgICAgICNlZGl0b3IgaDUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIGg2IHtcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciBociB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0NDQztcbiAgICAgICAgICBtYXJnaW46IDAuNjVlbSAwO1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIGJsb2NrcXVvdGUge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNCQkI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIGEge1xuICAgICAgICAgIGNvbG9yOiAjNDA3OEMwO1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIGE6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciB0YWJsZSB7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAgMWVtIDA7XG4gICAgICB9XG5cbiAgICAgICNlZGl0b3IgdGFibGUgdGgsICNlZGl0b3IgdGFibGUgdGQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkI7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICB9XG5cbiAgICAgICNlZGl0b3IgcHJlLCAjZWRpdG9yIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiA4NSU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuXG4gICAgICAjZWRpdG9yIHByZSB7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciBjb2RlIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcbiAgICAgIH1cblxuICAgICAgI2VkaXRvciB1bCwgI2VkaXRvciBvbCB7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAyZW07XG4gICAgICB9XG4gICAgYF0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX3NhdmVNYW5hZ2VyOiBJRG9jU2F2ZU1hbmFnZXI7XG4gICAgcHJpdmF0ZSBfbmF0aXZlRWw6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX2RvYztcblxuICAgIC8qKlxuICAgICAqIFNldHMgaW5qZWN0ZWQgZWxlbWVudCByZWZlcmVuY2UsIGxvYWRzIHNhdmUgbWFuYWdlciwgZ2V0cyBkb2N1bWVudC5cbiAgICAgKiBAcGFyYW0gZG9jXG4gICAgICogQHBhcmFtIGVsZW1cbiAgICAgKiBAcGFyYW0gc2F2ZU1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2MsIGVsZW06IEVsZW1lbnRSZWYsIHNhdmVNYW5hZ2VyOiBEb2NTYXZlTWFuYWdlcikge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgICAgIHRoaXMuX25hdGl2ZUVsID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlciA9IHNhdmVNYW5hZ2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgbmF0aXZlIEVsZW1lbnRSZWYsIHN0YXJ0cyBzYXZlciBwcm9jZXNzZXMsIGxvYWRzIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBFZGl0b3JSZWYucmVmID0gdGhpcy5fbmF0aXZlRWwucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JcIik7XG5cbiAgICAgICAgdGhpcy5fc2F2ZU1hbmFnZXIuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmxvYWRDdXJyZW50RG9jdW1lbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBvbiBlZGl0b3IgYmx1cnJpbmcgYW5kIHNhdmVzIHRoZSBsYXN0IHNlbGVjdGlvbiBpbiBhIGNvbnRhaW5lciAoRWRpdG9yU2VsZWN0aW9uKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29udGFpblNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdmFyIHdpblNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgICBFZGl0b3JTZWxlY3Rpb24uc2VsID0gd2luU2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICAgIEVkaXRvclNlbGVjdGlvbi5nZXRUZXh0RnJvbVNlbGVjdGlvbih3aW5TZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIG9uIGVkaXRvciBjbGljayB3aGVuZXZlciB0aGUgcHJldmlldyBpcyBvcGVuZWQgYW5kIGhpZGVzIGl0IChwcmV2aWV3KS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZVByZXZpZXcoKTogdm9pZCB7XG4gICAgICAgIGlmIChQcmV2aWV3Q29tcG9uZW50LmlzT3BlbmVkKSB7XG4gICAgICAgICAgICBQcmV2aWV3Q29tcG9uZW50LnRvZ2dsZVByZXZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBhdXRvIHNhdmVyIHdhdGNoZXIgb24gZWFjaCBrZXkgcHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIG9uS2V5UHJlc3NTYXZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zYXZlTWFuYWdlci5zYXZlV2F0Y2hlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHRleHQgZm9ybWF0dGluZyByZXNldCBhbmQgVUktZnJpZW5kbHkgc2F2ZSBvbiBlYWNoIHBhc3RpbmcgKEN0cmwrViBvciAnUGFzdGUnIGZyb20gY29udGV4dCBtZW51KS5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25QYXN0ZShldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlbW92ZVRleHRGb3JtYXR0aW5nKGV2ZW50KTtcbiAgICAgICAgdGhpcy5fc2F2ZU1hbmFnZXIudWlGcmllbmRseVNhdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzbHkgd29ya2VkIGRvY3VtZW50IGluIHRoZSBlZGl0b3IgZnJvbSB0aGUgbG9jYWxTdG9yYWdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgbG9hZEN1cnJlbnREb2N1bWVudCgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHN0b3JhZ2VEYXRhID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oRG9jU2F2ZU1hbmFnZXIuTFNfRE9DX0tFWSk7XG5cbiAgICAgICAgaWYgKHN0b3JhZ2VEYXRhKSB7XG4gICAgICAgICAgICBFZGl0b3JSZWYucmVmLmlubmVySFRNTCA9IEpTT04ucGFyc2Uoc3RvcmFnZURhdGEpLmh0bWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRleHQgZm9ybWF0dGluZyBvZiB0aGUgdGV4dCBjb250YWluZWQgaW4gdGhlIGNsaXBib2FyZCAoVXNlZCBvbiBwYXN0ZSkuXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSByZW1vdmVUZXh0Rm9ybWF0dGluZyhldmVudCk6IHZvaWQge1xuICAgICAgICB2YXIgZXYgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuXG4gICAgICAgIGlmIChldikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IHRleHQ6IHN0cmluZyA9IGV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XG4gICAgICAgICAgICB0aGlzLl9kb2MuZXhlY0NvbW1hbmQoXCJpbnNlcnRUZXh0XCIsIGZhbHNlLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
