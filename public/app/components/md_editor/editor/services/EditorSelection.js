System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EditorSelection;
    return {
        setters:[],
        execute: function() {
            EditorSelection = (function () {
                function EditorSelection() {
                }
                EditorSelection.getTextFromSelection = function (winSelection) {
                    var sel = winSelection, container;
                    if (sel.rangeCount) {
                        container = document.createElement("div");
                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                            container.appendChild(sel.getRangeAt(i).cloneContents());
                        }
                        EditorSelection.text = container.innerHTML;
                    }
                };
                return EditorSelection;
            }());
            exports_1("EditorSelection", EditorSelection);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWRfZWRpdG9yL2VkaXRvci9zZXJ2aWNlcy9FZGl0b3JTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUdBO2dCQUFBO2dCQXNCQSxDQUFDO2dCQWRpQixvQ0FBb0IsR0FBbEMsVUFBbUMsWUFBWTtvQkFDM0MsSUFBSSxHQUFHLEdBQUcsWUFBWSxFQUNsQixTQUFTLENBQUM7b0JBRWQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUUxQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUNqRCxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQzt3QkFDN0QsQ0FBQzt3QkFFRCxlQUFlLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztnQkFDTCxzQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsNkNBc0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tZF9lZGl0b3IvZWRpdG9yL3NlcnZpY2VzL0VkaXRvclNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogS2VlcHMgYSBjb3B5IG9mIHVzZXIgdGV4dCBzZWxlY3Rpb24gYW5kIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgRWRpdG9yU2VsZWN0aW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIHNlbDsgLy8gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcbiAgICBwdWJsaWMgc3RhdGljIHRleHQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB0ZXh0IGNvbnRlbnQgZnJvbSBhICcuZ2V0U2VsZWN0aW9uKCknLlxuICAgICAqIEBwYXJhbSB3aW5TZWxlY3Rpb24gLSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFRleHRGcm9tU2VsZWN0aW9uKHdpblNlbGVjdGlvbik6IHZvaWQge1xuICAgICAgICB2YXIgc2VsID0gd2luU2VsZWN0aW9uLFxuICAgICAgICAgICAgY29udGFpbmVyO1xuXG4gICAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsLmdldFJhbmdlQXQoaSkuY2xvbmVDb250ZW50cygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRWRpdG9yU2VsZWN0aW9uLnRleHQgPSBjb250YWluZXIuaW5uZXJIVE1MO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
