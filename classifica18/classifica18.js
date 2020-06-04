'use strict';

angular.module('myApp.classifica18', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classifica18', {
    templateUrl: 'classifica18/classifica18.html',
    controller: 'classifica18Ctrl'
  });
}])

.controller('classifica18Ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.section="classifica18";

	var sponsors = [
		{img:"jermann.png" , nome:"Jermann"},
		{img:"tosolini.png" , nome:"Grappe Tosolini"},
		{img:"castello.png" , nome:"Castello di Spessa"},
		{img:"carga.png" , nome:"Carga"}
	];

	$scope.sponsors = _.shuffle(sponsors);



}]);
