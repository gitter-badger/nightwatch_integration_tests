var utils = require('../../utils');
var randomStr = utils.randomStr(5),
//randomEmail = 'binarytest-' + randomStr + '@mailinator.com';
randomEmail = 'bijan@binary.com'
password = 'test123';

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
		 		 
	'createAccount' : function (browser) {
		   
	   	   browser
	   		.page.home().goToHome()
	   		.page.home().setAccEmail(randomEmail)
	   		.page.home().setAccPassword(password)
	   		.page.home().clickOpenAccount()
	   		.page.account().verifyMyAccount()
	   		.end();
	   	   
  }



};
