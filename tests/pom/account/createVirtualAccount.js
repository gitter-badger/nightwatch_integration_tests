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
		email = 'binarytest-' + randomStr + '@mailinator.com',
		password = 'test123';
		   
	   	   browser
	   		.page.home().goToHome()
	   		.createVirtualAccount(email,password)
	   		.page.account().verifyMyAccount()
	   		
	   		if (!doNotEnd) browser.end();
	   		
	   	   
	   		
  }



};
