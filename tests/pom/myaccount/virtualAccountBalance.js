//New client has $10,000 in virtual currency

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var viewPortfolio= require('./viewPortfolio').viewPortfolio;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
				viewPortfolio(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'virtualAccountBalance': function (browser) {
									
			browser
		   		.page.account().verifyVirtualBalance()
		  		.end();
		   
	  }
		

};
