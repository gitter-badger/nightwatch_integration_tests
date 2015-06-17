var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after : function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'accessCommoditiesTradingPage' : function (browser) {
									
			browser
				.page.account().clickTradeLink()
				.page.trades().clickStartTradingLink()
				.page.trades().clickCommoditiesLink()
				.page.trades().verifyCommoditiesPage()
				.end();
		   
	  }
		

};
		 		 
	
