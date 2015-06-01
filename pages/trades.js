var URL = require('../url');

module.exports = function(browser)
{
	var element = {
			startTradingLink: '//*[@id="topMenuStartBetting"]/a'
              
    };
	
			
	return {
		
		 goToStartTrading: function() {
			 return browser
			 		.url(browser.launch_url + URL.TRADE.FOREX)
			 		.waitForElementVisible('body', 1000)
			 		
		 },
		
		clickTradeLink: function() {
			
		 	return browser
		 		.useXpath()
			 	.waitForElementVisible(element.startTradingLink, 1000)
				.assert.elementPresent(element.startTradingLink)
				.click(element.startTradingLink)
						 	
	 },
		
		
	
	};

}