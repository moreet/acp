'use strict';

angular.module('myApp.trophy20', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trophy20', {
    templateUrl: 'trophy20/trophy20.html',
    controller: 'trophy20Ctrl'
  });
}])

.controller('trophy20Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="trophy20";

}]);
