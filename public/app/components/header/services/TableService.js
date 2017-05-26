System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableService;
    return {
        setters:[],
        execute: function() {
            TableService = (function () {
                function TableService() {
                }
                TableService.GenerateTable = function (row, col) {
                    var table = "<table>", closeTag = "</table>", i, j;
                    for (i = 0; i < row; i += 1) {
                        if (i === 0) {
                            table += "<thead>";
                        }
                        else if (i === 1) {
                            table += "<tbody>";
                        }
                        table += "<tr>";
                        for (j = 0; j < col; j += 1) {
                            if (i !== 0) {
                                table += "<td></td>";
                            }
                            else {
                                table += "<th></th>";
                            }
                        }
                        table += "</tr>";
                        if (i === 0) {
                            table += "</thead>";
                        }
                        else if (i === row - 1) {
                            table += "</tbody>";
                        }
                    }
                    return table + closeTag;
                };
                return TableService;
            }());
            exports_1("TableService", TableService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL3NlcnZpY2VzL1RhYmxlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Z0JBQUE7Z0JBeUNBLENBQUM7Z0JBakNpQiwwQkFBYSxHQUEzQixVQUE0QixHQUFXLEVBQUUsR0FBVztvQkFDaEQsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUNqQixRQUFRLEdBQUcsVUFBVSxFQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVULEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNWLEtBQUssSUFBSSxTQUFTLENBQUM7d0JBQ3ZCLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixLQUFLLElBQUksU0FBUyxDQUFDO3dCQUN2QixDQUFDO3dCQUVELEtBQUssSUFBSSxNQUFNLENBQUM7d0JBRWhCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7NEJBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNWLEtBQUssSUFBSSxXQUFXLENBQUM7NEJBQ3pCLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ0osS0FBSyxJQUFJLFdBQVcsQ0FBQzs0QkFDekIsQ0FBQzt3QkFDTCxDQUFDO3dCQUVELEtBQUssSUFBSSxPQUFPLENBQUM7d0JBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNWLEtBQUssSUFBSSxVQUFVLENBQUM7d0JBQ3hCLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsS0FBSyxJQUFJLFVBQVUsQ0FBQzt3QkFDeEIsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUM1QixDQUFDO2dCQUNMLG1CQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCx1Q0F5Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci9zZXJ2aWNlcy9UYWJsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNlcnZpY2UgZm9yIGdlbmVyYXRpbmcgSFRNTCB0YWJsZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbmQgcmV0dXJucyBhIEhUTUwgdGFibGUgKGFzIGEgc3RyaW5nKSBieSBwcm92aWRlZCByb3cgYW5kIGNvbHVtbi5cbiAgICAgKiBAcGFyYW0gcm93XG4gICAgICogQHBhcmFtIGNvbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZW5lcmF0ZVRhYmxlKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHZhciB0YWJsZSA9IFwiPHRhYmxlPlwiLFxuICAgICAgICAgICAgY2xvc2VUYWcgPSBcIjwvdGFibGU+XCIsXG4gICAgICAgICAgICBpLCBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3c7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0YWJsZSArPSBcIjx0aGVhZD5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRhYmxlICs9IFwiPHRib2R5PlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJsZSArPSBcIjx0cj5cIjtcblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUgKz0gXCI8dGQ+PC90ZD5cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZSArPSBcIjx0aD48L3RoPlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFibGUgKz0gXCI8L3RyPlwiO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRhYmxlICs9IFwiPC90aGVhZD5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gcm93IC0gMSkge1xuICAgICAgICAgICAgICAgIHRhYmxlICs9IFwiPC90Ym9keT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YWJsZSArIGNsb3NlVGFnO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
