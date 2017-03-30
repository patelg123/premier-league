describe('clubList', function() {
	
	// load module that contains itemList component before each test
	beforeEach(module('clubList'));


	// Test the controller
	describe('clubListController', function() {

		var $httpBackend, ctrl;

		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('clubs/clubs.json')
                  .respond([{full_name: 'Arsenal Football Club'}, {full_name: 'AFC Bournemouth'}]);



			ctrl = $componentController('clubList');

		}));

		//it('should create a items model with 2 items', function() {
		//	expect(ctrl.clubs.length).toBe(2);

		it('should create a `clubs` property with 2 clubs fetched with `$http`', function() {
			expect(ctrl.clubs).toBeUndefined();

			$httpBackend.flush();
			expect(ctrl.clubs).toEqual([{full_name: 'Arsenal Football Club'}, {full_name: 'AFC Bournemouth'}]);

		});


		it('should set a default value for the orderList property', function(){
			expect(ctrl.orderList).toBe('full_name');
		});
 	});
 });