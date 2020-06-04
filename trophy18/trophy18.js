'use strict';

angular.module('myApp.trophy18', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trophy18', {
    templateUrl: 'trophy18/trophy18.html',
    controller: 'trophy18Ctrl'
  });
}])

.controller('trophy18Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="trophy18";

}]);
