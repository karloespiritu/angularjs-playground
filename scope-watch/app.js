var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.mydata = {val: "karlo"}

  $scope.$watch('mydata.val', function(newval) {
    console.log('got here');
    $scope.mydata.toolong = newval.length > 15;
  });

});