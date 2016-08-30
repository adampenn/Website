'use strict';

angular.module('website.homepage', []).

angular.module('myApp.login', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.data = {
    availableOptions: [
      {id: '0', name: '--Select One--'},
      {id: '012272', name: 'John Adams'},
      {id: '012222', name: 'James Crow'},
      {id: '014332', name: 'Alex Ball'},
      {id: '013453', name: 'Fake Name'}
    ],
    selectedOption: {id: '0', name: 'Select One'}
  };
}]);

