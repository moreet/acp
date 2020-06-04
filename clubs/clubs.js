'use strict';

angular.module('myApp.clubs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clubs', {
    templateUrl: 'clubs/clubs.html',
    controller: 'clubsCtrl'
  });
}])

.controller('clubsCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="acp";
}]);
