'use strict';

describe('clubDetail', function() {

  // Load the module that contains the `ClubDetail` component before each test
  beforeEach(module('clubDetail'));

  // Test the controller
  describe('ClubDetailController', function() {
    var $httpBackend, ctrl;

    var xyzClubData = {
        name: 'club xyz',
        images: ['image/url1.png', 'image/url2.png']
    };


    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('clubs/xyz.json').respond(xyzClubData);

      $routeParams.clubId = 'xyz';

      ctrl = $componentController('clubDetail');
    }));

    it('should fetch the club details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.club).toEqual({});

      $httpBackend.flush();
      expect(ctrl.club).toEqual(xyzClubData);
    });

  });

});
