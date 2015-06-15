var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
//var loginUser = require('../account/loginUser').loginUser;
//var logoutUser = require('../account/logoutUser').logoutUser;


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
		   		.page.account().clickMyAccountLink()
				.page.account().verifyMyAccount()
		   		.page.account().clickMySettings()
		   		.page.account().verifyMySettings()
		   		.end();
		   
	  }
		

};


