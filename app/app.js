angular.
module('worldGuide', ['ngRoute'])
.config( ($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: 'bookCtrl',
      templateUrl: 'guides.html'
    })
})
.controller('bookCtrl',function ($scope, $http) {

  $scope.hello = "HELLOOWWWWWWWW"
  // $scope.getThedata = factoryname.whatever
  // .then($scope.data = stuff returned from factory)
  $http
    .get('/data/guides.json')
    .then((response) => {
      $scope.books = response.data.guides
      console.log(response)
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
