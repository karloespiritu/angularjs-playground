var app = angular.module('app', [
  'ngRoute',
  'fallacyControllers'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'templates/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'templates/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

var fallacyControllers = angular.module('app.controllers', []);