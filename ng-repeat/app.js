var app = angular.module('app', []);

app.controller('MainController', function ($scope) {
  $scope.myArr = [1,2,3,4,5,5,6,7,8,9];

  $scope.users = [{name:"Mike",age:23},{name:"andy",age:34},{name:"tom",age:45}, {name:"karlo",age:10}];

  $scope.ob = {name: "capri", age: 23, title: "Ms." };

});