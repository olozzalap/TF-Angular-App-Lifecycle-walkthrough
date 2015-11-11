var app = angular.module('travel-app', [ 
  'ui.router',
  ]).config( 
  	function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/list');

      $stateProvider
        .state('list', {
          url: '/list',
          templateUrl: 'list.html',
          controller: 'destController',
          resolve: {
            title: function() {
              return {value: "Follow the traveling data"}
            }
          }
        })
        .state('destination', {
          url: '/dest/:id',
          templateUrl: 'dest.html',
          controller: 'destController',
          resolve: {
            title: function() {
              return {value: "Traveling Spot"}
            }
          }
        })
    }.run( function() {
      console.log("Angular app running!");
    }).controller('destController', ['$scope', '$stateParams', 'title', function($scope, $stateParams, title){
    })
  )