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
        })
        .state('destination', {
          url: '/dest/:id',
          templateUrl: 'dest.html',
          controller: 'destController',
        })
    }	
  )