System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GfmService;
    return {
        setters:[],
        execute: function() {
            GfmService = (function () {
                function GfmService() {
                    var gfmEntry = localStorage.getItem(GfmService.LS_KEY);
                    if (gfmEntry) {
                        GfmService.isGfmOn = JSON.parse(gfmEntry);
                    }
                    else {
                        GfmService.setGfm(true);
                    }
                }
                GfmService.setGfm = function (isOn) {
                    localStorage.setItem(GfmService.LS_KEY, isOn.toString());
                    GfmService.isGfmOn = isOn;
                };
                GfmService.toggleGfm = function () {
                    GfmService.setGfm(!GfmService.isGfmOn);
                };
                GfmService.LS_KEY = "md_gfm";
                return GfmService;
            }());
            exports_1("GfmService", GfmService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0dmbVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUdBO2dCQU9JO29CQUNJLElBQUksUUFBUSxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUUvRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNYLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNMLENBQUM7Z0JBTWEsaUJBQU0sR0FBcEIsVUFBcUIsSUFBYTtvQkFDOUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN6RCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFLYSxvQkFBUyxHQUF2QjtvQkFDSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQTdCYyxpQkFBTSxHQUFXLFFBQVEsQ0FBQztnQkE4QjdDLGlCQUFDO1lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtZQWhDRCxtQ0FnQ0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9HZm1TZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYW5hZ2VzIEdGTSAoR2l0SHViIEZsYXZvdXJlZCBNYXJrZG93bikgc3RhdGUgdmlhIGxvY2FsU3RvcmFnZVxuICovXG5leHBvcnQgY2xhc3MgR2ZtU2VydmljZSB7XG4gICAgcHVibGljIHN0YXRpYyBpc0dmbU9uOiBib29sZWFuO1xuICAgIHByaXZhdGUgc3RhdGljIExTX0tFWTogc3RyaW5nID0gXCJtZF9nZm1cIjtcblxuICAgIC8qKlxuICAgICAqIEdldHMgY3VycmVudCBHRk0gc3RhdGUgZnJvbSBsb2NhbFN0b3JhZ2UuIElmIG5vdCBzZXQsIHNldHMgaXQgdG8gdHJ1ZSBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgZ2ZtRW50cnk6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEdmbVNlcnZpY2UuTFNfS0VZKTtcblxuICAgICAgICBpZiAoZ2ZtRW50cnkpIHtcbiAgICAgICAgICAgIEdmbVNlcnZpY2UuaXNHZm1PbiA9IEpTT04ucGFyc2UoZ2ZtRW50cnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2ZtU2VydmljZS5zZXRHZm0odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIEdGTSBzdGF0ZSBieSBhIHByb3ZpZGVkIGJvb2xlYW4gdmFsdWUuXG4gICAgICogQHBhcmFtIGlzT25cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNldEdmbShpc09uOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEdmbVNlcnZpY2UuTFNfS0VZLCBpc09uLnRvU3RyaW5nKCkpO1xuICAgICAgICBHZm1TZXJ2aWNlLmlzR2ZtT24gPSBpc09uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgR0ZNIChvbi9vZmYpLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9nZ2xlR2ZtKCk6IHZvaWQge1xuICAgICAgICBHZm1TZXJ2aWNlLnNldEdmbSghR2ZtU2VydmljZS5pc0dmbU9uKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
