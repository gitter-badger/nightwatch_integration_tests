
module.exports = function(browser)
{
	var formId = '#login-form',
    element = {
        form: formId,
        loginIdInput: formId + ' input[type=text]',
        passwordInput: formId + ' input[type=password]',
        loginButton: formId + ' input[type=submit]',
        logoutButton: '#btn_logout'
    };
	return {
		
		verifyMyAccount: function() {
			
		 	return browser
		 		.assert.containsText('#content', 'Welcome')
		 	
	 },
		clickLogout: function() {
			return browser
				.assert.visible(element.logoutButton)
	            .click(element.logoutButton)
	            .pause(5000)	            
	        
		},
		 	
		 verifyLogout: function() {
			 return browser
			 	.assert.visible(element.loginButton)
		 }
	
	};

}