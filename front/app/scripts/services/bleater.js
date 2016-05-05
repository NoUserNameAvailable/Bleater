'use strict';

/**
 * @ngdoc service
 * @name bleaterApp.bleater
 * @description
 * # bleater
 * Factory in the bleaterApp.
 */
angular.module('bleaterApp')
  .factory('bleater', function () {


    var token = "hellonoob";

    var isLogged = false;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      getIsLogged: function(){
        return isLogged;
      },

      getToken: function(){
        return token;
      },

      setIsLogged: function(){
        isLogged = true;
        console.log(isLogged);
      }

    };
  });
