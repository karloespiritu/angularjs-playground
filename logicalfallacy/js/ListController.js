app.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/fallacy.json').success(function(data) {
    $scope.fallacies = data;
    $scope.fallacyOrder = 'title';
  });
}]);
