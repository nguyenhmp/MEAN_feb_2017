// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

var app = angular.module('app', ['ngRoute']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
    .when('/index', {
        templateUrl: '/partials/index.html',
        controller: 'indexController'
    })
    .when('/new', {
        templateUrl: '/partials/new.html',
        controller: 'newController'
    })
    .when('/edit/:id', {
        templateUrl: '/partials/edit.html',
        controller: 'editController',
        controllerAs: 'editController'
    })
    .when('/show/:id', {
        templateUrl: '/partials/show.html',
        controller: 'showController'
    })
    .otherwise({
        redirectTo: '/index'
    });
});
