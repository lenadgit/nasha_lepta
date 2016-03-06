'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('MainCtrl', ['$scope', '$location', 'uiGmapGoogleMapApi', 'Lightbox',
    function ($scope, $location, uiGmapGoogleMapApi, Lightbox) {

      //return current location to find out which button to show
      $scope.location = function () {
        return $location.path();
      };

      // for the map
      uiGmapGoogleMapApi.then(function (maps) {
      });

      $scope.map = {
        center: {
          latitude: 50.443780,
          longitude: 30.469639
        },
        draggable: true,
        zoom: 12
      };
// map options
      $scope.options = {
        scrollwheel: true
      };

      $scope.marker1 = {
        id: 0,
        coords: {
          latitude: 50.427852,
          longitude: 30.527468
        },
        options: {
          draggable: false,
          title: 'Церква святителя Миколая Чудотворця',
          animation: 1 // 1: BOUNCE, 2: DROP
        }
      };
      $scope.marker2 = {
        id: 1,
        coords: {
          latitude: 50.454456,
          longitude: 30.362693
        },
        options: {
          draggable: false,
          title: 'Церква на честь Казанської ікони Божої Матері',
          animation: 1 // 1: BOUNCE, 2: DROP
        }
      };


    //  lightbox configuration

      $scope.openLightboxModal = function (url) {
        var array = [url];
        console.log(array);
        Lightbox.keyboardNavEnabled=false;
        Lightbox.openModal(array, 0);
      };
    }]);
