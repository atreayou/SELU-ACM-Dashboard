'use strict';

var app = angular.module('dashboard', ['ui.router', 'ngResource'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url             : '/home'
    ,   templateUrl     : 'views/home.html'
    ,   controller      : 'HomeCtrl'
    })
    .state('resumes', {
        url             : '/resumes'
    ,   templateUrl     : 'views/resumes.html'
    ,   controller      : 'ResumesCtrl'
    })
    .state('login', {
        url             : '/login'
    ,   templateUrl     : 'views/login.html'
    ,   controller      : 'LoginCtrl'
    });
    $urlRouterProvider.otherwise('/home');
}])

.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}])

.controller('HomeCtrl', ['$scope', function ($scope) {
    $scope.message = 'we made it';   
}])

.controller('ResumesCtrl', ['$scope', function ($scope) {
    $scope.message = 'we made it';   
}])

.controller('LoginCtrl', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService',
    function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username : ''
    ,   password : ''
    }
}])