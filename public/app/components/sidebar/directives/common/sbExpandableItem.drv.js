System.register(["angular2/core", "../../services/common/OpenedSidebarExpandable", "../../services/common/SidebarConsts", "../../../../services/SetClassNative"], function(exports_1, context_1) {
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
    var core_1, OpenedSidebarExpandable_1, SidebarConsts_1, SetClassNative_1;
    var SbExpandableItemDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (OpenedSidebarExpandable_1_1) {
                OpenedSidebarExpandable_1 = OpenedSidebarExpandable_1_1;
            },
            function (SidebarConsts_1_1) {
                SidebarConsts_1 = SidebarConsts_1_1;
            },
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            }],
        execute: function() {
            SbExpandableItemDirective = (function () {
                function SbExpandableItemDirective(elem) {
                    this._displayBtn = elem.nativeElement.querySelector("p:first-child");
                }
                SbExpandableItemDirective.prototype.ngOnInit = function () {
                    this._displayBtn.addEventListener("click", SbExpandableItemDirective.clickListener);
                };
                SbExpandableItemDirective.prototype.ngOnDestroy = function () {
                    this._displayBtn.removeEventListener("click", SbExpandableItemDirective.clickListener);
                };
                SbExpandableItemDirective.clickListener = function (event) {
                    var next = this.parentNode.childNodes[3];
                    if (OpenedSidebarExpandable_1.OpenedSidebarExpandable.content && OpenedSidebarExpandable_1.OpenedSidebarExpandable.content !== next) {
                        SetClassNative_1.SetClassNative.remove(OpenedSidebarExpandable_1.OpenedSidebarExpandable.content, SidebarConsts_1.SidebarConsts.OPENED_CLASS);
                    }
                    OpenedSidebarExpandable_1.OpenedSidebarExpandable.content = next;
                    OpenedSidebarExpandable_1.OpenedSidebarExpandable.button = this.parentNode;
                    SetClassNative_1.SetClassNative.toggle(OpenedSidebarExpandable_1.OpenedSidebarExpandable.content, SidebarConsts_1.SidebarConsts.OPENED_CLASS);
                };
                SbExpandableItemDirective = __decorate([
                    core_1.Directive({
                        selector: "[sb-expandable-drv]"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SbExpandableItemDirective);
                return SbExpandableItemDirective;
            }());
            exports_1("SbExpandableItemDirective", SbExpandableItemDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9kaXJlY3RpdmVzL2NvbW1vbi9zYkV4cGFuZGFibGVJdGVtLmRydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQU9JLG1DQUFZLElBQWdCO29CQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO2dCQXVCTSw0Q0FBUSxHQUFmO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4RixDQUFDO2dCQUtNLCtDQUFXLEdBQWxCO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQXpCYyx1Q0FBYSxHQUFHLFVBQVUsS0FBSztvQkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXpDLEVBQUUsQ0FBQyxDQUFDLGlEQUF1QixDQUFDLE9BQU8sSUFBSSxpREFBdUIsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDOUUsK0JBQWMsQ0FBQyxNQUFNLENBQUMsaURBQXVCLENBQUMsT0FBTyxFQUFFLDZCQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3ZGLENBQUM7b0JBRUQsaURBQXVCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDdkMsaURBQXVCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBRWpELCtCQUFjLENBQUMsTUFBTSxDQUFDLGlEQUF1QixDQUFDLE9BQU8sRUFBRSw2QkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RixDQUFDLENBQUM7Z0JBOUJOO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtxQkFDbEMsQ0FBQzs7NkNBQUE7Z0JBMkNGLGdDQUFDO1lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtZQTFDRCxpRUEwQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NpZGViYXIvZGlyZWN0aXZlcy9jb21tb24vc2JFeHBhbmRhYmxlSXRlbS5kcnYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQge09wZW5lZFNpZGViYXJFeHBhbmRhYmxlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbW9uL09wZW5lZFNpZGViYXJFeHBhbmRhYmxlXCI7XG5pbXBvcnQge1NpZGViYXJDb25zdHN9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tb24vU2lkZWJhckNvbnN0c1wiO1xuaW1wb3J0IHtTZXRDbGFzc05hdGl2ZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL1NldENsYXNzTmF0aXZlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzYi1leHBhbmRhYmxlLWRydl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTYkV4cGFuZGFibGVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2Rpc3BsYXlCdG46IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbmplY3RlZCBlbGVtZW50IHJlZmVyZW5jZSBhbmQgYmluZHMgbmVlZGVkIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gZWxlbVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheUJ0biA9IGVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwicDpmaXJzdC1jaGlsZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBsaXN0ZW5lciBmb3IgbWVudSB0b2dnbGluZy5cbiAgICAgKiBOb3RlOiBOZWVkcyB0byBiZSBzZXQgdGhhdCB3YXksIGJlY2F1c2UgVFMgZG9lc24ndCBhbGxvdyBzdGF0aWMgZnVuY3Rpb25zIHdpdGggdW5yZXNvbHZlZCAndGhpcycuXG4gICAgICogQHBhcmFtIGV2ZW50IC0gRXZlbnQgdGFyZ2V0XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzNdOyAvLyBkaXYgc2libGluZyAvL3RvZG9cblxuICAgICAgICBpZiAoT3BlbmVkU2lkZWJhckV4cGFuZGFibGUuY29udGVudCAmJiBPcGVuZWRTaWRlYmFyRXhwYW5kYWJsZS5jb250ZW50ICE9PSBuZXh0KSB7XG4gICAgICAgICAgICBTZXRDbGFzc05hdGl2ZS5yZW1vdmUoT3BlbmVkU2lkZWJhckV4cGFuZGFibGUuY29udGVudCwgU2lkZWJhckNvbnN0cy5PUEVORURfQ0xBU1MpO1xuICAgICAgICB9XG5cbiAgICAgICAgT3BlbmVkU2lkZWJhckV4cGFuZGFibGUuY29udGVudCA9IG5leHQ7XG4gICAgICAgIE9wZW5lZFNpZGViYXJFeHBhbmRhYmxlLmJ1dHRvbiA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBTZXRDbGFzc05hdGl2ZS50b2dnbGUoT3BlbmVkU2lkZWJhckV4cGFuZGFibGUuY29udGVudCwgU2lkZWJhckNvbnN0cy5PUEVORURfQ0xBU1MpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBjbGljayBldmVudCBvbiBkaXJlY3RpdmUgaW5pdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFNiRXhwYW5kYWJsZUl0ZW1EaXJlY3RpdmUuY2xpY2tMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgY2xpY2sgZXZlbnQgb24gZGlyZWN0aXZlIGRlc3Ryb3kuXG4gICAgICovXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXNwbGF5QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBTYkV4cGFuZGFibGVJdGVtRGlyZWN0aXZlLmNsaWNrTGlzdGVuZXIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
