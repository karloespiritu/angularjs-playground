var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.photo = {
    url: "http://upload.wikimedia.org/wikipedia/en/4/49/Skull_of_Alexander_Pearce.jpg",
    date: "January 1, 2014"
  }
  $scope.callme = function(msg) {
    console.log('You gave me: '+msg);
  }

});
//not elegant way of writing directive
app.directive('old_photo', function () {
  return {
    restrict: 'AECM',
    //restrict: 'E',
    template: '<figure><img width="640px"/><figcaption/></figure>',
    replace: true,
    //params can be switch
    link: function (scope, element, attrs) {
      attrs.$observe('caption', function(value) {
        element.find('figcaption').text(value);
      });
      attrs.$observe('photoSrc', function(value) {
        element.find('img').attr('src', value);
      });
    }
  };
});

//elegant way of writing directive
app.directive('photo', function () {
  return {
    restrict: 'E',
    templateUrl: 'photo.html',
    replace: true,
    scope: {
      //same as $scope.caption
      //@ - one way data binding
      caption: '=capstring',
      photoSrc: '=',
      localFunc: '&'
    },
    controller: function($scope) {
      $scope.myData = "some data"
    }
  }
});