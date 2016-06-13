'use strict';

/**
 * @ngdoc function
 * @name bleaterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bleaterApp
 */
angular.module('bleaterApp')
  .controller('AboutCtrl', function (urlServer, $scope, bleater) {

    console.log("url du serveur :" + urlServer);

    $scope.test = "hello";

    console.log(bleater.login('lol@lol.fr', 'lol'));

    $scope.postBleat = function (text){

    };

    $scope.postReBleat = function (idBleat, text){

    };

    $scope.postResponse = function (idBleat, text){

    };

    $scope.showBleat = function(idBleat){

    };



  });
