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
