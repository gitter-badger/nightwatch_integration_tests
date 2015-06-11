var createVirtualAccount= require('./createVirtualAccount').createVirtualAccount;
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
		
				 		 
		'virtualAccountBalance': function (browser) {
									
			browser
		   		.page.account().verifyProfitTableEntry()
		   				   		
		   		.end();
		   
	  }
		

};
