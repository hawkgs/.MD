System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Converters;
    return {
        setters:[],
        execute: function() {
            Converters = (function () {
                function Converters() {
                }
                Converters.rgbToHex = function (rgb) {
                    if (/^#[0-9A-F]{6}$/i.test(rgb)) {
                        return rgb;
                    }
                    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                    function hex(x) {
                        return ("0" + parseInt(x).toString(16)).slice(-2);
                    }
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                };
                return Converters;
            }());
            exports_1("Converters", Converters);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0NvbnZlcnRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUdBO2dCQUFBO2dCQXFCQSxDQUFDO2dCQWJpQixtQkFBUSxHQUF0QixVQUF1QixHQUFHO29CQUN0QixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNmLENBQUM7b0JBRUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztvQkFFcEQsYUFBYSxDQUFDO3dCQUNWLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELENBQUM7b0JBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFDTCxpQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsbUNBcUJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvQ29udmVydGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJvdmlkZXMgYSBzZXQgb2YgY29udmVydGVycy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnZlcnRlcnMge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFJHQiB0byBIRVggY29sb3IuXG4gICAgICogQGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzQwNzAwL2hvdy10by1nZXQtaGV4LWNvbG9yLXZhbHVlLXJhdGhlci10aGFuLXJnYi12YWx1ZVxuICAgICAqIEBhdXRob3IgRXJpY2sgUGV0cnVjZWxsaVxuICAgICAqIEBwYXJhbSByZ2IgLSBSR0Igc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ30gSEVYIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmdiVG9IZXgocmdiKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKC9eI1swLTlBLUZdezZ9JC9pLnRlc3QocmdiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJnYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJnYiA9IHJnYi5tYXRjaCgvXnJnYlxcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKylcXCkkLyk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGV4KHgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXCIwXCIgKyBwYXJzZUludCh4KS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcIiNcIiArIGhleChyZ2JbMV0pICsgaGV4KHJnYlsyXSkgKyBoZXgocmdiWzNdKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
