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
				.pause(2000)
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
		
		clickPortfolio: function() {
			return browser
				.waitForElementVisible(element.portfolioLink, 1000)
				.verify.elementPresent(element.portfolioLink)
				.click(element.portfolioLink)
				.pause(1000)
		},

		verifyPortfolio: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Portfolio')
				.pause(1000)
		},
		
		clickStatement: function() {
			return browser
				.waitForElementVisible(element.statementLink, 1000)
				.verify.elementPresent(element.statementLink)
				.click(element.statementLink)
				.pause(1000)
		},


		verifyStatement: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Statement')
		},
		
		clickProfitTable: function() {
			return browser
				.waitForElementVisible(element.profitTableLink, 1000)
				.verify.elementPresent(element.profitTableLink)
				.click(element.profitTableLink)
				.pause(1000)
		},


		verifyProfitTable: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Profit Table')
				.pause(1000)
		},

		verifyVirtualBalance: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', '10,000.00')
				.pause(1000)
		},
		
		verifyProfitTableEntry: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'There are no items during this period')
				.pause(1000)
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
			
		},
		
		clickPassword: function() {
			return browser
				.waitForElementVisible(element.passwordLink, 1000)
				.verify.elementPresent(element.passwordLink)
				.click(element.passwordLink)
				.pause(1000)
		},		

		verifyPassword: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Change Password')
				.pause(1000)
		},
		
		verifyStatementAmount: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('body', 'Deposit')
				.verify.containsText('body', 'virtual money credit to account')
				.verify.containsText('body', '10,000.00')
		},

	
	};

}
