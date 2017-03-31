'use strict';

describe('clubDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('clubDetail'));

  // Test the controller
  describe('ClubDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('clubs/Arsenal_FC.json').respond({full_name: 'Arsenal Football Club'});

      $routeParams.clubId = 'Arsenal_FC';

      ctrl = $componentController('clubDetail');
    }));

    it('should fetch the club details', function() {
      expect(ctrl.club).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.club).toEqual({full_name: 'Arsenal Football Club'});
    });

  });

});
