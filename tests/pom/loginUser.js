var createAccount= require('./createAccount').createAccount;

var CONSTS = require('../../utils').CONSTS;


module.exports = {
		
		before : function(browser) {
			console.log('Setting up...');
					
		},
		
		
	after : function(browser) {
			console.log('Closing down...');
	},
	
	beforeEach: function(browser) {
		 browser
		      .pause(1000)
		      .useCss()
	},
		 		 
	'loginUser' : function (browser) {
		
	   	   browser
	   		.page.home().goToHome()
	   		.page.login().setLoginEmail("bijan@binary.com")
	   		.page.login().setLoginPassword( "test123")
	   		.page.login().clickLogin()
	   		.page.account().verifyMyAccount()
	   		//.end();
	   
  }
  
};