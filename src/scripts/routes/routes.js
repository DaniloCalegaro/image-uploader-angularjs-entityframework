
function routesUploaderImage($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/templates/views/uploaderImage.html',
        controller: 'uploaderImageController'     
      })
      .when('/loading', {
          templateUrl: 'src/templates/views/loading.html',
          controller: 'loadingController'
      })
      .when('/fullload', {
          templateUrl: 'src/templates/views/fullload.html',
          controller: 'fullloadController'
      }).otherwise({
          redirectTo: '/'
      });
}
angular.module('app').config([
    '$routeProvider',
    routesUploaderImage
]);

