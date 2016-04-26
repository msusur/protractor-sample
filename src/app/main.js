(function (angular) {
    "use strict";
    angular.module("testApp", [])
        .controller("mainController", ["$scope", "$http", function ($scope, $http) {

            (function ($scope, $http) {
                $http.get("/api/tasks", function (result) {
                    debugger;
                });
            })($scope, $http);
            $scope.tasks = [
                { nr: 1, title: "Yay!" },
                { nr: 2, title: "Yay!" },
                { nr: 3, title: "Yay!" }
            ];
            $scope.comment = function (item) {
                alert("not working yet.");
            };
        }]);
})(angular);