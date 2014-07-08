var app = angular.module('myApp', []);

app.factory('Data', function () {

  return {
    title: "title text",
    message: "I'm a message from a service",
    date: "2014-01-29"
  }
})

app.controller('FirstCtrl',  function($scope, Data) {
  $scope.data = Data;
});

app.controller('SecondCtrl',  function($scope, Data) {
  $scope.data = Data;
});


