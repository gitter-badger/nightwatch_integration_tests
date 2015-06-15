var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var CONSTS = require('../../../utils').CONSTS;
var username = "bijan@binary.com"
var password = "test123"

module.exports = {
		
		before : function(browser) {
			console.log('Setting up...');
					
		},
		
		
	after : function(browser) {
			console.log('Closing down...');
	},
	
			 		 
	'loginUser' : function (browser, doNotEnd) {
		
	   	   browser
	   		.page.home().goToHome()
	   		.page.login().setLoginEmail(username)
	   		.page.login().setLoginPassword(password)
	   		.page.login().clickLogin()
	   		.page.account().verifyMyAccount()
	   		//.end();
	   		
	   		if (!doNotEnd) browser.end();
	   
  }
  
};
