'use strict';

angular.module('myApp.premi', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/premi', {
    templateUrl: 'premi/premi.html',
    controller: 'premiCtrl'
  });
}])

.controller('premiCtrl', ['$rootScope', function($rootScope) {
	$rootScope.section="premi";

}]);
