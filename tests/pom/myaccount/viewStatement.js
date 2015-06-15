//New client can access Statement

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'viewStatement': function (browser, doNotEnd) {
									
			browser
		   		.page.account().clickStatement()
		   		.page.account().verifyStatement()
		   		if (!doNotEnd) browser.end();
		   
	  }
		

};
