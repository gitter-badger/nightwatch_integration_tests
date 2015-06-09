var URL = require('../url');

module.exports = function(browser)
{
	var element = {
			startTradingLink: '#topMenuStartBetting',
			forexLink: '#topMenuMarket_forex',
			indicesLink: '#topMenuMarket_indices',
			stocksLink: '#topMenuMarket_stocks',
			commoditiesLink: '#topMenuMarket_commodities',
			randomsLink: '#topMenuMarket_random',
			smartmarketsLink: '#topMenuMarket_smarties'
				
    };
	
			
	return {
		
			
		clickStartTradingLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.startTradingLink, 1000)
				.assert.elementPresent(element.startTradingLink)
				.click(element.startTradingLink)
						 	
	 },
		
	 	clickForexLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.forexLink, 1000)
				.assert.elementPresent(element.forexLink)
				.click(element.forexLink)
						 	
	 },
	 	clickIndicesLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.indicesLink, 1000)
				.assert.elementPresent(element.indicesLink)
				.click(element.indicesLink)
						 	
	 },
	 	clickStocksLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.stocksLink, 1000)
				.assert.elementPresent(element.stocksLink)
				.click(element.stocksLink)
						 	
	 },
	 	clickCommoditiesLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.commoditiesLink, 1000)
				.assert.elementPresent(element.commoditiesLink)
				.click(element.commoditiesLink)
						 	
	 },
	 	clickRandomsLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.randomsLink, 1000)
				.assert.elementPresent(element.randomsLink)
				.click(element.randomsLink)
				
						 	
	 },
	 
	 	clickSmartmarketsLink: function() {
			
		 	return browser
		 		.waitForElementVisible(element.smartmarketsLink, 1000)
				.assert.elementPresent(element.smartmarketsLink)
				.click(element.smartmarketsLink)
						 	
	 },
		
	
	};

}