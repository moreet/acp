'use strict';

angular.module('myApp.statuto', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/statuto', {
    templateUrl: 'statuto/statuto.html',
    controller: 'statutoCtrl'
  });
}])

.controller('statutoCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="acp";
}]);
