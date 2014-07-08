var app = angular.module('app', ['ui.bootstrap']);

app.controller('MainController', function($scope) {
  $scope.selectedNotificationTypes = [
    {id: 'action1', name: 'Alert'},
    {id: 'action2', name: 'Trend'},
    {id: 'action3', name: 'Abbjbj'}
  ];
  $scope.selectedNotificationType = $scope.selectedNotificationTypes[0];
  $scope.setNotificationType = function(type) {
    $scope.selectedNotificationType = type;
    $scope.selectType();
  };
  $scope.selectType = function() {
    console.log($scope.selectedNotificationType.id);
  };
});
