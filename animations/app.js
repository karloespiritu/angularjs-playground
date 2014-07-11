var app = angular.module('app', ['ngAnimate','ui.bootstrap']);

app.controller('MainController', function($scope) {

  $scope.val = 1;
  $scope.even = false;

  $scope.inc = function() {
    $scope.val += 1;
    $scope.even = $scope.val%2==0;
  }

  $scope.testClick = function() {
    console.log("test click5 button");
    $scope.val += 1;
    $scope.five = $scope.val%5==0;

  }

  $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];


});