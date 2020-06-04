'use strict';

angular.module('myApp.accessoFinale18', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accessoFinale18', {
    templateUrl: 'accessoFinale18/accessoFinale18.html',
    controller: 'accessoFinale18Ctrl'
  });
}])

.controller('accessoFinale18Ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.section="accessoFinale18";

	var sponsors = [
		{img:"jermann.png" , nome:"Jermann"},
		{img:"tosolini.png" , nome:"Grappe Tosolini"},
		{img:"castello.png" , nome:"Castello di Spessa"},
		{img:"carga.png" , nome:"Carga"}
	];

	$scope.sponsors = _.shuffle(sponsors);



}]);
