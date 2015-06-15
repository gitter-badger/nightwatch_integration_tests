//Client can change password
var utils= require('../../../utils');
var randomStr= utils.randomStr(2);
var strPass= 'test' + randomStr;

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var viewChangePassword= require ('./viewChangePassword').viewChangePassword;

module.exports = {
		
	before: function(browser) {
		console.log('Setting up...');
		createVirtualAccount(browser, true);
		viewChangePassword(browser, true);
	},
			
			
	after: function(browser) {
		console.log('Closing down...');
	},
		
				 		 
	'changePassword': function (browser) {
									
		browser
	   		.page.changePassword().changePassword(strPass)
			.page.changePassword().verifyChangePassword()
			
			.end();
		   
	}
		

};
