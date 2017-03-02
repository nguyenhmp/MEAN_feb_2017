// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: '/partials/login.html',
        controller: 'loginController'
    })
    .when('/dashboard/:name', {
        templateUrl: '/partials/dashboard.html',
        controller: 'dashboardController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
