var utils = require('../../utils');

module.exports = {
		 		 
	'Create Virtual Account' : function (browser) {
		   var randomStr = utils.randomStr(5),
	       randomEmail = 'binarytest-' + randomStr + '@mailinator.com';
		   password = 'test123'
	   	   browser
	   		.page.home().goToHome()
	   		.page.home().setUsername(randomEmail)
	   		.page.home().setPassword(password)
	   		.page.home().clickOpenAccount()
	   		.page.home().verifyUserIsCreated()
	   		.end();
	   
	   
  }
};
