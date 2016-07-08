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
      id: 3,
      email: '',
      login: ''
    };
    var userid = '';

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
          token = response.token;
          console.log(token);
          isLogged = true;
          $http({
            url: 'http://' + urlServer + '/users',
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }).success(function (response) {
            console.log(response);
            user.email = response[0].email;
            user.id = response[0].iduser;
            user.login = response[0].login;
            console.log(user);
          }).error(function (response) {

          });

        }).error(function (response) {
          //callback(response);
        });
      },
      userProperties: function () {
        return $http({
          url: 'http://' + urlServer + '/users',
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (response) {
          //console.log(response);
          user.email = response.email;
          user.id = response.iduser;
          //user.id = 3;
          user.login = response.login;
          userid = response.iduser;
          //console.log(userid);
        }).error(function (response) {

        });
      },

      userSetProperties: function (user1) {
        user = user1;
      },


      signup: function (login, email, password) {
        var postData = {
          login: login,
          email: email,
          pass: password
        };
        console.log(postData);
        return $http({
          url: 'http://' + urlServer + '/rpc/signup',
          method: "POST",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (data, status, headers, config) {
          $location.path("/bleats");
        }).error(function (response) {
          console.log(response);
        });
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
            "contenu": text,
            "isrebleat": true,
            "isresponse": false,
            "iswrite": false,
            "iduser": user.id,
            "author": user.email,
            "idbleatparent": idBleat
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


      postBleat: function (contenu) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {
            "contenu": contenu,
            "isrebleat": "false",
            "isresponse": "false",
            "iswrite": "true",
            "iduser": user.id,
            "login": user.login
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
            console.log(response);
          });
        }
      },

      //todo bonne url
      postResponseBleat: function (idBleat, text) {
        if (testIsLogged() == false) {
          console.log("getBleat");
        } else {
          var postData = {
            "contenu": text,
            "isrebleat": false,
            "isresponse": true,
            "iswrite": false,
            "iduser": user.id,
            "author": user.email,
            "idbleatparent": idBleat
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

          });
        }
      },

      getBleats: function () {
        var postData = {};
        console.log("id user" + user.id);
        return $http({
          url: 'http://' + urlServer + '/viewbleat?iduserfollow=eq.' + user.id,
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
          url: 'http://' + urlServer + '/bleat?iduser=eq.' + idprofile,
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

      follow: function(idfollow){
        var postData ={
          iduser : user.id,
          iduser_1: idfollow
        };

        return $http({
          url: 'http://' + urlServer + '/follow',
          method: "POST",
          data: postData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (response) {
        }).error(function (response) {
        });
      },

      getInfoProfile: function (iduser) {
        return $http({
          url: 'http://' + urlServer + '/usersimple?iduser=eq.'+iduser,
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }).success(function (response) {
        }).error(function (response) {
        });s
      }


    };
  });
