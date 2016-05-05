'use strict';

/**
 * @ngdoc function
 * @name bleaterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bleaterApp
 */
angular.module('bleaterApp')
  .controller('MainCtrl', function ($scope, bleater) {

    console.log(bleater.getIsLogged());

  });
