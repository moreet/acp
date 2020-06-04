'use strict';

angular.module('myApp.regolamento20', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/regolamento20', {
    templateUrl: 'regolamento20/regolamento20.html',
    controller: 'regolamento20Ctrl'
  });
}])

.controller('regolamento20Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="regolamento20";

}]);
