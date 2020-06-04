'use strict';

angular.module('myApp.classifica', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classifica', {
    templateUrl: 'classifica/classifica.html',
    controller: 'classificaCtrl'
  });
}])

.controller('classificaCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.section="classifica";

	var sponsors = [
		{img:"jermann.png" , nome:"Jermann"},
		{img:"tosolini.png" , nome:"Grappe Tosolini"},
		{img:"sava.png" , nome:"Sava Hotels"},
		{img:"acentro.png" , nome:"Acentro Turismo"},
		{img:"markeyewear.jpg" , nome:"MarkEyewear"},
		{img:"castello.png" , nome:"Castello di Spessa"},
		{img:"carga.png" , nome:"Carga"}
	];

	$scope.sponsors = _.shuffle(sponsors);



}]);
