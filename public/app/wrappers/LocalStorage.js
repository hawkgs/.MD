System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorage;
    return {
        setters:[],
        execute: function() {
            exports_1("LocalStorage", LocalStorage = {
                setItem: function (key, data) {
                    localStorage.setItem(key, data);
                },
                getItem: function (key) {
                    return localStorage.getItem(key);
                },
                clear: function () {
                    localStorage.clear();
                }
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXBwZXJzL0xvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFJYSxZQUFZOzs7O1lBQVosMEJBQUEsWUFBWSxHQUFHO2dCQU14QixPQUFPLFlBQUMsR0FBVyxFQUFFLElBQVk7b0JBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQU1ELE9BQU8sWUFBQyxHQUFXO29CQUNmLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUtELEtBQUs7b0JBQ0QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QixDQUFDO2FBQ0osQ0FBQSxDQUFDIiwiZmlsZSI6IndyYXBwZXJzL0xvY2FsU3RvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogJ2xvY2FsU3RvcmFnZScgd3JhcHBlclxuICogQHR5cGUge3tzZXRJdGVtOiAoZnVuY3Rpb24oc3RyaW5nLCBzdHJpbmcpOiB2b2lkKSwgZ2V0SXRlbTogKGZ1bmN0aW9uKHN0cmluZyk6IGFueSksIGNsZWFyOiAoZnVuY3Rpb24oKTogdm9pZCl9fVxuICovXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgYW4gaXRlbS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBpdGVtLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgbG9jYWxTdG9yYWdlLlxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
