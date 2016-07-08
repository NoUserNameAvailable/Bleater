'use strict';

/**
 * @ngdoc function
 * @name bleaterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bleaterApp
 */
angular.module('bleaterApp')
  .controller('MainCtrl', function ($scope, bleater, Notification) {

    console.log(bleater.getIsLogged());

    $scope.postSignup = function (login, email, password){
      bleater.signup(login, email, password)
        .success(function (response) {
          Notification("Compte créé !"+(login));
        })
        .error(function (response) {
          Notification.warning({title: "Erreur", message: "Impossible de créer le comtpe"});
        });
    };

  });
