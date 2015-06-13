var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after : function(browser) {
				console.log('Closing down...');
		},
		
		 
		'accessRandomsUpDownHigherLowerPage' : function (browser) {
									
			browser
				.page.account().clickTradeLink()
				.page.trades().clickStartTradingLink()
				.page.trades().clickRandomsLink()
				.page.randoms().clickHigherLowerLink()
				.page.randoms().verifyHigherLowerPage()
				.end();
		   
	  }
		

};
		 		 
	

