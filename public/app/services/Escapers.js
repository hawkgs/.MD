System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Escapers;
    return {
        setters:[],
        execute: function() {
            Escapers = (function () {
                function Escapers() {
                }
                Escapers.escapeHtml = function (unsafe) {
                    return unsafe
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        .replace(/"/g, "&quot;")
                        .replace(/'/g, "&#039;");
                };
                return Escapers;
            }());
            exports_1("Escapers", Escapers);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0VzY2FwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFBQTtnQkFnQkEsQ0FBQztnQkFSaUIsbUJBQVUsR0FBeEIsVUFBeUIsTUFBYztvQkFDbkMsTUFBTSxDQUFDLE1BQU07eUJBQ1IsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO3lCQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzt5QkFDckIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7eUJBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0wsZUFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsK0JBZ0JDLENBQUEiLCJmaWxlIjoic2VydmljZXMvRXNjYXBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNldCBvZiBtZXRob2RzIGZvciBlc2NhcGluZyBkaWZmZXJlbnQgdHlwZXMgb2YgY29kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzY2FwZXJzIHtcbiAgICAvKipcbiAgICAgKiBFc2NhcGVzIEhUTUwgY29kZS5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyMzQ3NzMvY2FuLWktZXNjYXBlLWh0bWwtc3BlY2lhbC1jaGFycy1pbi1qYXZhc2NyaXB0XG4gICAgICogQGF1dGhvciBiam9ybmRcbiAgICAgKiBAcGFyYW0gdW5zYWZlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gRXNjYXBlZCBIVE1MXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlc2NhcGVIdG1sKHVuc2FmZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB1bnNhZmVcbiAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiJiMwMzk7XCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
