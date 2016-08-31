var app = angular.module('myApp.education', ['ui.router']);

app.controller('EducationCtrl', function ($scope) {
  $scope.show = 'chico'
  $scope.schools = [
    {id:'chico', name:'Califonia State University Chico', dates:'2015 - 2017', degree:'B.S. in Computer Science'},
    {id:'butte', name:'Butte Community College', dates:'2014 - 2015', degree:'Transfer to CSU Chico'}
    //{id:'inspire', name:'Inspire School of Arts and Sciences', dates:'2011 - 2013', degree:'High School Diploma'}
  ]
  $scope.chicoCourses = [
    {number:'CSCI 311', name:'Algorithms and Data Structures', desc:'', grade:'C-', date:'Spring 2015'},
    {number:'CSCI 370', name:'Introduction to Databases', desc:'', grade:'A', date:'Summer 2015'},
    {number:'CINS 465', name:'Web Programming Fundamentals', desc:'', grade:'B', date:'Fall 2015'},
    {number:'CSCI 301', name:'Computers Impact on Society', desc:'', grade:'A', date:'Fall 2015'},
    {number:'CSCI 340', name:'Operating Systems', desc:'', grade:'B', date:'Fall 2015'},
    {number:'CSCI 430', name:'Software Engineering', desc:'', grade:'A-', date:'Fall 2015'},
    {number:'CSCI 580', name:'Artificial Intelligence', desc:'', grade:'A-', date:'Fall 2015'},
    {number:'RELS 332', name:'World Religion and Global Issues', desc:'', grade:'C+', date:'Fall 2015'},
    {number:'CDES 489', name:'Industry Internship - KCSC Radio', desc:'', grade:'A', date:'Spring 2016'},
    {number:'CSCI 446', name:'Intro to Computer Networks', desc:'', grade:'C+', date:'Spring 2016'},
    {number:'CSCI 515', name:'Compiler Design', desc:'', grade:'A-', date:'Spring 2016'},
    {number:'CINS 448', name:'Computer Security', desc:'', grade:'In Progress', date:'Fall 2016'},
    {number:'CSCI 444', name:'Fundamental UNIX System Administration', desc:'', grade:'In Progress', date:'Fall 2016'},
    {number:'CSCI 550', name:'Therory of Computing', desc:'', grade:'In Progress', date:'Fall 2016'},
    {number:'EECE 320', name:'System Architecture and Performance', desc:'', grade:'In Progress', date:'Fall 2016'},
    {number:'MATH 314', name:'Probability and Statistics', desc:'', grade:'In Progress', date:'Fall 2016'},
    {number:'CHEM 103', name:'Chemisty for Applied Sciences', desc:'', grade:'In Progress', date:'Fall 2016'},
  ]
  $scope.butteCourses = [
    {number:'POS 2', name:'U.S. Government', desc:'', grade:'B', date:'Fall 2013'},
    {number:'ENGL 2', name:'Reading and Composition', desc:'', grade:'A', date:'Fall 2013'},
    {number:'ECON 4', name:'Principals of Microeconomics', desc:'', grade:'A', date:'Fall 2013'},
    {number:'MATH 30', name:'Calculus I', desc:'', grade:'B', date:'Spring 2014'},
    {number:'HIST 10', name:'U.S. History 1877 - Present', desc:'', grade:'B', date:'Spring 2014'},
    {number:'ENGL 11', name:'Critical Thinking', desc:'', grade:'B', date:'Spring 2014'},
    {number:'ECON 20', name:'Economic History of the U.S.', desc:'', grade:'B', date:'Spring 2014'},
    {number:'CSCI 20', name:'Programming and Algorithms I', desc:'', grade:'A', date:'Spring 2014'},
    {number:'PHYS 41', name:'Physics for Engineering I', desc:'', grade:'C', date:'Fall 2014'},
    {number:'MCS 32', name:'The Aferican American', desc:'', grade:'A', date:'Fall 2014'},
    {number:'MATH 31', name:'Calculus II', desc:'', grade:'B', date:'Fall 2014'},
    {number:'CSCI 22', name:'Discrete Structures', desc:'', grade:'B', date:'Fall 2014'},
    {number:'CSCI 21', name:'Programming and Algorithms II', desc:'', grade:'A', date:'Fall 2014'},
    {number:'MUS 5', name:'American Popular Music', desc:'', grade:'B', date:'Spring 2015'},
    {number:'FN 2', name:'Nutrition', desc:'', grade:'A', date:'Spring 2015'},
    {number:'CSCI 10', name:'Computer Architecture / Organization', desc:'', grade:'A', date:'Spring 2015'},
    {number:'CMST 2', name:'Public Speaking', desc:'', grade:'B', date:'Spring 2015'},
  ]
});
