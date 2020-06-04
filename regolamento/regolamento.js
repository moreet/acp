'use strict';

angular.module('myApp.regolamento', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/regolamento', {
    templateUrl: 'regolamento/regolamento.html',
    controller: 'regolamentoCtrl'
  });
}])

.controller('regolamentoCtrl', ['$rootScope', function($rootScope) {
	$rootScope.section="regolamento";

}]);
