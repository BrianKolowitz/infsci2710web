'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$location', 'UniversityFactory', function($scope, $location, UniversityFactory) {
        $scope.id = null;
        $scope.name = null;
        $scope.dept_name = null;
        $scope.salary = 0;
        
        $scope.add = function() {
            UniversityFactory.addInstructor($scope.id, $scope.name, $scope.dept_name, $scope.salary).
                success(function(data, status, headers, config) {
                    $location.path('/view2');
                    $scope.error = null;
                  }).
                  error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $scope.error = status;
                  });            
        };
}]);