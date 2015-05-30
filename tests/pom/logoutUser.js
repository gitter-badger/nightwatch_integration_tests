var loginUser = require('./loginUser').loginUser;

module.exports = {
		 		 
	'logoutUser' : function (browser) {
	
			
			loginUser(browser);
		
		browser
	   		.page.myaccount().clickLogout()
	   		.page.myaccount().verifyLogout()
	   		.end();
	   
  }
	

};
