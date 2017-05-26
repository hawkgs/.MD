System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens", "../services/TableService", "../../../services/SetClassNative"], function(exports_1, context_1) {
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
    var core_1, dom_tokens_1, TableService_1, SetClassNative_1;
    var TableButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (TableService_1_1) {
                TableService_1 = TableService_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            }],
        execute: function() {
            TableButtonComponent = (function () {
                function TableButtonComponent(doc, elem) {
                    this._doc = doc;
                    this._elem = elem;
                }
                TableButtonComponent.prototype.ngOnInit = function () {
                    this._cellCont = this._elem.nativeElement.querySelector(".item-cont");
                    this.buildTableCellSelector();
                    this.bindCellsClickEvent();
                };
                TableButtonComponent.prototype.buildTableCellSelector = function () {
                    var cellContainer = this._doc.createDocumentFragment(), pSize = TableButtonComponent.TABLE_SIZE * TableButtonComponent.TABLE_SIZE, col = 1, row = 1, cell, i;
                    this._cells = [];
                    for (i = 1; i <= pSize; i += 1) {
                        cell = this._doc.createElement("div");
                        SetClassNative_1.SetClassNative.add(cell, TableButtonComponent.CELL_CLASSES);
                        cell.dataset.col = col;
                        cell.dataset.row = row;
                        this._cells.push(cell);
                        cellContainer.appendChild(cell);
                        col += 1;
                        if (i % TableButtonComponent.TABLE_SIZE === 0) {
                            row += 1;
                            col = 1;
                        }
                    }
                    this._cellCont.appendChild(cellContainer);
                    this.bindHoverEventsForCells();
                };
                TableButtonComponent.prototype.bindHoverEventsForCells = function () {
                    var self = this;
                    this._cells.forEach(function (cell) {
                        cell.addEventListener("mouseenter", function () {
                            self.cellHighlighter(this);
                        });
                        cell.addEventListener("mouseleave", function () {
                            self.cellHighlighter(this);
                        });
                    });
                };
                TableButtonComponent.prototype.bindCellsClickEvent = function () {
                    this._cellCont.addEventListener("mousedown", function (event) {
                        event.preventDefault();
                    });
                    this._cellCont.addEventListener("click", function (event) {
                        var elem = event.target, tableStr;
                        if (elem && elem.className.indexOf("cell") !== -1) {
                            tableStr = TableService_1.TableService.GenerateTable(elem.dataset.row, elem.dataset.col);
                            this._doc.execCommand("insertHTML", false, tableStr);
                        }
                    });
                };
                TableButtonComponent.prototype.cellHighlighter = function (elem) {
                    var row = elem.dataset.row, col = elem.dataset.col, i, j;
                    for (i = 1; i <= row; i += 1) {
                        for (j = 1; j <= col; j += 1) {
                            this._cells.forEach(function (cell) {
                                if (parseInt(cell.dataset.row) === i && parseInt(cell.dataset.col) === j) {
                                    SetClassNative_1.SetClassNative.toggle(cell, TableButtonComponent.HOV_CELL_CLASS);
                                }
                            });
                        }
                    }
                };
                TableButtonComponent.TABLE_SIZE = 5;
                TableButtonComponent.HOV_CELL_CLASS = "hovered";
                TableButtonComponent.CELL_CLASSES = "cell theme-bg-ev dd-close";
                TableButtonComponent = __decorate([
                    core_1.Component({
                        selector: "[table-btn-cmp]",
                        template: "\n        <div class=\"disp\"></div>\n        <div class=\"cont\">\n            <div class=\"item-cont\"></div>\n        </div>"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object, core_1.ElementRef])
                ], TableButtonComponent);
                return TableButtonComponent;
            }());
            exports_1("TableButtonComponent", TableButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvdGFibGVCdXR0b24uY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBZUksOEJBQThCLEdBQUcsRUFBRSxJQUFnQjtvQkFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUtNLHVDQUFRLEdBQWY7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXRFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFLTyxxREFBc0IsR0FBOUI7b0JBQ0ksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUNsRCxLQUFLLEdBQVcsb0JBQW9CLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLFVBQVUsRUFDakYsR0FBRyxHQUFXLENBQUMsRUFDZixHQUFHLEdBQVcsQ0FBQyxFQUNmLElBQUksRUFDSixDQUFTLENBQUM7b0JBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBRWpCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdEMsK0JBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdB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QUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN2RSwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7Z0NBQ3JFLENBQUM7NEJBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBdEhjLCtCQUFVLEdBQVcsQ0FBQyxDQUFDO2dCQUN2QixtQ0FBYyxHQUFXLFNBQVMsQ0FBQztnQkFDbkMsaUNBQVksR0FBVywyQkFBMkIsQ0FBQztnQkFYdEU7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsaUlBSUM7cUJBQ2QsQ0FBQzsrQkFnQmUsYUFBTSxDQUFDLHFCQUFRLENBQUM7O3dDQWhCL0I7Z0JBeUhGLDJCQUFDO1lBQUQsQ0F4SEEsQUF3SEMsSUFBQTtZQXhIRCx1REF3SEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL3RhYmxlQnV0dG9uLmNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIEVsZW1lbnRSZWYsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV90b2tlbnNcIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvVGFibGVTZXJ2aWNlXCI7XG5pbXBvcnQge1NldENsYXNzTmF0aXZlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvU2V0Q2xhc3NOYXRpdmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiW3RhYmxlLWJ0bi1jbXBdXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgVEFCTEVfU0laRTogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIHN0YXRpYyBIT1ZfQ0VMTF9DTEFTUzogc3RyaW5nID0gXCJob3ZlcmVkXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgQ0VMTF9DTEFTU0VTOiBzdHJpbmcgPSBcImNlbGwgdGhlbWUtYmctZXYgZGQtY2xvc2VcIjtcblxuICAgIHByaXZhdGUgX2VsZW06IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfY2VsbENvbnQ7XG4gICAgcHJpdmF0ZSBfY2VsbHM7XG4gICAgcHJpdmF0ZSBfZG9jO1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbmplY3RlZCBlbGVtZW50IHJlZmVyZW5jZSBhbmQgRE9NIGRvY3VtZW50LlxuICAgICAqIEBwYXJhbSBkb2NcbiAgICAgKiBAcGFyYW0gZWxlbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvYywgZWxlbTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9kb2MgPSBkb2M7XG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgY2VsbCBjb250YWluZXIsIGJ1aWxkcyB0aGUgdGFibGUgc2VsZWN0b3IgYW5kIHNldHMgY29ycmVzcG9uZGluZyBldmVudHMuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jZWxsQ29udCA9IHRoaXMuX2VsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY29udFwiKTtcblxuICAgICAgICB0aGlzLmJ1aWxkVGFibGVDZWxsU2VsZWN0b3IoKTtcbiAgICAgICAgdGhpcy5iaW5kQ2VsbHNDbGlja0V2ZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIHRhYmxlIGNlbGwgc2VsZWN0b3IgKGdlbmVyYXRvcikgd2lkZ2V0LlxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRUYWJsZUNlbGxTZWxlY3RvcigpOiB2b2lkIHtcbiAgICAgICAgdmFyIGNlbGxDb250YWluZXIgPSB0aGlzLl9kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgcFNpemU6IG51bWJlciA9IFRhYmxlQnV0dG9uQ29tcG9uZW50LlRBQkxFX1NJWkUgKiBUYWJsZUJ1dHRvbkNvbXBvbmVudC5UQUJMRV9TSVpFLFxuICAgICAgICAgICAgY29sOiBudW1iZXIgPSAxLFxuICAgICAgICAgICAgcm93OiBudW1iZXIgPSAxLFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIGk6IG51bWJlcjtcblxuICAgICAgICB0aGlzLl9jZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcFNpemU7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2VsbCA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgU2V0Q2xhc3NOYXRpdmUuYWRkKGNlbGwsIFRhYmxlQnV0dG9uQ29tcG9uZW50LkNFTExfQ0xBU1NFUyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIHRoaXMuX2NlbGxzLnB1c2goY2VsbCk7XG5cbiAgICAgICAgICAgIGNlbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cbiAgICAgICAgICAgIGNvbCArPSAxO1xuICAgICAgICAgICAgaWYgKGkgJSBUYWJsZUJ1dHRvbkNvbXBvbmVudC5UQUJMRV9TSVpFID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcm93ICs9IDE7XG4gICAgICAgICAgICAgICAgY29sID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NlbGxDb250LmFwcGVuZENoaWxkKGNlbGxDb250YWluZXIpO1xuICAgICAgICB0aGlzLmJpbmRIb3ZlckV2ZW50c0ZvckNlbGxzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgaG92ZXIgZXZlbnQgdG8gdGhlIGNlbGxzIChiYWNrZ3JvdW5kIGNoYW5naW5nKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJpbmRIb3ZlckV2ZW50c0ZvckNlbGxzKCk6IHZvaWQge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbDogYW55KSB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNlbGxIaWdobGlnaHRlcih0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNlbGxIaWdobGlnaHRlcih0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBjbGlja2VkIGNlbGwgcm93IGFuZCBjb2x1bW4gdG8gdGhlIC5jZWxsSGlnaGxpZ2h0ZXIoKS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJpbmRDZWxsc0NsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIC8vIEZvciBrZWVwaW5nIGZvY3VzIG9uIGVkaXRvclxuICAgICAgICB0aGlzLl9jZWxsQ29udC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fY2VsbENvbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0YWJsZVN0cjogc3RyaW5nO1xuXG4gICAgICAgICAgICBpZiAoZWxlbSAmJiBlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwiY2VsbFwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YWJsZVN0ciA9IFRhYmxlU2VydmljZS5HZW5lcmF0ZVRhYmxlKGVsZW0uZGF0YXNldC5yb3csIGVsZW0uZGF0YXNldC5jb2wpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jLmV4ZWNDb21tYW5kKFwiaW5zZXJ0SFRNTFwiLCBmYWxzZSwgdGFibGVTdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWdobGlnaHRzIHRoZSBjb3JyZXNwb25kaW5nIGNlbGxzICh0b3AvbGVmdCkgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCByb290IGNlbGwuXG4gICAgICogQHBhcmFtIGVsZW0gLSBSb290IGNlbGxcbiAgICAgKi9cbiAgICBwcml2YXRlIGNlbGxIaWdobGlnaHRlcihlbGVtKTogdm9pZCB7XG4gICAgICAgIHZhciByb3cgPSBlbGVtLmRhdGFzZXQucm93LFxuICAgICAgICAgICAgY29sID0gZWxlbS5kYXRhc2V0LmNvbCxcbiAgICAgICAgICAgIGksIGo7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByb3c7IGkgKz0gMSkge1xuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8PSBjb2w7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGw6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IGkgJiYgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCkgPT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldENsYXNzTmF0aXZlLnRvZ2dsZShjZWxsLCBUYWJsZUJ1dHRvbkNvbXBvbmVudC5IT1ZfQ0VMTF9DTEFTUyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
