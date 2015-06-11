var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;
var loginUser = require('./loginUser').loginUser;
var logoutUser = require('./logoutUser').logoutUser;


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


