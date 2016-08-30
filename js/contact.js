var app = angular.module('myApp.contact', ['ui.router']);

app.controller('ContactCtrl', ['$scope', function ($scope) {
  $scope.contacts = [
    {link:'https://github.com/adampenn', image:'github-contact-page.png', desc:'Fork me on Github'},
    {link:'https://www.linkedin.com/in/adam-j-penn-2aab9425', image:'linkedin-contact-page.png', desc:'Connect with me on LinkedIn'},
    {link:'mailto:me@adampenn.com', image:'email-contact-page.png', desc:'Email me at Me@AdamPenn.com'},
    {link:'tel:+15305207331', image:'call-contact-page.png', desc:'Call me at (530) 520-7331'},
    {link:'https://www.facebook.com/AdamJohnathanPenn', image:'facebook-contact-page.png', desc:'Friend me on Facebook'},
    {link:'https://www.instagram.com/adamjohnathanpenn/', image:'instagram-contact-page.png', desc:'Follow me on Instagram'}

  ]
}]);