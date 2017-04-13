angular.
  module('clubDetail').
  component('clubDetail', {
    templateUrl: 'club-detail/club-detail.template.html',
    controller: ['$routeParams', 'Club',
      function ClubDetailController($routeParams, Club) {
      	var self = this;
        
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

      	self.club = Club.get({clubId: $routeParams.clubId}, function(club) {
          self.setImage(club.images[0]);
        });

      }
    ]
  });