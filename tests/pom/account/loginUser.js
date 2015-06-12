var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;


module.exports = {
		
		before : function(browser) {
			console.log('Setting up...');
					
		},
		
		
	after : function(browser) {
			console.log('Closing down...');
	},
				 		 
	'loginUser' : function (browser, doNotEnd) {
		var username = "bijan@binary.com";
		var password = "test123";
			
		
	   	   browser
	   		.page.home().goToHome()
	   		.page.login().setLoginEmail(username)
	   		.page.login().setLoginPassword(password)
	   		.page.login().clickLogin()
	   		.page.account().verifyMyAccount()
	   			   		
	   		if (!doNotEnd) browser.end();
	   
  }
  
};