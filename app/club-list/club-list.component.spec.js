'use strict'

describe('clubList', function() {
	
	// load module that contains itemList component before each test
	beforeEach(module('clubList'));


	// Test the controller
	describe('ClubListController', function() {

		var $httpBackend, ctrl;

		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('clubs/clubs.json')
                  .respond([{full_name: 'Arsenal Football Club'}, {full_name: 'AFC Bournemouth'}]);



			ctrl = $componentController('clubList');

		}));

		

		it('should create a `clubs` property with 2 clubs fetched with `$http`', function() {

			jasmine.addCustomEqualityTester(angular.equals);

			expect(ctrl.clubs).toEqual([]);

			$httpBackend.flush();
			expect(ctrl.clubs).toEqual([{full_name: 'Arsenal Football Club'}, {full_name: 'AFC Bournemouth'}]);

		});


		it('should set a default value for the orderList property', function(){
			expect(ctrl.orderList).toBe('full_name');
		});
 	});
 });