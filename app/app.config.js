angular.
  module('premierLeagueApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/clubs', {
          template: '<club-list></club-list>'
        }).
        when('/clubs/:clubId', {
          template: '<club-detail></club-detail>'
        }).
        otherwise('/clubs');
    }
]);