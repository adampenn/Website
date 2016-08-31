var app = angular.module('myApp.projects', ['ui.router', 'bootstrapLightbox']);

app.controller('ProjectsCtrl', function ($scope) {
  $scope.allProjects = [
    {name:'Vynle Wrap', image:'vynleWrap/main.jpg', link:'vynleWrap'},
    {name:'Midi Controller', image:'midiController/main.jpg', link:'midiController'},
    {name:'Web Class Final Project', image:'webFinal/main.jpg', link:'webFinal'},
    {name:'Bathroom Remodel', image:'bathroom/29.jpg', link:'bathroom'}
  ];
  $scope.bathroomPics = [{reg:'10.jpg',small:'10.jpg.small'},{reg:'11.jpg',small:'11.jpg.small'},{reg:'12.jpg',small:'12.jpg.small'},{reg:'13.jpg',small:'13.jpg.small'},{reg:'14.jpg',small:'14.jpg.small'},{reg:'15.jpg',small:'15.jpg.small'},{reg:'16.jpg',small:'16.jpg.small'},{reg:'17.jpg',small:'17.jpg.small'},{reg:'18.jpg',small:'18.jpg.small'},{reg:'19.jpg',small:'19.jpg.small'},{reg:'1.jpg',small:'1.jpg.small'},{reg:'20.jpg',small:'20.jpg.small'},{reg:'21.jpg',small:'21.jpg.small'},{reg:'22.jpg',small:'22.jpg.small'},{reg:'23.jpg',small:'23.jpg.small'},{reg:'24.jpg',small:'24.jpg.small'},{reg:'25.jpg',small:'25.jpg.small'},{reg:'26.jpg',small:'26.jpg.small'},{reg:'27.jpg',small:'27.jpg.small'},{reg:'28.jpg',small:'28.jpg.small'},{reg:'29.jpg',small:'29.jpg.small'},{reg:'2.jpg',small:'2.jpg.small'},{reg:'30.jpg',small:'30.jpg.small'},{reg:'31.jpg',small:'31.jpg.small'},{reg:'32.jpg',small:'32.jpg.small'},{reg:'3.jpg',small:'3.jpg.small'},{reg:'4.jpg',small:'4.jpg.small'},{reg:'5.jpg',small:'5.jpg.small'},{reg:'6.jpg',small:'6.jpg.small'},{reg:'7.jpg',small:'7.jpg.small'},{reg:'8.jpg',small:'8.jpg.small'},{reg:'9.jpg',small:'9.jpg.small'}]

});
