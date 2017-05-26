System.register(["./GfmService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GfmService_1;
    var MdParser;
    return {
        setters:[
            function (GfmService_1_1) {
                GfmService_1 = GfmService_1_1;
            }],
        execute: function() {
            MdParser = (function () {
                function MdParser() {
                }
                MdParser.parseHtmlToMd = function (html) {
                    html = MdParser.tableBrRemover(html);
                    html = MdParser.removeTrailingBr(html);
                    return toMarkdown(html, {
                        gfm: GfmService_1.GfmService.isGfmOn,
                        converters: MdParser.converters
                    });
                };
                MdParser.removeTrailingBr = function (html) {
                    return html.replace(/(<br>)+<\/(b|i|strong|em|strike|code)>/g, "</$2>");
                };
                MdParser.tableBrRemover = function (html) {
                    var getTablesRegex = /(<table[^>]*>(?:.|\n)*?<\/table>)/g, brLess, matches;
                    while (matches = getTablesRegex.exec(html)) {
                        brLess = matches[0].replace(/<br>/g, "");
                        html = html.replace(matches[0], brLess);
                    }
                    return html;
                };
                MdParser.converters = [{
                        filter: "pre",
                        replacement: function (content) {
                            return "```\n" + content.trim() + "\n```\n";
                        }
                    }, {
                        filter: "div",
                        replacement: function (content) {
                            return "\n" + content;
                        }
                    }, {
                        filter: "span",
                        replacement: function (content) {
                            return content;
                        }
                    }];
                return MdParser;
            }());
            exports_1("MdParser", MdParser);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL01kUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7Z0JBK0RBLENBQUM7Z0JBcENpQixzQkFBYSxHQUEzQixVQUE0QixJQUFZO29CQUNwQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7d0JBQ3BCLEdBQUcsRUFBRSx1QkFBVSxDQUFDLE9BQU87d0JBQ3ZCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtxQkFDbEMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBT2MseUJBQWdCLEdBQS9CLFVBQWdDLElBQVk7b0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQU9jLHVCQUFjLEdBQTdCLFVBQThCLElBQVk7b0JBQ3RDLElBQUksY0FBYyxHQUFHLG9DQUFvQyxFQUNyRCxNQUFjLEVBQ2QsT0FBTyxDQUFDO29CQUVaLE9BQU8sT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDekMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzVDLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkF6RGMsbUJBQVUsR0FBRyxDQUFDO3dCQUN6QixNQUFNLEVBQUUsS0FBSzt3QkFDYixXQUFXLEVBQUUsVUFBVSxPQUFPOzRCQUMxQixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7d0JBQ2hELENBQUM7cUJBQ0osRUFBRTt3QkFDQyxNQUFNLEVBQUUsS0FBSzt3QkFDYixXQUFXLEVBQUUsVUFBVSxPQUFPOzRCQUMxQixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzt3QkFDMUIsQ0FBQztxQkFDSixFQUFFO3dCQUNDLE1BQU0sRUFBRSxNQUFNO3dCQUNkLFdBQVcsRUFBRSxVQUFVLE9BQU87NEJBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQ25CLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2dCQTJDUCxlQUFDO1lBQUQsQ0EvREEsQUErREMsSUFBQTtZQS9ERCwrQkErREMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9NZFBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2ZtU2VydmljZX0gZnJvbSBcIi4vR2ZtU2VydmljZVwiO1xuXG5kZWNsYXJlIHZhciB0b01hcmtkb3duO1xuXG4vKipcbiAqIFByb3ZpZGVzIG1lY2hhbmlzbSBmb3IgcGFyc2luZyBIVE1MIHRvIE1EIChiYXNlZCBvbiBlZGl0b3IgbmVlZHMpLlxuICovXG5leHBvcnQgY2xhc3MgTWRQYXJzZXIge1xuICAgIC8qKlxuICAgICAqIEV4dGVuc2lvbiBjb252ZXJ0ZXJzIGZvciB0aGUgcGFyc2VyLlxuICAgICAqIEB0eXBlIHt7ZmlsdGVyOiBzdHJpbmcsIHJlcGxhY2VtZW50OiAoZnVuY3Rpb24oYW55KTogc3RyaW5nKX1bXX1cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0ZXJzID0gW3tcbiAgICAgICAgZmlsdGVyOiBcInByZVwiLFxuICAgICAgICByZXBsYWNlbWVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImBgYFxcblwiICsgY29udGVudC50cmltKCkgKyBcIlxcbmBgYFxcblwiO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFwiZGl2XCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxuXCIgKyBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBmaWx0ZXI6IFwic3BhblwiLFxuICAgICAgICByZXBsYWNlbWVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9XG4gICAgfV07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIEhUTUwgdG8gTUQuXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2VIdG1sVG9NZChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBodG1sID0gTWRQYXJzZXIudGFibGVCclJlbW92ZXIoaHRtbCk7XG4gICAgICAgIGh0bWwgPSBNZFBhcnNlci5yZW1vdmVUcmFpbGluZ0JyKGh0bWwpO1xuXG4gICAgICAgIHJldHVybiB0b01hcmtkb3duKGh0bWwsIHtcbiAgICAgICAgICAgIGdmbTogR2ZtU2VydmljZS5pc0dmbU9uLFxuICAgICAgICAgICAgY29udmVydGVyczogTWRQYXJzZXIuY29udmVydGVyc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0cmFpbGluZyBCUiB0YWdzIGZyb20gdGhlIGlubGluZSBlbGVtZW50cy5cbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVHJhaWxpbmdCcihodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8oPGJyPikrPFxcLyhifGl8c3Ryb25nfGVtfHN0cmlrZXxjb2RlKT4vZywgXCI8LyQyPlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBCUiB0YWdzIGZyb20gVEFCTEUgY2hpbGRyZW4gdGFncyAoVEgsIFREKS5cbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGFibGVCclJlbW92ZXIoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGdldFRhYmxlc1JlZ2V4ID0gLyg8dGFibGVbXj5dKj4oPzoufFxcbikqPzxcXC90YWJsZT4pL2csXG4gICAgICAgICAgICBickxlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1hdGNoZXM7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoZXMgPSBnZXRUYWJsZXNSZWdleC5leGVjKGh0bWwpKSB7XG4gICAgICAgICAgICBickxlc3MgPSBtYXRjaGVzWzBdLnJlcGxhY2UoLzxicj4vZywgXCJcIik7XG4gICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKG1hdGNoZXNbMF0sIGJyTGVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
