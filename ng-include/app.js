var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', function($scope) {

  $scope.templates =
     [ { name: 'template1', url: 'template1.html'},
       { name: 'template2', url: 'template2.html'} ];

  $scope.template = '';

  $scope.loadTemplate = function(index) {
     $scope.template = $scope.templates[index];
  }

});