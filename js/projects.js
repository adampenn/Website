var app = angular.module('myApp.projects', ['ui.router', 'bootstrapLightbox']);

app.controller('ProjectsCtrl', function ($scope, Lightbox) {
  $scope.allProjects = [
    {name:'Vynle Wrap', image:'vynleWrap/main.jpg', link:'vynleWrap'},
    {name:'Midi Controller', image:'midiController/main.jpg', link:'midiController'},
    {name:'Web Class Final Project', image:'webFinal/main.jpg', link:'webFinal'},
    {name:'Bathroom Remodel', image:'bathroom/29.jpg', link:'bathroom'}
  ];
  $scope.bathroomPics = [{reg:'10.jpg',small:'10.jpg.small'},{reg:'11.jpg',small:'11.jpg.small'},{reg:'12.jpg',small:'12.jpg.small'},{reg:'13.jpg',small:'13.jpg.small'},{reg:'14.jpg',small:'14.jpg.small'},{reg:'15.jpg',small:'15.jpg.small'},{reg:'16.jpg',small:'16.jpg.small'},{reg:'17.jpg',small:'17.jpg.small'},{reg:'18.jpg',small:'18.jpg.small'},{reg:'19.jpg',small:'19.jpg.small'},{reg:'1.jpg',small:'1.jpg.small'},{reg:'20.jpg',small:'20.jpg.small'},{reg:'21.jpg',small:'21.jpg.small'},{reg:'22.jpg',small:'22.jpg.small'},{reg:'23.jpg',small:'23.jpg.small'},{reg:'24.jpg',small:'24.jpg.small'},{reg:'25.jpg',small:'25.jpg.small'},{reg:'26.jpg',small:'26.jpg.small'},{reg:'27.jpg',small:'27.jpg.small'},{reg:'28.jpg',small:'28.jpg.small'},{reg:'29.jpg',small:'29.jpg.small'},{reg:'2.jpg',small:'2.jpg.small'},{reg:'30.jpg',small:'30.jpg.small'},{reg:'31.jpg',small:'31.jpg.small'},{reg:'32.jpg',small:'32.jpg.small'},{reg:'3.jpg',small:'3.jpg.small'},{reg:'4.jpg',small:'4.jpg.small'},{reg:'5.jpg',small:'5.jpg.small'},{reg:'6.jpg',small:'6.jpg.small'},{reg:'7.jpg',small:'7.jpg.small'},{reg:'8.jpg',small:'8.jpg.small'},{reg:'9.jpg',small:'9.jpg.small'}];

  $scope.images = [
    {
      'url':'public/images/bathroom/10.jpg',
      'thumbUrl':'10.jpg.small'
    },
    {
      'url':'public/images/bathroom/11.jpg',
      'thumbUrl':'11.jpg.small'
    },
    {
      'url':'public/images/bathroom/12.jpg',
      'thumbUrl':'12.jpg.small'
    },
    {
      'url':'public/images/bathroom/13.jpg',
      'thumbUrl':'13.jpg.small'
    },
    {
      'url':'public/images/bathroom/14.jpg',
      'thumbUrl':'14.jpg.small'
    },
    {
      'url':'public/images/bathroom/15.jpg',
      'thumbUrl':'15.jpg.small'
    },
    {
      'url':'public/images/bathroom/16.jpg',
      'thumbUrl':'16.jpg.small'
    },
    {
      'url':'public/images/bathroom/17.jpg',
      'thumbUrl':'17.jpg.small'
    },
    {
      'url':'public/images/bathroom/18.jpg',
      'thumbUrl':'18.jpg.small'
    },
    {
      'url':'public/images/bathroom/19.jpg',
      'thumbUrl':'19.jpg.small'
    },
    {
      'url':'public/images/bathroom/1.jpg',
      'thumbUrl':'1.jpg.small'
    },
    {
      'url':'public/images/bathroom/20.jpg',
      'thumbUrl':'20.jpg.small'
    },
    {
      'url':'public/images/bathroom/21.jpg',
      'thumbUrl':'21.jpg.small'
    },
    {
      'url':'public/images/bathroom/22.jpg',
      'thumbUrl':'22.jpg.small'
    },
    {
      'url':'public/images/bathroom/23.jpg',
      'thumbUrl':'23.jpg.small'
    },
    {
      'url':'public/images/bathroom/24.jpg',
      'thumbUrl':'24.jpg.small'
    },
    {
      'url':'public/images/bathroom/25.jpg',
      'thumbUrl':'25.jpg.small'
    },
    {
      'url':'public/images/bathroom/26.jpg',
      'thumbUrl':'26.jpg.small'
    },
    {
      'url':'public/images/bathroom/27.jpg',
      'thumbUrl':'27.jpg.small'
    },
    {
      'url':'public/images/bathroom/28.jpg',
      'thumbUrl':'28.jpg.small'
    },
    {
      'url':'public/images/bathroom/29.jpg',
      'thumbUrl':'29.jpg.small'
    },
    {
      'url':'public/images/bathroom/2.jpg',
      'thumbUrl':'2.jpg.small'
    },
    {
      'url':'public/images/bathroom/30.jpg',
      'thumbUrl':'30.jpg.small'
    },
    {
      'url':'public/images/bathroom/31.jpg',
      'thumbUrl':'31.jpg.small'
    },
    {
      'url':'public/images/bathroom/32.jpg',
      'thumbUrl':'32.jpg.small'
    },
    {
      'url':'public/images/bathroom/3.jpg',
      'thumbUrl':'3.jpg.small'
    },
    {
      'url':'public/images/bathroom/4.jpg',
      'thumbUrl':'4.jpg.small'
    },
    {
      'url':'public/images/bathroom/5.jpg',
      'thumbUrl':'5.jpg.small'
    },
    {
      'url':'public/images/bathroom/6.jpg',
      'thumbUrl':'6.jpg.small'
    },
    {
      'url':'public/images/bathroom/7.jpg',
      'thumbUrl':'7.jpg.small'
    },
    {
      'url':'public/images/bathroom/8.jpg',
      'thumbUrl':'8.jpg.small'
    },
    {
      'url':'public/images/bathroom/9.jpg',
      'thumbUrl':'9.jpg.small'
    }
  ];
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
    
});
