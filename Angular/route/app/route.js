var routeApp = angular.module('routeApp', ['ngRoute']);

angular.module('routeApp')
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl : "main.html"
            })
            .when("/red", {
                templateUrl : "colors/red.html"
            })
            .when ("/green", {
                templateUrl : "colors/green.html"
            })
            .when ("/blue", {
                templateUrl : "colors/blue.html"
            })
    });