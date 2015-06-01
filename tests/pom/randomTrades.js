var loginUser = require('./loginUser').loginUser;

module.exports = {
		 		 
	'randomTrades' : function (browser) {
		
		//loginUser(browser);
		browser
			.page.trades().goToStartTrading()
	   		.page.trades().clickTradeLink()
	   		.end();
	   
  }
	

};