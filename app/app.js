angular.
module('worldGuide', ['ngRoute'])
.config( ($routeProvider) => {
    $routeProvider
    .when('/', {
      controller: 'bookCtrl',
      templateUrl: 'guides.html'
    })
})
.controller('bookCtrl',function ($scope) {

  $scope.hello = "HELLOOWWWWWWWW"
})
