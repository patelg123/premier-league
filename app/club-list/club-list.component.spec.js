describe('clubList', function() {
	
	// load module that contains itemList component before each test
	beforeEach(module('clubList'));


	// Test the controller
	describe('clubListController', function() {

		var ctrl;

		beforeEach(inject(function($componentController) {
			ctrl = $componentController('clubList');

		}));

		it('should create a items model with 2 items', function() {
			expect(ctrl.clubs.length).toBe(2);
		});

		it('should set a default value for the orderList model', function(){
			expect(ctrl.orderList).toBe('full_name');
		});
 	});
 });