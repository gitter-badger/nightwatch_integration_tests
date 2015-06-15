//New client's Profit Table has no entries

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var viewProfitTable= require('./viewProfitTable').viewProfitTable;

module.exports = {
		
		before: function(browser) {
				console.log('Setting up...');
				createVirtualAccount(browser, true);
				viewProfitTable(browser, true);
		},
			
			
		after: function(browser) {
				console.log('Closing down...');
		},
		
				 		 
		'profitTableEntry': function (browser) {
									
			browser
		   		.page.account().verifyProfitTableEntry()
		   				   		
		   		.end();
		   
	  }
		

};
