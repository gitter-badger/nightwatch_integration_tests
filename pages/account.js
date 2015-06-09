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
        authenticateLink: '#topMenuAuthenticateAccount'
       
    };
				
	return {
		
		verifyMyAccount: function() {
			
		 	return browser
		 		.verify.containsText('#content', 'Welcome')
		 		.verify.urlContains('my_account')		 		
		 				 	
	 },
	 	goToMyAccount: function() {
	 		return browser
		 		.url(browser.launch_url + URL.ACCOUNT.MY_ACCOUNT)
		 		.waitForElementVisible('body', 1000)
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
				.waitForElementVisible(element.ContinueTradingButton, 1000)
				.verify.elementPresent(element.ContinueTradingButton)
				.click(element.ContinueTradingButton)
		}
		
	};

}