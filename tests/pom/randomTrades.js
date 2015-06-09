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
		 		 
	'randomTrades' : function (browser) {
		
		browser
			//.page.trades().goToStartTrading()
	   		.page.trades().clickStartTradingLink()
	   		.page.trades().clickRandomsLink()
	   		.end();
		
		
	   
  }
	

};