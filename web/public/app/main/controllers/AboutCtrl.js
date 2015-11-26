(function() {
    "use strict";

    angular.module("app.main")
        .controller("AboutCtrl", ["$scope", "$location", function($scope, $location) {
            $scope.name = "hio";

            $scope.back = function() {
                $location.path("/");
            };
        }]);
}());