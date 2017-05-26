System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SetClassNative;
    return {
        setters:[],
        execute: function() {
            SetClassNative = (function () {
                function SetClassNative() {
                }
                SetClassNative.add = function (elem, className) {
                    if (elem.className.indexOf(className) === -1) {
                        elem.className += " " + className;
                    }
                };
                SetClassNative.remove = function (elem, className) {
                    elem.className = elem.className.replace(className, "").trim();
                };
                SetClassNative.toggle = function (elem, className) {
                    if (elem.className.indexOf(className) === -1) {
                        elem.className += " " + className;
                    }
                    else {
                        SetClassNative.remove(elem, className);
                    }
                };
                return SetClassNative;
            }());
            exports_1("SetClassNative", SetClassNative);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NldENsYXNzTmF0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFpQ0EsQ0FBQztnQkEzQmlCLGtCQUFHLEdBQWpCLFVBQWtCLElBQUksRUFBRSxTQUFpQjtvQkFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7b0JBQ3RDLENBQUM7Z0JBQ0wsQ0FBQztnQkFPYSxxQkFBTSxHQUFwQixVQUFxQixJQUFJLEVBQUUsU0FBaUI7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsRSxDQUFDO2dCQU9hLHFCQUFNLEdBQXBCLFVBQXFCLElBQUksRUFBRSxTQUFpQjtvQkFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7b0JBQ3RDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzNDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDTCxxQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QsMkNBaUNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvU2V0Q2xhc3NOYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByb3ZpZGVzIGEgc2ltcGxpZmllZCBBUEkgZm9yIGFkZGluZy9yZW1vdmluZyBlbGVtZW50IGNsYXNzZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXRDbGFzc05hdGl2ZSB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNsYXNzIHRvIGFuIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGVsZW0gLSBUYXJnZXQgZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFkZChlbGVtLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUuaW5kZXhPZihjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSBhbiBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBlbGVtIC0gVGFyZ2V0IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmUoZWxlbSwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzTmFtZSwgXCJcIikudHJpbSgpOyAvLyAudHJpbSgpIGlzIG9wdGlvbmFsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBhIGNsYXNzIG9mIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIGVsZW0gLSBUYXJnZXQgZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvZ2dsZShlbGVtLCBjbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUuaW5kZXhPZihjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXRDbGFzc05hdGl2ZS5yZW1vdmUoZWxlbSwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
