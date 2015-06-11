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
        userDetails: '#user_details'
       
    };
				
	return {
		
		verifyMyAccount: function() {
			
		 	return browser
		 		.verify.containsText('#content', 'Welcome')
		 		.verify.urlContains('my_account')		 		
		 				 	
	 },
	 		 
		clickLogout: function() {
			return browser
				.timeouts("implicit",5000)
				.waitForElementVisible(element.logoutButton, 1000)
				.verify.elementPresent(element.logoutButton)				
				.click(element.logoutButton)            	            
	        
		},
		
		 verifyLogout: function() {
			 return browser
			 	.verify.visible(element.loginButton)
		 },
		
		clickViewBalances: function() {
			return browser
				.waitForElementVisible(element.viewBalancesLink, 1000)
				.verify.elementPresent(element.viewBalancesLink)
				.click(element.viewBalancesLink)
		},
		
		verifyBalances: function() {
			return browser
				.waitForElementVisible(element.balancesContent, 1000)
				.verify.elementPresent(element.balancesContent)
		},
		
		clickContinueTrading: function() {
			return browser
				.waitForElementVisible(element.continueTradingButton, 1000)
				.verify.elementPresent(element.continueTradingButton)
				.click(element.continueTradingButton)
				.pause(1000)
		},
		
		clickTradeLink: function() {
			return browser
				.waitForElementVisible(element.tradeLink, 1000)
				.verify.elementPresent(element.tradeLink)
				.click(element.tradeLink)
				.pause(1000)
		},
		
		clickMyAccountLink: function() {
			return browser
				.waitForElementVisible(element.myAccountLink, 1000)
				.verify.elementPresent(element.myAccountLink)
				.click(element.myAccountLink)
				.pause(1000)
		},
		
		clickMySettings: function() {
			return browser
				.waitForElementVisible(element.settingsLink, 1000)
				.verify.elementPresent(element.settingsLink)
				.click(element.settingsLink)
				.pause(1000)
		},
		
		verifyMySettings: function() {
			return browser
				.waitForElementVisible(element.userDetails, 1000)
				.verify.elementPresent(element.userDetails)
				
		}
		
	};

}