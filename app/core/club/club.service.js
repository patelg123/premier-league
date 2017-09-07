angular.
  module('core.club').
  factory('Club', ['$resource',
    function($resource) {
      return $resource('clubs/:clubId.json', {}, {
        query: {
          method: 'GET',
          params: {clubId: 'clubs'},
          isArray: true
        }
      });
    }
  ]);