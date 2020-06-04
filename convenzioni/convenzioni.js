'use strict';

angular.module('myApp.convenzioni', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/convenzioni', {
    templateUrl: 'convenzioni/convenzioni.html',
    controller: 'convenzioniCtrl'
  });
}])

.controller('convenzioniCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="acp";
}]);
