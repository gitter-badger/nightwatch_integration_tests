var loginUser = require('./loginUser').loginUser;

module.exports = {
		
		before : function(browser) {
			console.log('Setting up...');
			loginUser(browser);
			
		},
		
		
	after : function(browser) {
			console.log('Closing down...');
	},
	
	beforeEach: function(browser) {
		 browser
		      .pause(1000)
		      .useCss()
	},
		 		 
	'logoutUser' : function (browser) {
	
			
			
		browser
	   		.page.account().clickLogout()
	   		.page.account().verifyLogout()
	   		.end();
	   
  }
	

};
