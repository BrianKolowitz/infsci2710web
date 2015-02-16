'use strict';

angular.module('myApp').factory('UniversityFactory', ['$http', 'URLS', function($http, URLS){
    return {
        getDepartmentSalaries: function(){
            return $http.get(URLS.getDepartmentSalaries);
        },
        getInstructors: function(orderBy, order, limit, offset){
            return $http.get(URLS.getInstructors, {                    
                    params: {
                        orderBy: orderBy,
                        order: order,
                        limit: limit,
                        offset: offset
                    }
                });
            },                  
        deleteInstructor: function(id){
            return $http.delete(URLS.deleteInstructors + id);
        },
        addInstructor: function(id, name, dept_name, salary){
            return $http.put(URLS.addInstructors + id, {
                ID: id,
                name: name,
                dept_name: dept_name,
                salary: salary
            });
        }
    };               
}]);