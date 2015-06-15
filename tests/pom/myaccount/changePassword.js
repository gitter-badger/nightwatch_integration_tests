//Client can change password
var utils= require('../../../utils');
var randomStr= utils.randomStr(2);
var strEmail= 'binarytest-' + randomStr + '@mailinator.com';
var strPass= 'test' + randomStr;
var strPassNew= 'test' + randomStr + 'new';

module.exports = {
		
	before: function(browser) {
		console.log('Setting up...');
	},
			
			
	after: function(browser) {
		console.log('Closing down...');
	},
		
				 		 
	'changePassword': function (browser) {
									
		browser
	   		.page.home().goToHome()
			.page.home().setAccEmail(strEmail)
			.page.home().setAccPassword(strPass)
			.page.home().clickOpenAccount()
			.page.account().verifyMyAccount()
			
			.page.account().clickPassword()
			.page.account().verifyPassword()
			.page.changePassword().changePassword(strPass, strPassNew)
			.page.changePassword().verifyChangePassword()
			
			.page.account().clickLogout()
			.page.account().verifyLogout()

			.page.home().goToHome()
			.page.login().setLoginEmail(strEmail)
			.page.login().setLoginPassword(strPassNew)
			.page.login().clickLogin()
			.page.account().verifyMyAccount()
			
			
		   
	}
		

};
