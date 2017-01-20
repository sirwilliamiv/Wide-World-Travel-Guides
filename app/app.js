var app = angular.
module('worldGuide', ['ngRoute'])
.config( ($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: 'bookCtrl',
      templateUrl: 'guides.html'
    })
})
.controller('bookCtrl',function ($scope, $http, guideFactory) {

  guideFactory.getThebooks()
  .then((response) => {

   return $scope.books = response
  })



})


// Here's a list of some things to include in your app in the appropriate spots:

// Directives:
// ng-app="<your module name>"
// ng-controller="bookCtrl"
// ng-repeat="book in books"
// A call to the data folder for guides.json using $http
// Use the $q service to wrap your http call in a promise
// $scope.books = <your array of guide books data>
