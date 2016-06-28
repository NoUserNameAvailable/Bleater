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

    //todo chnager isLogged à false en prod
    var isLogged = false;

    var user = {
      id: '1',
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
      login: function (login, password, callback) {
        var postData = {
          email: login,
          pass: password
        };
        return $http({
          url: 'http://' + urlServer + '/rpc/login',
          method: "POST",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (response) {
          user.email = login;
          user.id = 1;
          token = response.token;
          console.log(token);
          isLogged=true;
          //callback(response);
        }).error(function (response) {
          //callback(response);
        });
      },
      /*login: function (login, password) {
        var postData = {
          email: login,
          pass: password
        };
        var promise = $http({
          url: 'http://' + urlServer + '/rpc/login',
          method: "POST",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).then(function (response) {
          token = response.token;
          console.log(token);
          return response;
          callback(response);
        },function (response) {
          return response;
        });
        return promise;
      },*/

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
      postReBleat: function (idBleat, text) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {
            "contenu" : text,
            "isrebleat" : true,
            "isresponse" : false,
            "iswrite" : true,
            "iduser" : user.id,
            "author" : user.email,
            "idbleatparent" : idBleat
          };
          return $http({
            url: 'http://' + urlServer + '/bleat',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (data, status, headers, config) {
            return true;
          }).error(function (data, status, headers, config) {
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


      postBleat: function (contenu, isrebleat, isresponse, iswrite) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {
            "contenu" : contenu,
            "isrebleat" : isrebleat,
            "isresponse" : isresponse,
            "iswrite" : iswrite,
            "iduser" : user.id,
            "author" : user.email
          };
          return $http({
            url: 'http://' + urlServer + '/bleat',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (response) {

          }).error(function (response) {
            console.log(data);
          });
        }
      },

      //todo bonne url
      postResponseBleat: function (idBleat, text) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {
            "contenu" : text,
            "isrebleat" : false,
            "isresponse" : true,
            "iswrite" : false,
            "iduser" : user.id,
            "author" : user.email,
            "idbleatparent" : idBleat
          };
          return $http({
            url: 'http://' + urlServer + '/bleat',
            method: "POST",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (response) {
          }).error(function (response) {;
          });
        }
      },

      //todo bonne url
      getBleats: function () {
          var postData = {};
          return $http({
            url: 'http://' + urlServer + '/test_getbleats?iduserfollow=eq.'+user.id,
            method: "GET",
            data: postData,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (response) {
            return response;
          }).error(function (response) {
            return response;
          });
      },


      getBleatsProfile: function (idprofile) {
        var postData = {};
        return $http({
          url: 'http://' + urlServer + '/test_getbleats?iduserfollow=eq.'+user.id,
          method: "GET",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (response) {
          return response;
        }).error(function (response) {
          return response;
        });
      }




    };
  });
