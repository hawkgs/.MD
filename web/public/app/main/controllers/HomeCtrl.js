(function() {
    "use strict";

    angular.module("app.main")
        .controller("HomeCtrl", ["$scope", function($scope) {
            $scope.name = "asko";
        }]);
}());