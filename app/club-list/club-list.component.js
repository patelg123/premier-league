// Register the ItemList component and associated controller and template
angular.
	module('clubList').
	component('clubList', {
		templateUrl: 'club-list/club-list.template.html', 
		controller: ['$http',
			function clubListController($http) {
				var self = this;
				self.orderList = "full_name";

				$http.get('clubs/clubs.json').then(function(response) {
        			self.clubs = response.data;
      			});			
			}
		]
	});


/*
	Full name 	Arsenal Football Club
Nickname(s) 	The Gunners
Founded 	1886; 131 years ago as Dial Square
Ground 	Emirates Stadium
Capacity 	60,432[2]
Owner 	Arsenal Holdings plc
Chairman 	Sir Chips Keswick
Manager 	Arsène Wenger
League 	Premier League
2015–16 	Premier League, 2nd
Website 	http://www.arsenal.com/



Full name 	AFC Bournemouth
Nickname(s) 	The Cherries, Boscombe
Short name 	AFCB
Founded 	1899; 118 years ago (as Boscombe FC)
Ground 	Dean Court
Capacity 	11,464[1]
Owner 	Maxim Demin
Chairman 	Jeff Mostyn
Manager 	Eddie Howe
League 	Premier League
2015–16 	Premier League, 16th
Website 	http://www.afcb.premiumtv.co.uk/

*/
