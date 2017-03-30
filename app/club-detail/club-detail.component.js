angular.
  module('clubDetail').
  component('clubDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.clubId}}</span>',
    controller: ['$routeParams',
      function ClubDetailController($routeParams) {
        this.clubId = $routeParams.clubId;
      }
    ]
  });