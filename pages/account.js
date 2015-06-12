var URL = require('../url');

module.exports = function(browser)
{
	var formId = '#login-form',
    element = {
        form: formId,
        loginIdInput: formId + ' input[type=text]',
        passwordInput: formId + ' input[type=password]',
        loginButton: formId + ' input[type=submit]',
        logoutButton: '#btn_logout',
        viewBalancesLink: '#view-balances',
        continueTradingButton: '#balances-nav > span > button',
        balancesContent: '#balances-content',
        myAccountLink: '#topMenuMyAccount',
        portfolioLink: '#topMenuPortfolio',
        profitTableLink: '#topMenuProfitTable',
        statementLink: '#topMenuStatement',
        passwordLink: '#topMenuChangePassword',
        settingsLink: '#top_Settings',
        affiliateLink: '#topMenuBecomeAffiliate',
        authenticateLink: '#topMenuAuthenticateAccount',
        tradeLink: '#menu-top > li:nth-child(4) > a',
        userDetails: '#user_details',
        affiliateTab: '#general_info',
        faqTab: '#faq',
        signMeUpButton: '#general_info-content > div > div:nth-child(3) > a > span',
        faqContent: '#faq-content > div'
       
    };
				
	return {
		
		verifyMyAccount: function() {
			
		 	return browser
		 		.assert.containsText('#content', 'Welcome')
		 		.assert.urlContains('my_account')		 		
		 				 	
	 },
	 		 
		clickLogout: function() {
			return browser
				.timeouts("implicit",5000)
				.waitForElementVisible(element.logoutButton, 1000)
				.assert.elementPresent(element.logoutButton)				
				.click(element.logoutButton)            	            
	        
		},
		
		 verifyLogout: function() {
			 return browser
			 	.assert.visible(element.loginButton)
		 },
		
		clickViewBalances: function() {
			return browser
				.waitForElementVisible(element.viewBalancesLink, 1000)
				.assert.elementPresent(element.viewBalancesLink)
				.click(element.viewBalancesLink)
		},
		
		verifyBalances: function() {
			return browser
				.waitForElementVisible(element.balancesContent, 1000)
				.assert.elementPresent(element.balancesContent)
		},
		
		clickContinueTrading: function() {
			return browser
				.waitForElementVisible(element.continueTradingButton, 1000)
				.assert.elementPresent(element.continueTradingButton)
				.click(element.continueTradingButton)
				.pause(1000)
		},
		
		clickTradeLink: function() {
			return browser
				.waitForElementVisible(element.tradeLink, 1000)
				.assert.elementPresent(element.tradeLink)
				.click(element.tradeLink)
				.pause(1000)
		},
		
		clickMyAccountLink: function() {
			return browser
				.waitForElementVisible(element.myAccountLink, 1000)
				.assert.elementPresent(element.myAccountLink)
				.click(element.myAccountLink)
				.pause(1000)
		},
		
		clickMySettings: function() {
			return browser
				.waitForElementVisible(element.settingsLink, 1000)
				.assert.elementPresent(element.settingsLink)
				.click(element.settingsLink)
				.pause(1000)
		},
		
		verifyMySettings: function() {
			return browser
				.waitForElementVisible(element.userDetails, 1000)
				.assert.elementPresent(element.userDetails)
				
		},
		
		clickAffiliateLink: function() {
			return browser
				.waitForElementVisible(element.affiliateLink, 1000)
				.assert.elementPresent(element.affiliateLink)
				.click(element.affiliateLink)
				.pause(1000)
		},
		
		verifyAffiliatePage: function() {
			return browser
				.waitForElementVisible(element.affiliateTab, 1000)
				.assert.elementPresent(element.affiliateTab)
				.click(element.affiliateTab)
				.waitForElementVisible(element.signMeUpButton, 1000)
				.assert.elementPresent(element.signMeUpButton)
				.waitForElementVisible(element.faqTab, 1000)
				.assert.elementPresent(element.faqTab)
				.click(element.faqTab)
				.waitForElementVisible(element.faqContent, 1000)
				.assert.elementPresent(element.faqContent)
			
		}
		
	};

}