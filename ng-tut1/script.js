// Code goes here

var ngExampleApp = angular.module('ngExampleApp', []);

ngExampleApp.controller('ngExampleCtrl', function ($scope, $http) {
  $scope.users = [
    {'name': 'Saleh',
     'snippet': 'Java.'},
    {'name': 'Ali',
     'snippet': 'C#'},
    {'name': 'Hasan',
     'snippet': 'AQL'}
  ];
  
  $scope.getGitInfo = function () {
   $scope.userNotFound = false;
   $scope.loaded = false;
 
   $http.get("https://api.github.com/users/" + $scope.username)
      .success(function (data) {
         $scope.user = data;
         $scope.loaded = true;
      })
      .error(function(data, status) {
        console.log('ERROR');
        $scope.data = data || "Request failed";
        $scope.status = status;
        $scope.userNotFound = true;
    });
         
         

}
});