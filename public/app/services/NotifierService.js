System.register(["./SetClassNative"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SetClassNative_1;
    var NotifierService;
    return {
        setters:[
            function (SetClassNative_1_1) {
                SetClassNative_1 = SetClassNative_1_1;
            }],
        execute: function() {
            NotifierService = (function () {
                function NotifierService() {
                }
                Object.defineProperty(NotifierService.prototype, "elem", {
                    set: function (value) {
                        this._nativeElem = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NotifierService.prototype, "message", {
                    get: function () {
                        return this._message;
                    },
                    enumerable: true,
                    configurable: true
                });
                NotifierService.prototype.show = function (type, message, duration) {
                    var _this = this;
                    duration = duration || NotifierService.ACTIVE_DURATION;
                    this._message = message;
                    this.applyNotifierType(type);
                    SetClassNative_1.SetClassNative.add(this._nativeElem, NotifierService.ACTIVE_CLASS);
                    setTimeout(function () {
                        SetClassNative_1.SetClassNative.remove(_this._nativeElem, NotifierService.ACTIVE_CLASS);
                    }, duration);
                };
                NotifierService.prototype.applyNotifierType = function (type) {
                    var _this = this;
                    var current = NotifierService.TYPE_CLASSES[type];
                    if (this._nativeElem.className.indexOf(current) !== -1) {
                        return;
                    }
                    else {
                        NotifierService.TYPE_CLASSES.forEach(function (className) {
                            if (className !== current && _this._nativeElem.className.indexOf(className) !== -1) {
                                SetClassNative_1.SetClassNative.remove(_this._nativeElem, className);
                            }
                        });
                        SetClassNative_1.SetClassNative.add(this._nativeElem, current);
                    }
                };
                NotifierService.ACTIVE_CLASS = "active";
                NotifierService.ACTIVE_DURATION = 3000;
                NotifierService.TYPE_CLASSES = ["error", "success", "notice"];
                return NotifierService;
            }());
            exports_1("NotifierService", NotifierService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL05vdGlmaWVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQVNBO2dCQUFBO2dCQTZEQSxDQUFDO2dCQWpERyxzQkFBVyxpQ0FBSTt5QkFBZixVQUFnQixLQUFrQjt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzdCLENBQUM7OzttQkFBQTtnQkFNRCxzQkFBVyxvQ0FBTzt5QkFBbEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3pCLENBQUM7OzttQkFBQTtnQkFRTSw4QkFBSSxHQUFYLFVBQVksSUFBa0IsRUFBRSxPQUFlLEVBQUUsUUFBaUI7b0JBQWxFLGlCQVVDO29CQVRHLFFBQVEsR0FBRyxRQUFRLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7b0JBRXhCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsK0JBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRW5FLFVBQVUsQ0FBQzt3QkFDUCwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQU1PLDJDQUFpQixHQUF6QixVQUEwQixJQUFrQjtvQkFBNUMsaUJBY0M7b0JBYkcsSUFBSSxPQUFPLEdBQVcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckQsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTOzRCQUMzQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2hGLCtCQUFjLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQ3ZELENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBRUgsK0JBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztnQkFDTCxDQUFDO2dCQTNEYyw0QkFBWSxHQUFXLFFBQVEsQ0FBQztnQkFDaEMsK0JBQWUsR0FBVyxJQUFJLENBQUM7Z0JBQy9CLDRCQUFZLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQTBEakUsc0JBQUM7WUFBRCxDQTdEQSxBQTZEQyxJQUFBO1lBN0RELDZDQTZEQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL05vdGlmaWVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlcnZpY2VzXG5pbXBvcnQge1NldENsYXNzTmF0aXZlfSBmcm9tIFwiLi9TZXRDbGFzc05hdGl2ZVwiO1xuXG4vLyBFbnVtc1xuaW1wb3J0IHtOb3RpZmllclR5cGV9IGZyb20gXCIuL2VudW1zL05vdGlmaWVyVHlwZVwiO1xuXG4vKipcbiAqIFByb3ZpZGVzIEFQSSBmb3Igb3BlcmF0aW5nIHdpdGggdGhlIE5vdGlmaWVyIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vdGlmaWVyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgQUNUSVZFX0NMQVNTOiBzdHJpbmcgPSBcImFjdGl2ZVwiO1xuICAgIHByaXZhdGUgc3RhdGljIEFDVElWRV9EVVJBVElPTjogbnVtYmVyID0gMzAwMDtcbiAgICBwcml2YXRlIHN0YXRpYyBUWVBFX0NMQVNTRVMgPSBbXCJlcnJvclwiLCBcInN1Y2Nlc3NcIiwgXCJub3RpY2VcIl07XG5cbiAgICBwcml2YXRlIF9uYXRpdmVFbGVtOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgZm9yIHRoZSBuYXRpdmUgcmVmZXJlbmNlIG9mIHRoZSBub3RpZmllci5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGVsZW0odmFsdWU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX25hdGl2ZUVsZW0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBjdXJyZW50IG5vdGlmaWVyIG1lc3NhZ2UuXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIG5vdGlmaWVyIHdpdGggdGhlIHNlbGVjdGVkIHR5cGUsIG1lc3NhZ2UgYW5kIGR1cmF0aW9uIChvcHRpb25hbCkuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiAtIE9wdGlvbmFsLCBEZWZhdWx0OiAzc1xuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHR5cGU6IE5vdGlmaWVyVHlwZSwgbWVzc2FnZTogc3RyaW5nLCBkdXJhdGlvbj86IG51bWJlcikge1xuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE5vdGlmaWVyU2VydmljZS5BQ1RJVkVfRFVSQVRJT047XG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgICAgIHRoaXMuYXBwbHlOb3RpZmllclR5cGUodHlwZSk7XG4gICAgICAgIFNldENsYXNzTmF0aXZlLmFkZCh0aGlzLl9uYXRpdmVFbGVtLCBOb3RpZmllclNlcnZpY2UuQUNUSVZFX0NMQVNTKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFNldENsYXNzTmF0aXZlLnJlbW92ZSh0aGlzLl9uYXRpdmVFbGVtLCBOb3RpZmllclNlcnZpY2UuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHJlc3BlY3RpdmUgdHlwZSBjbGFzcyB0byB0aGUgbm90aWZpZXIgYW5kIHJlbW92ZXMgdGhlIHJlc3QsIGlmIGFueS5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIHByaXZhdGUgYXBwbHlOb3RpZmllclR5cGUodHlwZTogTm90aWZpZXJUeXBlKTogdm9pZCB7XG4gICAgICAgIHZhciBjdXJyZW50OiBzdHJpbmcgPSBOb3RpZmllclNlcnZpY2UuVFlQRV9DTEFTU0VTW3R5cGVdO1xuXG4gICAgICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtLmNsYXNzTmFtZS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTm90aWZpZXJTZXJ2aWNlLlRZUEVfQ0xBU1NFUy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lICE9PSBjdXJyZW50ICYmIHRoaXMuX25hdGl2ZUVsZW0uY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgU2V0Q2xhc3NOYXRpdmUucmVtb3ZlKHRoaXMuX25hdGl2ZUVsZW0sIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFNldENsYXNzTmF0aXZlLmFkZCh0aGlzLl9uYXRpdmVFbGVtLCBjdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
