'use strict';

angular.module('myApp.trophy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trophy', {
    templateUrl: 'trophy/trophy.html',
    controller: 'trophyCtrl'
  });
}])

.controller('trophyCtrl', ['$rootScope', function($rootScope) {
	$rootScope.section="trophy";

}]);
