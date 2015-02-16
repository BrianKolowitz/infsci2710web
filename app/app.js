'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
factory('_', ['$window',
  function($window) {
    // place lodash include before angular
    return $window._;
  }
]).
constant('URLS', (function(){
    return {
        getDepartmentSalaries: "http://localhost:8080/infsci2710webJavaDb/webresources/university/departments/salaries",
        getInstructors: "http://localhost:8080/infsci2710webJavaDb/webresources/university/instructors",
        addInstructors: "http://localhost:8080/infsci2710webJavaDb/webresources/university/instructors/",
        deleteInstructors: "http://localhost:8080/infsci2710webJavaDb/webresources/university/instructors/"
        
//        getDepartmentSalaries: "http://localhost:8888/infsci2710webPhpDb/index.php/university/departments/salaries",
//        getInstructors: "http://localhost:8888/infsci2710webPhpDb/index.php/university/instructors",
//        addInstructors: "http://localhost:8888/infsci2710webPhpDb/index.php/university/instructors/",
//        deleteInstructors: "http://localhost:8888/infsci2710webPhpDb/index.php/university/instructors/"
        
    };
})()).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
