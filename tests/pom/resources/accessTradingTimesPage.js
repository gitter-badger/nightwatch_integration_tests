var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after : function(browser) {
				console.log('Closing down...');
		},
		


'accessTradingTimesPage' : function (browser) {
			
			browser
				.page.resources().clickResourcesLink()
				.page.resources().clickTradingTimesLink()
				.page.resources().verifyTradingTimesPage()
				.end();
		   
	  }
		
		
};