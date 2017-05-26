System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ControlValidators;
    return {
        setters:[],
        execute: function() {
            ControlValidators = (function () {
                function ControlValidators() {
                }
                ControlValidators.regexMatch = function (pattern) {
                    return function (control) {
                        if (!pattern.test(control.value)) {
                            return { pattern: true };
                        }
                        return null;
                    };
                };
                ControlValidators.compare = function (comparer) {
                    return function (control) {
                        if (control.value !== comparer.value) {
                            return { mismatch: true };
                        }
                        return null;
                    };
                };
                return ControlValidators;
            }());
            exports_1("ControlValidators", ControlValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0NvbnRyb2xWYWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFRQTtnQkFBQTtnQkE4QkEsQ0FBQztnQkF4QmlCLDRCQUFVLEdBQXhCLFVBQXlCLE9BQWU7b0JBQ3BDLE1BQU0sQ0FBQyxVQUFDLE9BQWdCO3dCQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUM3QixDQUFDO3dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQU9hLHlCQUFPLEdBQXJCLFVBQXNCLFFBQXlCO29CQUMzQyxNQUFNLENBQUMsVUFBQyxPQUFnQjt3QkFDcEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUM5QixDQUFDO3dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUNMLHdCQUFDO1lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtZQTlCRCxpREE4QkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Db250cm9sVmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBDb250cm9sfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5cbi8vIEludGVyZmFjZXNcbmltcG9ydCB7SVZhbGlkYXRpb25SZXN1bHR9IGZyb20gXCIuL2NvbnRyYWN0cy9JVmFsaWRhdGlvblJlc3VsdFwiO1xuXG4vKipcbiAqIEEgc2V0IG9mIGN1c3RvbSBDb250cm9sIHZhbGlkYXRvciBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgQ29udHJvbFZhbGlkYXRvcnMge1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgcmVndWxhciBleHByZXNzaW9uIG1hdGNoL3Rlc3QgdmFsaWRhdGlvbi5cbiAgICAgKiBAcGFyYW0gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihDb250cm9sKTogSVZhbGlkYXRpb25SZXN1bHR9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWdleE1hdGNoKHBhdHRlcm46IFJlZ0V4cCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBDb250cm9sKTogSVZhbGlkYXRpb25SZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXR0ZXJuOiB0cnVlIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIGEgY29udHJvbCB2YWx1ZSB3aXRoIGFub3RoZXIgY29udHJvbCdzIHZhbHVlLlxuICAgICAqIEBwYXJhbSBjb21wYXJlciAtIFRoZSBjb21wYXJlciBjb250cm9sXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKENvbnRyb2wpOiBJVmFsaWRhdGlvblJlc3VsdH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbXBhcmUoY29tcGFyZXI6IEFic3RyYWN0Q29udHJvbCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBDb250cm9sKTogSVZhbGlkYXRpb25SZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IGNvbXBhcmVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgbWlzbWF0Y2g6IHRydWUgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
