'use strict';

angular.module('myApp.tappa1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/galleries/tappa1', {
    templateUrl: 'galleries/tappa1/tappa1.html',
    controller: 'tappa1Ctrl'
  });
}])

.controller('tappa1Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="tappa1";

}]);
