'use strict';

angular.module('myApp.contatti', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contatti', {
    templateUrl: 'contatti/contatti.html',
    controller: 'contattiCtrl'
  });
}])

.controller('contattiCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="contatti";
}]);
