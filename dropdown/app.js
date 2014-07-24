var app = angular.module('app', ['ui.bootstrap']);

app.controller('MainController', function($scope) {

  $scope.selectedNotificationTypes = [
    {id: 'ALERT', name: 'Alert'},
    {id: 'TREND', name: 'Trend'},
    {id: 'TYPE3', name: 'TYPE3'}
  ];

  $scope.selectedNotificationData = {};
  $scope.selectedNotificationData.type="";

  $scope.selectedNotificationData.type = $scope.selectedNotificationTypes[0].name;

  $scope.setNotificationType = function(type) {
    $scope.selectedNotificationData.type = type;
    console.log("type = "+JSON.stringify($scope.selectedNotificationData.type));
    // $scope.selectType();
  };

});
