var app = angular.module('myApp', []);

app.factory('Data', function () {

  return {
    message: "I'm a message from a service"
  }
})

app.controller('FirstCtrl',  function($scope, Data) {
  $scope.data = Data;
});

app.controller('SecondCtrl',  function($scope, Data) {
  $scope.data = Data;
});


