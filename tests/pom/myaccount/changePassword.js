//Client can change password
var utils= require('../../../utils');
var randomStr= utils.randomStr(5);
var strPass= 'test' + randomStr(5);

var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;
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
