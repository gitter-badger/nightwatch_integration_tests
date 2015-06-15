//New client's statement shows only a credit of $10,000

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var viewStatement= require ('./viewStatement').viewStatement;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
				viewStatement(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'statementAmount': function (browser) {
									
			browser
		   		.page.account().verifyStatementAmount()
				.end();
		   
	  }
		

};
