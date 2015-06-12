var utils = require('../../../utils');


module.exports = {
		
	before : function(browser) {
			console.log('Setting up...');
	},
				
	after : function(browser) {
			console.log('Closing down...');
	},
	
	
		 		 
	'createVirtualAccount' : function (browser, doNotEnd) {
		
		var randomStr = utils.randomStr(5),
		randomEmail = 'binarytest-' + randomStr + '@mailinator.com';
		password = 'test123';
		   
	   	   browser
	   		.page.home().goToHome()
	   		.page.home().setAccEmail(randomEmail)
	   		.page.home().setAccPassword(password)
	   		.page.home().clickOpenAccount()
	   		.page.account().verifyMyAccount()
	   		//.end();
	   	   
	   		if (!doNotEnd) browser.end();
  }



};
