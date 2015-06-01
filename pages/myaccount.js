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
        viewBalancesLink: '#view-balances'
    };
	
			
	return {
		
		verifyMyAccount: function() {
			
		 	return browser
		 		.assert.containsText('#content', 'Welcome')
		 		.assert.urlContains('my_account')
		 		
		 				 	
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
				
		}
		
			 
		
	
	};

}