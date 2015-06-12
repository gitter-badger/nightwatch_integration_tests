var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after : function(browser) {
				console.log('Closing down...');
		},
		


		 'accessTradingGuidePage' : function (browser) {
				
				browser
					.page.resources().clickResourcesLink()
					.page.resources().clickTradingGuideLink()
					.page.resources().verifyTradingGuidePage()
					.end();
			   
		  }
		
		
};