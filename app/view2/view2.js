'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$location', 'UniversityFactory', function($scope, $location, UniversityFactory) {
        $scope.instructors = [];
        $scope.orderBy = "ID";
        $scope.order = "DESC";
        $scope.limit = 10;
        $scope.offset = 0;
        
        $scope.search = function() {
            UniversityFactory.getInstructors(
                    $scope.orderBy, $scope.order, $scope.limit, $scope.offset).
                success(function(data, status, headers, config) {
                    $scope.instructors = data;
                    $scope.error = null;
                  }).
                  error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $scope.error = status;
                  });            
        };
        
        $scope.add = function() {
            $location.path('/view3');
            
        };
        
        $scope.delete = function(id) {
            UniversityFactory.deleteInstructor(id).
                success(function(data, status, headers, config) {
                    $scope.search();
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