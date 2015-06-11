//New client can access Statement

var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'virtualAccountBalance': function (browser) {
									
			browser
		   		.page.account().clickStatement()
		   		.page.account().verifyStatement()
		   		.end();
		   
	  }
		

};
