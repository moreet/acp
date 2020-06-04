'use strict';

angular.module('myApp.storia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/storia', {
    templateUrl: 'storia/storia.html',
    controller: 'storiaCtrl'
  });
}])

.controller('storiaCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="acp";
}]);
