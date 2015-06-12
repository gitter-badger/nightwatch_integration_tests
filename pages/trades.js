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
			smartmarketsLink: '#topMenuMarket_smarties',
			getPricesButton: '#bet_calculate'
			
				
    };
	
			
	return {
		
			
		clickStartTradingLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.startTradingLink, 1000)
				.assert.elementPresent(element.startTradingLink)
				.click(element.startTradingLink)
				.pause(5000)
						 	
	 },
	 
	 	
	 	clickForexLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.forexLink, 1000)
				.assert.elementPresent(element.forexLink)
				.click(element.forexLink)
				.pause(5000)
						 	
	 },
	 	clickIndicesLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.indicesLink, 1000)
				.assert.elementPresent(element.indicesLink)
				.click(element.indicesLink)
				.pause(5000)
						 	
	 },
	 	clickStocksLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.stocksLink, 1000)
				.assert.elementPresent(element.stocksLink)
				.click(element.stocksLink)
				.pause(5000)
						 	
	 },
	 	clickCommoditiesLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.commoditiesLink, 1000)
				.assert.elementPresent(element.commoditiesLink)
				.click(element.commoditiesLink)
				.pause(5000)
						 	
	 },
	 	clickRandomsLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.randomsLink, 1000)
				.assert.elementPresent(element.randomsLink)
				.click(element.randomsLink)
				.pause(5000)
				
						 	
	 },
	 
	 	clickSmartMarketsLink: function() {
			
		 	return browser
		 		.timeouts("implicit",2000)
		 		.waitForElementVisible(element.smartmarketsLink, 1000)
				.assert.elementPresent(element.smartmarketsLink)
				.click(element.smartmarketsLink)
				.pause(5000)
						 	
	 },
	 
	 	verifyStartTradingPage: function() {
	 		
	 		return browser
	 			.waitForElementVisible(element.forexLink, 1000)
	 			.assert.elementPresent(element.forexLink)
	 			.waitForElementVisible(element.indicesLink, 1000)
				.assert.elementPresent(element.indicesLink)
				.waitForElementVisible(element.stocksLink, 1000)
				.assert.elementPresent(element.stocksLink)
				.waitForElementVisible(element.commoditiesLink, 1000)
				.assert.elementPresent(element.commoditiesLink)
				.waitForElementVisible(element.randomsLink, 1000)
				.assert.elementPresent(element.randomsLink)
				.waitForElementVisible(element.smartmarketsLink, 1000)
				.assert.elementPresent(element.smartmarketsLink)
	 	},
	 	
	 	verifyIndicesPage: function() {
	 		
	 		return browser
	 			.assert.urlContains('market=indices')
	 			.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
	 	},
	 	verifyForexPage: function() {
	 		
 			return browser
 				.assert.urlContains('market=forex')
 				.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
	 	},
 		verifyCommoditiesPage: function() {
 		
			return browser
				.assert.urlContains('market=commodities')
				.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
 		},
 		verifySmartMarketsPage: function() {
 		
			return browser
				.assert.urlContains('market=smarties')
				.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
 		},
 		verifyRandomsPage: function() {
 		
			return browser
				.assert.urlContains('market=random')
				.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
 		},
 		verifyStocksPage: function() {
 		
			return browser
				.assert.urlContains('market=stocks')
				.waitForElementVisible(element.getPricesButton, 1000)
				.assert.elementPresent(element.getPricesButton)
 		}
 		
	
	 	
	 	
		
	
	};

}