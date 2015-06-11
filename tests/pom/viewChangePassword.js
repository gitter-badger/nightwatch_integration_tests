//Client can access Change Password page

var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'viewChangePassword': function (browser, doNotEnd) {
									
			browser
		   		.page.account().clickPassword()
		   		.page.account().verifyPassword()
		   		
		   		//.end();
				if (!doNotEnd) browser.end();		   
	  }
		

};
