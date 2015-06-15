var loginUser = require('../account/loginUser').loginUser;

module.exports = {
		
		before : function(browser) {
			console.log('Setting up...');
			loginUser(browser);
			
		},
		
		
	after : function(browser) {
			console.log('Closing down...');
	},
	
	
		 		 
	'randomTrades' : function (browser) {
		
		browser
			//.page.trades().goToStartTrading()
	   		.page.trades().clickStartTradingLink()
	   		.page.trades().clickRandomsLink()
	   		.end();
		
		
	   
  }
	

};
