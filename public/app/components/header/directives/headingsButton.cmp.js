System.register(["angular2/core", "angular2/src/platform/dom/dom_tokens"], function(exports_1, context_1) {
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
    var core_1, dom_tokens_1;
    var HeadingsButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            }],
        execute: function() {
            HeadingsButtonComponent = (function () {
                function HeadingsButtonComponent(doc) {
                    this._doc = doc;
                    this.headings = new Array(HeadingsButtonComponent.HEAD_NUM);
                }
                HeadingsButtonComponent.prototype.insertHeading = function (num) {
                    var headingNum = ++num;
                    this._doc.execCommand("formatBlock", false, "<H" + headingNum + ">");
                };
                HeadingsButtonComponent.prototype.keepFocusOnEditor = function (event) {
                    event.preventDefault();
                };
                HeadingsButtonComponent.HEAD_NUM = 6;
                HeadingsButtonComponent = __decorate([
                    core_1.Component({
                        selector: "[headings-btn-cmp]",
                        template: "\n        <p class=\"disp\"><sup>h1</sup><sub>h6</sub></p>\n        <ul class=\"cont\">\n            <template ngFor #num=\"index\" [ngForOf]=\"headings\">\n                <li (click)=\"insertHeading(num)\" (mousedown)=\"keepFocusOnEditor($event)\" class=\"dd-close\">\n                    Heading {{ num + 1 }}\n                </li>\n            </template>\n        </ul>"
                    }),
                    __param(0, core_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object])
                ], HeadingsButtonComponent);
                return HeadingsButtonComponent;
            }());
            exports_1("HeadingsButtonComponent", HeadingsButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvaGVhZGluZ3NCdXR0b24uY21wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBU0ksaUNBQThCLEdBQUc7b0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQU1NLCtDQUFhLEdBQXBCLFVBQXFCLEdBQVc7b0JBQzVCLElBQUksVUFBVSxHQUFXLEVBQUUsR0FBRyxDQUFDO29CQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQUssVUFBVSxNQUFHLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFNTSxtREFBaUIsR0FBeEIsVUFBeUIsS0FBSztvQkFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQTdCYyxnQ0FBUSxHQUFXLENBQUMsQ0FBQztnQkFieEM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUseVhBUUE7cUJBQ2IsQ0FBQzsrQkFVZSxhQUFNLENBQUMscUJBQVEsQ0FBQzs7MkNBVi9CO2dCQWdDRiw4QkFBQztZQUFELENBL0JBLEFBK0JDLElBQUE7WUEvQkQsNkRBK0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvZGlyZWN0aXZlcy9oZWFkaW5nc0J1dHRvbi5jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3Rva2Vuc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJbaGVhZGluZ3MtYnRuLWNtcF1cIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cCBjbGFzcz1cImRpc3BcIj48c3VwPmgxPC9zdXA+PHN1Yj5oNjwvc3ViPjwvcD5cbiAgICAgICAgPHVsIGNsYXNzPVwiY29udFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIG5nRm9yICNudW09XCJpbmRleFwiIFtuZ0Zvck9mXT1cImhlYWRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJpbnNlcnRIZWFkaW5nKG51bSlcIiAobW91c2Vkb3duKT1cImtlZXBGb2N1c09uRWRpdG9yKCRldmVudClcIiBjbGFzcz1cImRkLWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIEhlYWRpbmcge3sgbnVtICsgMSB9fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3VsPmBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGluZ3NCdXR0b25Db21wb25lbnQge1xuICAgIHByaXZhdGUgc3RhdGljIEhFQURfTlVNOiBudW1iZXIgPSA2O1xuXG4gICAgcHVibGljIGhlYWRpbmdzO1xuICAgIHByaXZhdGUgX2RvYztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgSEVBRF9OVU0gc2l6ZWQgYXJyYXkgZm9yIHNpbXVsYXRlZCBpdGVyYXRpb24gaW4gdGhlIHRlbXBsYXRlIGFuZCBpbmplY3RzIERPTSBkb2N1bWVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2MpIHtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jO1xuICAgICAgICB0aGlzLmhlYWRpbmdzID0gbmV3IEFycmF5KEhlYWRpbmdzQnV0dG9uQ29tcG9uZW50LkhFQURfTlVNKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcy9pbnNlcnRzIGhlYWRpbmcgdGFnIHRvIHRoZSB0ZXh0IHNlbGVjdGlvbiBpbiB0aGUgZWRpdG9yLlxuICAgICAqIEBwYXJhbSBudW0gLSBIZWFkaW5nIG51bWJlciAxLTZcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zZXJ0SGVhZGluZyhudW06IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgaGVhZGluZ051bTogbnVtYmVyID0gKytudW07XG5cbiAgICAgICAgdGhpcy5fZG9jLmV4ZWNDb21tYW5kKFwiZm9ybWF0QmxvY2tcIiwgZmFsc2UsIGA8SCR7aGVhZGluZ051bX0+YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2VlcHMgZm9jdXMgb24gdGhlIGVkaXRvciBvbiBlbGVtZW50IG1vdXNlZG93biBldmVudC5cbiAgICAgKiBAcGFyYW0gZXZlbnQgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIGtlZXBGb2N1c09uRWRpdG9yKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
