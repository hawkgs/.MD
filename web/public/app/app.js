(function() {
    "use strict";

    angular.module("app", [
        "ngRoute",
        //"app.common",
        "app.main"
    ])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: "/" });
    }]);
}());
