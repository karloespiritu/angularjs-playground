//Services are singletons
var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, myService, myService2) {

  $scope.testdata = myService.whateverdata;
  console.log(myFactory.getData());
  myFactory.addData('blah blah blah');
  console.log(myFactory.getData());

  console.log(myService.getData());
  myService.addData('From service: blah blah blah');
  console.log(myService.getData());
});

//
app.factory('myFactory', function () {
  var myString = "this is some other data";
  var addToString = function(newStr) {
    myString += newStr;
  }
  return {
    getData: function() {
      return "String constains: " + myString;
    },
    addData: addToString
  }
});

//a new instance of a class is declared when  when service is utilized
//we expose class attibutes when using a service
////efectively defining a class
app.service('myService', function() {
  var myString = "this is some other data";
  var addToString = function(newStr) {
    myString += newStr;
  }
  this.whateverdata = "123";
  this.getData = function() {
      return "String constains: " + myString;
    },
  this.addData = addToString;

});

/* Alternative declaration of myService2 factory*/
// app.factory('myService2', function () {
//   return new ServiceClass();
// });

//this type of declaration is used mainly if you're using CoffeeScript
app.factory('myService2', ServiceClass);

function ServiceClass() {
  var myString = "this is some other data";
  var addToString = function(newStr) {
    myString += newStr;
  }
  this.whateverdata = "123";
  this.getData = function() {
      return "String constains: " + myString;
    },
  this.addData = addToString;
}
