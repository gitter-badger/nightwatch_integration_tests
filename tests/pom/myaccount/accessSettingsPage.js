var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after : function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'accessSettingsPage' : function (browser) {
									
			browser
		   		.page.account().clickTradeLink()
		   		.page.account().clickMyAccountLink()
		   		.page.account().clickMySettings()
		   		.page.account().verifyMySettings()
		   		.end();
		   
	  }
		

};

