'use strict';

angular.module('myApp.trophy19', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trophy19', {
    templateUrl: 'trophy19/trophy19.html',
    controller: 'trophy19Ctrl'
  });
}])

.controller('trophy19Ctrl', ['$rootScope', function($rootScope) {
	$rootScope.section="trophy19";

}]);
