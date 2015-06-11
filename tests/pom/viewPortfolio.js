var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'viewPortfolio': function (browser) {
									
			browser
		   		.page.account().clickPortfolio()
		   		.page.account().verifyPortfolio()
		   		
		   		//.end();
				if (!doNotEnd) browser.end();
		   
	  }
		

};
