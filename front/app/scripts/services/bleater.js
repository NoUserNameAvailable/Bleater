'use strict';

/**
 * @ngdoc service
 * @name bleaterApp.bleater
 * @description
 * # bleater
 * Factory in the bleaterApp.
 */
angular.module('bleaterApp')
  .factory('bleater', function (urlServer, $http, $location) {

    var token = "";

    //todo chnager isLogged à false en prof
    var isLogged = true;

    var user = {
      name: null,
      email: null
    };

    var testIsLogged = function () {
      if (isLogged == false) {
        $location.path('/main')
        return false;
      }
      else {
        return true;
      }
    };

    // Public API here
    return {
      someMethod: function () {
        console.log(urlServer);
        return token;
      },

      getIsLogged: function () {
        return isLogged;
      },

      getToken: function () {
        return token;
      },

      setIsLogged: function () {
        isLogged = true;
        console.log(isLogged);
      },

      /**
       * Log le client
       * Si login OK, alors le tokken est récupéré
       * @param login
       * @param password
       */
      login: function (login, password) {
        var postData = {
          email: login,
          pass: password
        };

        $http({
          url: 'http://' + urlServer + '/rpc/login',
          method: "POST",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (data, status, headers, config) {
          console.log("login : " + data.token);
          isLogged = true;
          return true;
        }).error(function (data, status, headers, config) {
          console.log(data);
          isLogged = false;
          return false;
        });

      },

      signup: function (login, password) {
        if (testIsLogged() == true) {
          var postData = {
            email: login,
            pass: password
          }
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (response) {
            console.log(response);
            return response;
          });
        }
      },

      // Todo implémenter url GET et paramètres
      getBleat: function (idBleat) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "GET",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },


      /**
       * Rebleat un bleat. Le texte peut etre null.
       * @param idBleat obligatoire
       * @param text optionnel
       */
      //todo connexin serveur
      reBleat: function (idBleat, text) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      /**
       * Ajoute +1 à un bleat
       * Vérifier si utilisateur n'a pas déjà voté
       * Si déjà upVoté, retirer le upvote dans la BD
       * Sinon si séjà downvoté alors upvoté
       * @param idBleat
       */
      //todo bonne url
      upVote: function (idBleat) {
        if (testIsLogged() == false) {
          console.log("upvote false");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      /**
       * Ajoute -1 à un bleat
       * Fonctionnement identique à upVote
       * @param idBleat
       */
      //todo bonne url
      downVote: function (idBleat) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      /**
       * Modifir le mot de passe
       * @param oldPassword
       * @param newPassword
       */
      //todo bonne url
      setPassword: function (oldPassword, newPassword) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      //todo bonne url
      postBleat: function (text) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      //todo bonne url
      postResponseBleat: function (idBleat, stext) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {};
          $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            $location.path("/login");
            return true;
          }).error(function (data, status, headers, config) {
            console.log(data);
            return false;
          });
        }
      },

      //todo bonne url
      getBleats: function () {
        if (testIsLogged() == false) {
          console.log("getBleats");
        } else {
          var postData = {};
          return $http({
            url: 'http://' + urlServer + '/rpc/signup',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).then(function (response) {
            return reponse;
          }, function(response) {
            console.log(response);
            return response;
          });
        }
      }


    };
  });
