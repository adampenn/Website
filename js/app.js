var app = angular.module('myApp', [
	'ui.router',
	'myApp.projects',
  'myApp.contact',
  'myApp.education'
	]);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('about');
  $stateProvider
  .state('projects', {
  	url: '/projects',
  	controller: 'ProjectsCtrl',
    templateUrl: 'views/projects.html'
  })
  .state('bathroom', {
    url: '/bathroom',
    controller: 'ProjectsCtrl',
    templateUrl: 'views/bathroom.html'
  })
  .state('midiController', {
    url: '/midiController',
    controller: 'ProjectsCtrl',
    templateUrl: 'views/midi_controller.html'
  })
  .state('vynleWrap', {
    url: '/vynleWrap',
    controller: 'ProjectsCtrl',
    templateUrl: 'views/vynle_wrap.html'
  })
  .state('webFinal', {
    url: '/webFinal',
    controller: 'ProjectsCtrl',
    templateUrl: 'views/web_final.html'
  })
  .state('contact', {
    url: '/contactInfo',
    controller: 'ContactCtrl',
    templateUrl: 'views/contact.html'
  })
  .state('education', {
    url: '/educations',
    controller: 'EducationCtrl',
    templateUrl: 'views/education.html'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: 'views/resume.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
});