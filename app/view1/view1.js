'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'UniversityFactory', function($scope, UniversityFactory) {
        $scope.departments = [];
        $scope.error = null;

        $scope.search = function() {
            UniversityFactory.getDepartmentSalaries().
                success(function(data, status, headers, config) {
                    $scope.departments = data;
                    $scope.error = null;
                  }).
                  error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $scope.error = status;
                  });            
        };
        
        $scope.search();

}]);