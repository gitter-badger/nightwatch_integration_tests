var utils = require('../../utils');
var randomStr = utils.randomStr(5),
randomEmail = 'binarytest-' + randomStr + '@mailinator.com';
password = 'test123';

module.exports = {
		 		 
	'createAccount' : function (browser) {
		   
	   	   browser
	   		.page.home().goToHome()
	   		.page.home().setAccEmail(randomEmail)
	   		.page.home().setAccPassword(password)
	   		.page.home().clickOpenAccount()
	   		.page.myaccount().verifyMyAccount()
	   		.end();
	   	   
	   	   //return email = randomEmail;
	   	   //return pwd = password;
	   	 
  }



};
