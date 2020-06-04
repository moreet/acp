'use strict';

angular.module('myApp.mailing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mailing', {
    templateUrl: 'mailing/mailing.html',
    controller: 'mailingCtrl'
  });
}])

.controller('mailingCtrl', ['$rootScope', function($rootScope) {

	$rootScope.section="mailing";
}]);
