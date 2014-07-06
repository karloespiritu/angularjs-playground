var app = angular.module('app', []);

app.controller('MainController',  function($scope) {
  $scope.classVar = true;
});

app.controller('SubController',  function($scope) {
  $scope.classVar = true;
});

