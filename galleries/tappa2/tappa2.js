'use strict';

angular.module('myApp.tappa2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/galleries/tappa2', {
    templateUrl: 'galleries/tappa2/tappa2.html',
    controller: 'tappa2Ctrl'
  });
}])

.controller('tappa2Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="tappa2";

}]);
