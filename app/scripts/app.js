'use strict';

/**
 * @ngdoc overview
 * @name pcTp01App
 * @description
 * # pcTp01App
 *
 * Main module of the application.
 */
angular
  .module('pcTp01App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
