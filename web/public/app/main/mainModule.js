(function() {
    "use strict";

    angular.module("app.main", ["ngRoute"])
        .config(["$routeProvider", function($routeProvider) {
            var modulePath = "partials/main/";

            $routeProvider
                .when("/", {
                    templateUrl: modulePath + "views/home",
                    controller: "HomeCtrl"
                })
                .when("/about", {
                    templateUrl: modulePath + "views/about",
                    controller: "AboutCtrl"
                });
        }]);
}());