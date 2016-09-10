<!doctype html>
<html>
  <head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.js"></script>
    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.3.2.js"></script>
    <script src="components/angular-ui-router.js"></script>
    <link rel="stylesheet" href="public/stylesheets/styles.css">
    <script src="components/angular-bootstrap-lightbox.js"></script>
    <script src="js/app.js"></script>
    <script src="js/projects.js"></script>
    <script src="js/contact.js"></script>
    <script src="js/education.js"></script>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="components/angular-bootstrap-lightbox.css">
    <!--<link rel="stylesheet" href="style.css">-->
</head>
  <body ng-app="myApp">
    <nav style="margin-bottom: 0;" class="navbar navbar-custom">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a class="navbar-brand" ui-sref='about'>Adam J. Penn</a></li>
          <li><a ui-sref="projects">Projects</a></li>
          <li><a ui-sref="contact">Contact Info</a></li>
          <li><a ui-sref='education'>Education</a></li>
          <li><a ui-sref="resume">Resume</a></li>
          <li><a href="https://www.linkedin.com/in/adam-j-penn-2aab9325" target="blank">LinkedIn</a></li>
          <li><a ui-sref='about'>About Me</a></li>
        </ul>
      </div>
    </nav>
    <div ui-view>if you are seeing this something is most likely broken. Feel free to call or text me to let me know 530 520 7331</div>
  </body>
</html>
