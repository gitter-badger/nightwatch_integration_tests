var loginUser = require('./loginUser').loginUser;

module.exports = {
		
	before : function(browser) {
			console.log('Setting up...');
			loginUser(browser, true);
			
	},
				
	after : function(browser) {
			console.log('Closing down...');
	},
				 		 
	'logoutUser' : function (browser) {
						
		browser
	   		.page.account().clickLogout()
	   		.page.account().verifyLogout()
	   		.end();
	   
  }
	

};
