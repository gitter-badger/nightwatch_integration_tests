//New client can access Profit Table

var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'viewProfitTable': function (browser, doNotEnd) {
									
			browser
		   		.page.account().clickProfitTable()
		   		.page.account().verifyProfitTable()		   				
				if (!doNotEnd) browser.end();
		}
		

};
