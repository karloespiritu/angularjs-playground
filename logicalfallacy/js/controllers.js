var fallacyControllers = angular.module('fallacyControllers', []);

console.log("controllers called");

fallacyControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/fallacy.json').success(function(data) {
    $scope.fallacies = data;
    $scope.fallacyOrder = 'title';
  });
}]);

fallacyControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/fallacy.json').success(function(data) {
    $scope.fallacies = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.fallacies.length - 1;
    }

    if ($routeParams.itemId < $scope.fallacies.length - 1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });
}]);
