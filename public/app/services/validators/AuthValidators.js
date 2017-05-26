System.register(["angular2/common", "../ControlValidators"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, ControlValidators_1;
    var AuthValidators;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ControlValidators_1_1) {
                ControlValidators_1 = ControlValidators_1_1;
            }],
        execute: function() {
            AuthValidators = (function () {
                function AuthValidators() {
                }
                AuthValidators.usernameValidation = function () {
                    return common_1.Validators.compose([
                        common_1.Validators.required,
                        common_1.Validators.minLength(6),
                        common_1.Validators.maxLength(25),
                        ControlValidators_1.ControlValidators.regexMatch(/^[\w.]+$/)
                    ]);
                };
                AuthValidators.passwordValidation = function () {
                    return common_1.Validators.compose([
                        common_1.Validators.required,
                        common_1.Validators.minLength(8),
                        common_1.Validators.maxLength(25)
                    ]);
                };
                AuthValidators.emailValidation = function () {
                    return common_1.Validators.compose([
                        common_1.Validators.required,
                        ControlValidators_1.ControlValidators.regexMatch(/^[\w.+-]+@[a-zA-Z\d-]+\.[a-zA-Z0-9-.]+$/)
                    ]);
                };
                AuthValidators.passwordConfirmationValidation = function (password) {
                    return common_1.Validators.compose([
                        common_1.Validators.required,
                        ControlValidators_1.ControlValidators.compare(password)
                    ]);
                };
                return AuthValidators;
            }());
            exports_1("AuthValidators", AuthValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3ZhbGlkYXRvcnMvQXV0aFZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFnREEsQ0FBQztnQkEzQ2lCLGlDQUFrQixHQUFoQztvQkFDSSxNQUFNLENBQUMsbUJBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLG1CQUFVLENBQUMsUUFBUTt3QkFDbkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixtQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ3hCLHFDQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7cUJBQzNDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQU1hLGlDQUFrQixHQUFoQztvQkFDSSxNQUFNLENBQUMsbUJBQVUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLG1CQUFVLENBQUMsUUFBUTt3QkFDbkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixtQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7cUJBQzNCLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQU1hLDhCQUFlLEdBQTdCO29CQUNJLE1BQU0sQ0FBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsbUJBQVUsQ0FBQyxRQUFRO3dCQUNuQixxQ0FBaUIsQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUM7cUJBQzFFLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQU9hLDZDQUE4QixHQUE1QyxVQUE2QyxRQUF5QjtvQkFDbEUsTUFBTSxDQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO3dCQUN0QixtQkFBVSxDQUFDLFFBQVE7d0JBQ25CLHFDQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7cUJBQ3RDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNMLHFCQUFDO1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCwyQ0FnREMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy92YWxpZGF0b3JzL0F1dGhWYWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2x9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcblxuLy8gU2VydmljZXNcbmltcG9ydCB7Q29udHJvbFZhbGlkYXRvcnN9IGZyb20gXCIuLi9Db250cm9sVmFsaWRhdG9yc1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzZXQgb2YgYXV0aGVudGljYXRpb24gdmFsaWRhdG9ycy5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhWYWxpZGF0b3JzIHtcbiAgICAvKipcbiAgICAgKiBVc2VybmFtZSB2YWxpZGF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHVzZXJuYW1lVmFsaWRhdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjUpLFxuICAgICAgICAgICAgQ29udHJvbFZhbGlkYXRvcnMucmVnZXhNYXRjaCgvXltcXHcuXSskLylcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFzc3dvcmQgdmFsaWRhdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwYXNzd29yZFZhbGlkYXRpb24oKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKFtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI1KVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWFpbCB2YWxpZGF0aW9uLlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGVtYWlsVmFsaWRhdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIENvbnRyb2xWYWxpZGF0b3JzLnJlZ2V4TWF0Y2goL15bXFx3ListXStAW2EtekEtWlxcZC1dK1xcLlthLXpBLVowLTktLl0rJC8pXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm1hdGlvbiBwYXNzd29yZCB2YWxpZGF0aW9uLlxuICAgICAqIEBwYXJhbSBwYXNzd29yZCAtIFJlZmVyZW5jZSB0byBwYXNzd29yZCBjb250cm9sXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGFzc3dvcmRDb25maXJtYXRpb25WYWxpZGF0aW9uKHBhc3N3b3JkOiBBYnN0cmFjdENvbnRyb2wpOiBGdW5jdGlvbiB7XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIENvbnRyb2xWYWxpZGF0b3JzLmNvbXBhcmUocGFzc3dvcmQpXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
