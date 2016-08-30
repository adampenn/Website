'use strict';

angular.module('website', [
  'website.homepage'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
