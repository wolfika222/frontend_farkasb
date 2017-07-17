var routeApp = angular.module('routeApp', ['ngRoute']);

angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/home", {
                templateUrl : "/main.html"
            })
            .when("/movies", {
                templateUrl : "/movies.html"
            })
    });