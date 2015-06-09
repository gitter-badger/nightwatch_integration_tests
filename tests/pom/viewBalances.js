var loginUser = require('./loginUser').loginUser;

require('../../commands/loginUrl')

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
			 		 
	'viewBalances' : function (browser) {
		
		browser
			.page.account().clickViewBalances()
			.page.account().verifyBalances()
			.page.account().clickContinueTrading()
	   		.end();
	   
  }
	

};