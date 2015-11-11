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
      $scope.all_dests = [{id: 1, location: "Berlin", cost: "$472", img: "http://www.telegraph.co.uk/travel/destination/article128328.ece/ALTERNATES/w620/berlin.jpg"}, {id: 2, location: "Hong Kong", cost: "$1312", img: "http://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3675/SITours/hong-kong-harbor-night-cruise-and-dinner-at-victoria-peak-in-hong-kong-114436.jpg"}, {id: 3, location: "London", cost: "$650", img: "http://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"}];
      $scope.dest_id = $stateParams.id;

      $scope.title = title.value;
    })
  )