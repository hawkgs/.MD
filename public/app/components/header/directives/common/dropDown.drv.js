System.register(["angular2/core", "../../services/common/OpenedDropDown", "../../services/common/DropDownConsts", "../../../../services/SetClassNative"], function(exports_1, context_1) {
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
    var core_1, OpenedDropDown_1, DropDownConsts_1, SetClassNative_1;
    var DropDownDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (OpenedDropDown_1_1) {
                OpenedDropDown_1 = OpenedDropDown_1_1;
            },
            function (DropDownConsts_1_1) {
                DropDownConsts_1 = DropDownConsts_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            }],
        execute: function() {
            DropDownDirective = (function () {
                function DropDownDirective(elem) {
                    this._nativeEl = elem.nativeElement;
                }
                DropDownDirective.prototype.ngOnInit = function () {
                    this.bindClickEvent();
                    this.bindCloseAndCleanEvent();
                };
                DropDownDirective.prototype.bindClickEvent = function () {
                    var displayBtn = this._nativeEl.querySelector(".disp"), self = this;
                    displayBtn.addEventListener("mousedown", function (ev) {
                        ev.preventDefault();
                    });
                    displayBtn.addEventListener("click", function (event) {
                        var next = this.parentNode.childNodes[3];
                        if (OpenedDropDown_1.OpenedDropDown.openedMenu && OpenedDropDown_1.OpenedDropDown.openedMenu !== next) {
                            self.closeCurrentlyOpenedMenu();
                        }
                        OpenedDropDown_1.OpenedDropDown.openedMenu = next;
                        OpenedDropDown_1.OpenedDropDown.button = this.parentNode;
                        SetClassNative_1.SetClassNative.toggle(OpenedDropDown_1.OpenedDropDown.openedMenu, DropDownConsts_1.DropDownConsts.OPENED_CLASS);
                        SetClassNative_1.SetClassNative.toggle(OpenedDropDown_1.OpenedDropDown.button, DropDownConsts_1.DropDownConsts.BTN_CLICK_CLASS);
                    });
                };
                DropDownDirective.prototype.bindCloseAndCleanEvent = function () {
                    var cont = this._nativeEl.querySelector(".cont"), input = cont.querySelector("input[type=\"text\"]"), self = this;
                    cont.addEventListener("click", function (event) {
                        var elem = event.target;
                        if (elem && elem.className.indexOf(DropDownDirective.CLOSE_EL_CLASS) !== -1) {
                            self.closeCurrentlyOpenedMenu();
                            if (input) {
                                input.value = "";
                            }
                        }
                    });
                };
                DropDownDirective.prototype.closeCurrentlyOpenedMenu = function () {
                    SetClassNative_1.SetClassNative.remove(OpenedDropDown_1.OpenedDropDown.openedMenu, DropDownConsts_1.DropDownConsts.OPENED_CLASS);
                    SetClassNative_1.SetClassNative.remove(OpenedDropDown_1.OpenedDropDown.button, DropDownConsts_1.DropDownConsts.BTN_CLICK_CLASS);
                };
                DropDownDirective.CLOSE_EL_CLASS = "dd-close";
                DropDownDirective = __decorate([
                    core_1.Directive({
                        selector: "[drop-down-drv]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], DropDownDirective);
                return DropDownDirective;
            }());
            exports_1("DropDownDirective", DropDownDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2RpcmVjdGl2ZXMvY29tbW9uL2Ryb3BEb3duLmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQVNJLDJCQUFZLElBQWdCO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLENBQUM7Z0JBS00sb0NBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNsQyxDQUFDO2dCQUtPLDBDQUFjLEdBQXRCO29CQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUNsRCxJQUFJLEdBQXNCLElBQUksQ0FBQztvQkFHbkMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUU7d0JBQ2pELEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUs7d0JBQ2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUV6QyxFQUFFLENBQUMsQ0FBQywrQkFBYyxDQUFDLFVBQVUsSUFBSSwrQkFBYyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNsRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzt3QkFDcEMsQ0FBQzt3QkFFRCwrQkFBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ2pDLCtCQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBRXhDLCtCQUFjLENBQUMsTUFBTSxDQUFDLCtCQUFjLENBQUMsVUFBVSxFQUFFLCtCQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzlFLCtCQUFjLENBQUMsTUFBTSxDQUFDLCtCQUFjLENBQUMsTUFBTSxFQUFFLCtCQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ2pGLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBTU8sa0RBQXNCLEdBQTlCO29CQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUM1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUNsRCxJQUFJLEdBQXNCLElBQUksQ0FBQztvQkFFbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUs7d0JBQzFDLElBQUksSUFBSSxHQUFRLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBRTdCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFFLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDOzRCQUdoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNSLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFLTyxvREFBd0IsR0FBaEM7b0JBQ0ksK0JBQWMsQ0FBQyxNQUFNLENBQUMsK0JBQWMsQ0FBQyxVQUFVLEVBQUUsK0JBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDOUUsK0JBQWMsQ0FBQyxNQUFNLENBQUMsK0JBQWMsQ0FBQyxNQUFNLEVBQUUsK0JBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDakYsQ0FBQztnQkEzRWMsZ0NBQWMsR0FBVyxVQUFVLENBQUM7Z0JBTHZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtxQkFDOUIsQ0FBQzs7cUNBQUE7Z0JBK0VGLHdCQUFDO1lBQUQsQ0E5RUEsQUE4RUMsSUFBQTtZQTlFRCxpREE4RUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL2NvbW1vbi9kcm9wRG93bi5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHtPcGVuZWREcm9wRG93bn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1vbi9PcGVuZWREcm9wRG93blwiO1xuaW1wb3J0IHtEcm9wRG93bkNvbnN0c30gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1vbi9Ecm9wRG93bkNvbnN0c1wiO1xuaW1wb3J0IHtTZXRDbGFzc05hdGl2ZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL1NldENsYXNzTmF0aXZlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltkcm9wLWRvd24tZHJ2XVwiXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBUaGUgQ0xPU0VfRUxfQ0xBU1MgcmVwcmVzZW50cyBhbGwgZWxlbWVudHMgaW4gdGhlIG1lbnUgd2hpY2ggY2FuIGNsb3NlIGl0LlxuICAgIHByaXZhdGUgc3RhdGljIENMT1NFX0VMX0NMQVNTOiBzdHJpbmcgPSBcImRkLWNsb3NlXCI7XG4gICAgcHJpdmF0ZSBfbmF0aXZlRWw7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGluamVjdGVkIGVsZW1lbnQgcmVmZXJlbmNlIGFuZCBiaW5kcyBuZWVkZWQgZXZlbnRzLlxuICAgICAqIEBwYXJhbSBlbGVtXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLl9uYXRpdmVFbCA9IGVsZW0ubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGFsbCBuZWVkZWQgZXZlbnRzIGZvciB0aGUgZHJvcCBkb3duIGFmdGVyIGluaXRpYWxpemF0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iaW5kQ2xpY2tFdmVudCgpO1xuICAgICAgICB0aGlzLmJpbmRDbG9zZUFuZENsZWFuRXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBjbGljayBldmVudCB0byB0aGUgZHJvcCBkb3duIC0gb3Blbi9jbG9zZSBtZWNoYW5pc20uXG4gICAgICovXG4gICAgcHJpdmF0ZSBiaW5kQ2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgdmFyIGRpc3BsYXlCdG4gPSB0aGlzLl9uYXRpdmVFbC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BcIiksXG4gICAgICAgICAgICBzZWxmOiBEcm9wRG93bkRpcmVjdGl2ZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gTmVlZGVkIGluIG9yZGVyIHRvIGtlZXAgZm9jdXMgb3ZlciAnY29udGVudGVkaXRhYmxlJyBjb250YWluZXIsIHNpbmNlIC5mb2N1cygpIGlzIG5vdCBhIHJlbGV2YW50IHNvbHV0aW9uLlxuICAgICAgICBkaXNwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXNwbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNbM107IC8vIC5jb250IHNpYmxpbmdcblxuICAgICAgICAgICAgaWYgKE9wZW5lZERyb3BEb3duLm9wZW5lZE1lbnUgJiYgT3BlbmVkRHJvcERvd24ub3BlbmVkTWVudSAhPT0gbmV4dCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2VDdXJyZW50bHlPcGVuZWRNZW51KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9wZW5lZERyb3BEb3duLm9wZW5lZE1lbnUgPSBuZXh0O1xuICAgICAgICAgICAgT3BlbmVkRHJvcERvd24uYnV0dG9uID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICBTZXRDbGFzc05hdGl2ZS50b2dnbGUoT3BlbmVkRHJvcERvd24ub3BlbmVkTWVudSwgRHJvcERvd25Db25zdHMuT1BFTkVEX0NMQVNTKTtcbiAgICAgICAgICAgIFNldENsYXNzTmF0aXZlLnRvZ2dsZShPcGVuZWREcm9wRG93bi5idXR0b24sIERyb3BEb3duQ29uc3RzLkJUTl9DTElDS19DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGNsb3NlIGFuZCBjbGVhbiBldmVudCB0byB0aGUgZHJvcCBkb3duLiBDbG9zZSAtIGF0dGFjaGVkIHRvIENMT1NFX0VMX0NMQVNTIGVsZW1lbnRzO1xuICAgICAqIENsZWFuIC0gY2xlYW5zIHRoZSBmaXJzdCBmb3VuZCBpbnB1dFt0eXBlPVwidGV4dFwiXS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJpbmRDbG9zZUFuZENsZWFuRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHZhciBjb250ID0gdGhpcy5fbmF0aXZlRWwucXVlcnlTZWxlY3RvcihcIi5jb250XCIpLFxuICAgICAgICAgICAgaW5wdXQgPSBjb250LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl1cIiksIC8vIENvdmVycyBvbmx5IG9uZSBpbnB1dCBwZXIgbWVudVxuICAgICAgICAgICAgc2VsZjogRHJvcERvd25EaXJlY3RpdmUgPSB0aGlzO1xuXG4gICAgICAgIGNvbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGVsZW06IGFueSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgaWYgKGVsZW0gJiYgZWxlbS5jbGFzc05hbWUuaW5kZXhPZihEcm9wRG93bkRpcmVjdGl2ZS5DTE9TRV9FTF9DTEFTUykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZUN1cnJlbnRseU9wZW5lZE1lbnUoKTtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBtb25pdG9yIHRoaXMgJ2Nsb3NlJyBhcyBpdCBtYXkgY2F1c2UgaXNzdWVzIC0gT3BlbkRyb3BEb3duIGNvbnRhaW5lciBpc24ndCBlbXB0aWVkLlxuXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBjdXJyZW50bHkgb3BlbmVkIG1lbnUgYnkgbW9kaWZ5aW5nIE9wZW5lZERyb3BEb3duIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNsb3NlQ3VycmVudGx5T3BlbmVkTWVudSgpOiB2b2lkIHtcbiAgICAgICAgU2V0Q2xhc3NOYXRpdmUucmVtb3ZlKE9wZW5lZERyb3BEb3duLm9wZW5lZE1lbnUsIERyb3BEb3duQ29uc3RzLk9QRU5FRF9DTEFTUyk7XG4gICAgICAgIFNldENsYXNzTmF0aXZlLnJlbW92ZShPcGVuZWREcm9wRG93bi5idXR0b24sIERyb3BEb3duQ29uc3RzLkJUTl9DTElDS19DTEFTUyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
