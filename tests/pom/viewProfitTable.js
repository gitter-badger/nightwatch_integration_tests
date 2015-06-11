var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'viewProfitTable': function (browser) {
									
			browser
		   		.page.account().clickProfitTable()
		   		.page.account().verifyProfitTable()
		   		
		   		//.end();
				if (!doNotEnd) browser.end();
		   
	  }
		

};
