var URL = require('../url');

module.exports = function(browser)
{
		var element = {
				resourcesLink: '#topMenuResources',
				assetIndexLink: '#topMenuAssetIndex',
				tradingTimesLink: '#topMenuTradingTimes',
				tradingGuideLink: '#topMenuContractGuide',
				pricingTableLink: '#pricing_table_lnk',
				riseFallTableLink: '#risefall_table_lnk',
				riseFallTableCalculateButton: '#rise_fall_calculate',
				tradingTimesTable: '#content > div.grd-container > div:nth-child(2)',
				tradingGuideText: '#content > div.grd-container > div.grd-grid-12 > h1',
				pricingTableCalculateButton: '#pricingtable_calculate',
				assetIndexTable: '#asset-tabs > div'
	
    
};

return {
	
		 clickResourcesLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.resourcesLink, 1000)
				.assert.elementPresent(element.resourcesLink)
				.click(element.resourcesLink)
				.pause(5000)
			 		
		 },
		 clickAssetIndexLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.assetIndexLink, 1000)
				.assert.elementPresent(element.assetIndexLink)
				.click(element.assetIndexLink)
				.pause(5000)
			 		
		 },
		 
		 clickTradingTimesLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.tradingTimesLink, 1000)
				.assert.elementPresent(element.tradingTimesLink)
				.click(element.tradingTimesLink)
				.pause(5000)
		 },
		 
		 clickTradingGuideLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.tradingGuideLink, 1000)
				.assert.elementPresent(element.tradingGuideLink)
				.click(element.tradingGuideLink)
				.pause(5000)
		 },
		 clickPricingTableLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.pricingTableLink, 1000)
				.assert.elementPresent(element.pricingTableLink)
				.click(element.pricingTableLink)
				.pause(5000)
		 },
	 	
		 clickRiseFallTableLink: function() {
			 return browser
			 	.timeouts("implicit",2000)
		 		.waitForElementVisible(element.riseFallTableLink, 1000)
				.assert.elementPresent(element.riseFallTableLink)
				.click(element.riseFallTableLink)
				.pause(5000)
		 },
		 
		 verifyResourcesPage: function() {
		 		
		 		return browser
			 		.waitForElementVisible(element.assetIndexLink, 2000)
					.assert.elementPresent(element.assetIndexLink)
			 		.waitForElementVisible(element.tradingTimesLink, 2000)
					.assert.elementPresent(element.tradingTimesLink)
					.waitForElementVisible(element.tradingGuideLink, 2000)
					.assert.elementPresent(element.tradingGuideLink)
					.waitForElementVisible(element.pricingTableLink, 2000)
					.assert.elementPresent(element.pricingTableLink)
					.waitForElementVisible(element.riseFallTableLink, 2000)
					.assert.elementPresent(element.riseFallTableLink)
				
		 	},
		 	
		 	verifyAssetIndexPage: function() {
		 		
		 		return browser
		 			.assert.urlContains('asset_index')
		 			.waitForElementVisible(element.assetIndexTable, 1000)
					.assert.elementPresent(element.assetIndexTable)
		 	},
		 	verifyTradingTimesPage: function() {
		 		
	 			return browser
	 				.assert.urlContains('trading_times')
	 				.waitForElementVisible(element.tradingTimesTable, 1000)
					.assert.elementPresent(element.tradingTimesTable)
		 	},
	 		verifyTradingGuidePage: function() {
	 		
				return browser
					.assert.urlContains('contract_guide')
					.waitForElementVisible(element.tradingGuideText, 1000)
					.assert.elementPresent(element.tradingGuideText)
	 		},
	 		verifyPricingTablePage: function() {
	 		
				return browser
					.assert.urlContains('pricing_table')
					.waitForElementVisible(element.pricingTableCalculateButton, 1000)
					.assert.elementPresent(element.pricingTableCalculateButton)
	 		},
	 		verifyRiseFallTablePage: function() {
	 		
				return browser
					.assert.urlContains('rise_fall_table')
					.waitForElementVisible(element.riseFallTableCalculateButton, 1000)
					.assert.elementPresent(element.riseFallTableCalculateButton)
	 		}
	 		
};

}