'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Premier League App', function() {

	it('should redirect `index.html` to `index.html#!/clubs', function() {
    	browser.get('index.html');
    	expect(browser.getLocationAbsUrl()).toBe('/clubs');
  	});



	describe('View: Club list', function() {

	 	beforeEach(function() {
	    	browser.get('index.html#!/clubs');
	  	});


	 	it('should filter the club list as a user types into the search box', function() {
	      var clubList = element.all(by.repeater('club in $ctrl.clubs'));
	      var query = element(by.model('$ctrl.query'));

	      expect(clubList.count()).toBe(2);

	      
	      query.sendKeys('Bournemouth');
	      expect(clubList.count()).toBe(1);



	      query.clear();
	      query.sendKeys('Arsenal');
	      expect(clubList.count()).toBe(1);

	      query.clear();
	      query.sendKeys('11464');
	      expect(clubList.count()).toBe(1);
		
	    });


		it('should be possible to control club order via the drop-down menu', function() {
		   	var queryField = element(by.model('$ctrl.query'));
		    var orderSelect = element(by.model('$ctrl.orderList'));
		    var nameOption = orderSelect.element(by.css('option[value="full_name"]'));
		    var clubNameColumn = element.all(by.repeater('club in $ctrl.clubs').column('club.full_name'));

		    function getNames() {
		    	return clubNameColumn.map(function(elem) {
		          return elem.getText();
		        });
		    }

		    queryField.sendKeys('A');   // Let's narrow the dataset to make the assertions shorter

		    expect(getNames()).toEqual([
		        'AFC Bournemouth',
		        'Arsenal Football Club'
		    ]);

		    nameOption.click();

		    expect(getNames()).toEqual([
		        'AFC Bournemouth',
		        'Arsenal Football Club'
		    ]);

	    });


		it('should render club specific links', function() {
  			var query = element(by.model('$ctrl.query'));
  			query.sendKeys('Arsenal');

  			element.all(by.css('.clubs li a')).first().click();
  			expect(browser.getLocationAbsUrl()).toBe('/clubs/Arsenal_FC');
		});

	});


	describe('View: Club detail', function() {

    	beforeEach(function() {
      		browser.get('index.html#!/clubs/AFC_Bournemouth');
    	});

    	it('should display placeholder page with `clubId`', function() {
      		expect(element(by.binding('$ctrl.club.full_name')).getText()).toBe('AFC Bournemouth');
    	});

  	});

});

