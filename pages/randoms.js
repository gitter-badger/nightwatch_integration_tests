var URL = require('../url');

module.exports = function(browser)
{
var element = {
	marketType: '#submarket',
    amountFor10: '#amount_for_10',
    durationInput: '#duration_amount',
    durationUnitsSelect: '#duration_units',
    durationType: 'expiry_type',
    payoutInput: '#amount',
    getPricesButton: '#bet_calculate',
    purchaseHigherButton: '#btn_buybet_10',
    purchaseLowerButton: '#btn_buybet_20',
    tradeRaisesValue: '#units_for_10',
    betCalculationPanel: '#bet_calculation_container',
    betConfirmationPanel: '#bet_confirm_wrapper',
    riseFallTab: '#bets_tab_risefall',
    underlyingSymbolSelect: '#bet_underlying',
    amountTypeSelect: '#amount_type',
    currencyType: 'bet_currency',
    startTime: 'atleast',
    upDownLink: '#bets_tab_callput',
    touchNoTouchLink: '#bets_tab_touchnotouch',
    inOutLink: '#bets_tab_inout',
    asiansLink: '#bets_tab_asian',
    digitsLink: '#bets_tab_digits',
    riseFallLink: '#risefall',
    higherLowerLink: '#higherlower',
    endsBetweenOutsideLink: '#endsinout',
    staysBetweenOutsideLink: '#staysinout',
    purchaseTouchesLink: '#btn_buybet_130',
    purchaseDoesntTouchLink: '#btn_buybet_140',
    purchaseEndsBetweenLink: '#btn_buybet_170',
    purchaseEndsOutsideLink: '#btn_buybet_180',
    purchaseAsianUpLink: '#btn_buybet_230',
    purchaseAsianDownLink: '#btn_buybet_240',
    purchaseMatchesLink: '#btn_buybet_210',
    purchaseDiffersLink: '#btn_buybet_220'
    
};

return {
	
	clickUpDownLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.upDownLink, 1000)
			.assert.elementPresent(element.upDownLink)
			.click(element.upDownLink)
			.pause(2000)
					 	
	},
	
	clickRiseFallLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.riseFallLink, 1000)
			.assert.elementPresent(element.riseFallLink)
			.click(element.riseFallLink)
			.pause(2000)
					 	
	},
	
	clickHigherLowerLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.higherLowerLink, 1000)
			.assert.elementPresent(element.higherLowerLink)
			.click(element.higherLowerLink)
			.pause(2000)
					 	
	},
	
	
	clickTouchNoTouchLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.touchNoTouchLink, 1000)
			.assert.elementPresent(element.touchNoTouchLink)
			.click(element.touchNoTouchLink)
			.pause(2000)
					 	
	},
	
	clickInOutLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.inOutLink, 1000)
			.assert.elementPresent(element.inOutLink)
			.click(element.inOutLink)
			.pause(2000)
					 	
	},
	
	clickEndsBetweenOutsideLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.endsBetweenOutsideLink, 1000)
			.assert.elementPresent(element.endsBetweenOutsideLink)
			.click(element.endsBetweenOutsideLink)
			.pause(2000)
					 	
	},
	
	clickStaysBetweenOutsideLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.staysBetweenOutsideLink, 1000)
			.assert.elementPresent(element.staysBetweenOutsideLink)
			.click(element.staysBetweenOutsideLink)
			.pause(2000)
					 	
	},
	
	
 
	clickAsiansLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.asiansLink, 1000)
			.assert.elementPresent(element.asiansLink)
			.click(element.asiansLink)
			.pause(2000)
					 	
	},
	
	clickDigitsLink: function() {
		
	 	return browser
	 		.timeouts("implicit",2000)
	 		.waitForElementVisible(element.digitsLink, 1000)
			.assert.elementPresent(element.digitsLink)
			.click(element.digitsLink)
			.pause(2000)
					 	
	},
	
	
	
	verifyRiseFallPage: function() {
		
	 	return browser
	 		.assert.urlContains('form_name=risefall')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
								 	
	},
	
	verifyHigherLowerPage: function() {
		
	 	return browser
	 		.assert.urlContains('form_name=higherlower')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
								 	
	},
	
		
	verifyTouchNoTouchPage: function() {
		
	 	return browser
		 	.assert.urlContains('form_name=touchnotouch')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
					 	
	},
	
	verifyEndBetweenOutsidePage: function() {
		
	 	return browser
		 	.assert.urlContains('form_name=endsinout')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
	},
	
	verifyStaysBetweenOutsidePage: function() {
		
	 	return browser
		 	.assert.urlContains('form_name=staysinout')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
	},
 
	verifyAsiansPage: function() {
		
	 	return browser
		 	.assert.urlContains('form_name=asian')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
					 	
	},
	
	verifyDigitsPage: function() {
		
	 	return browser
		 	.assert.urlContains('form_name=digits')
	 		.waitForElementVisible(element.getPricesButton, 1000)
			.assert.elementPresent(element.getPricesButton)
						 	
	}
	
};

}
