(function(angular){
    "use strict";
    angular.module("testApp", [])
    .controller("mainController", ["$scope", function($scope){
        $scope.title = "yay!";
    }]);
})(angular);