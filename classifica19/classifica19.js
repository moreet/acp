'use strict';

angular.module('myApp.classifica19', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classifica19', {
    templateUrl: 'classifica19/classifica19.html',
    controller: 'classifica19Ctrl'
  });
}])

.controller('classifica19Ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.section="classifica19";

	var sponsors = [
		{img:"jermann.png" , nome:"Jermann"},
		{img:"tosolini.png" , nome:"Grappe Tosolini"},
		{img:"castello.png" , nome:"Castello di Spessa"},
		{img:"carga.png" , nome:"Carga"}
	];

	$scope.sponsors = _.shuffle(sponsors);



}]);
