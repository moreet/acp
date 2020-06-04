'use strict';

angular.module('myApp.regolamento19', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/regolamento19', {
    templateUrl: 'regolamento19/regolamento19.html',
    controller: 'regolamento19Ctrl'
  });
}])

.controller('regolamento19Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="regolamento19";

}]);
