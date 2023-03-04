var app = angular.module("app", ["ngRoute"]);

app.controller("uploaderImageController", function ($scope) {
  $scope.app = "Tela 1";
  $scope.image = null;
  $scope.imageFileName = '';
  
  $scope.uploadme = {};
  $scope.uploadme.src = '';
})

