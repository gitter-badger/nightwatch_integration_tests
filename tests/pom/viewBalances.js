var loginUser = require('./loginUser').loginUser;

module.exports = {
		 		 
	'viewBalances' : function (browser) {
		
		//loginUser(browser);
		browser
			.page.myaccount().goToMyAccount()
	   		.page.myaccount().clickViewBalances()
	   		.end();
	   
  }
	

};