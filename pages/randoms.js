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
    updownLink: '#bets_tab_callput > a',
    touchnotouchLink: '#bets_tab_touchnotouch > a',
    inoutLink: '#bets_tab_inout > a',
    asiansLink: '#bets_tab_asian > a',
    digitsLink: '#bets_tab_digits > a',
    riseFallLink: '#risefall > a',
    higherLowerLink: '#higherlower > a',
    endsOutsideLink: '#endsinout > a',
    staysOutsideLink: '#staysinout > a',
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
	
	 goToRandoms: function() {
		 return browser
		 		.url(browser.launch_url + URL.TRADE.RANDOM)
		 		.waitForElementVisible('body', 5000)
		 		
	 },
	 
	 
	 
};

}
