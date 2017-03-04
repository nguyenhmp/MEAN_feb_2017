// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
    .when('/index', {
        templateUrl: '/partials/index.html',
    })
    .when('/registration', {
        templateUrl: '/partials/registration.html',
        controller: 'registrationController'
    })
    .when('/login', {
        templateUrl: '/partials/login.html',
        controller: 'loginController'
    })
    .when('/success/:id', {
        templateUrl: '/partials/success.html',
        controller: 'successController'
    })
    .otherwise({
        redirectTo: '/index'
    });
});
