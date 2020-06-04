'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'countTo',
  'duScroll',
  'myApp.home',
  'myApp.trophy',
  'myApp.trophy18',
  'myApp.classifica',
  'myApp.classifica18',
  'myApp.classifica19',
  'myApp.accessoFinale18',
  'myApp.trophy19',
  'myApp.trophy20',
  'myApp.classificaTrophy',
  'myApp.regolamento',
  'myApp.regolamento19',
  'myApp.regolamento20',
  'myApp.premi',
  'myApp.contatti',
  'myApp.mailing',
  'myApp.storia',
  'myApp.statuto',
  'myApp.clubs',
  'myApp.convenzioni',
  'myApp.tappa1',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
