angular.
  module('clubDetail').
  component('clubDetail', {
    templateUrl: 'club-detail/club-detail.template.html',
    controller: ['$http','$routeParams',
      function ClubDetailController($http, $routeParams) {
      	var self = this;
        
      	$http.get('clubs/' + $routeParams.clubId + '.json').then(function(response) {
          self.club = response.data;
        });

      }
    ]
  });