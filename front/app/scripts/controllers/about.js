'use strict';

/**
 * @ngdoc function
 * @name bleaterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bleaterApp
 */
angular.module('bleaterApp')
  .controller('AboutCtrl', function ($scope, bleater) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log(bleater.setIsLogged());
  });
