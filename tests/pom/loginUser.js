var createAccount= require('./createAccount').createAccount;

var CONSTS = require('../../utils').CONSTS;


module.exports = {
		 		 
	'loginUser' : function (browser) {
		
				
		createAccount(browser);
		//   var randomEmail = createAccount.email;
		//   var password = createAccount.pwd;
	   	   browser
	   		.page.home().goToHome()
	   		.page.login().setLoginEmail("bijan2007@gmail.com")
	   		.page.login().setLoginPassword( "test1234")
	   		.page.login().clickLogin()
	   		.page.myaccount().verifyMyAccount()
	   		.end();
	   
  }
	

};