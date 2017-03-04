// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

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
    .when('/topic/:topicID', {
        templateUrl: '/partials/topic.html',
        controller: 'topicController'
    })
    .when('/user/:userID', {
        templateUrl: '/partials/user.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/login'
    });
});
