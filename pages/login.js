

module.exports = function(browser) {
	var formId_login = '#login-form',
    element = {
        form: formId_login,
        loginIdInput: formId_login + ' input[type=text]',
        passwordInput: formId_login + ' input[type=password]',
        loginButton: formId_login + ' input[type=submit]'
    };
	 return {
		 	 
		 setLoginEmail: function(strEmail) {
			 return browser
			 		.waitForElementVisible(element.loginIdInput, 1000)
			 		.assert.visible(element.loginIdInput)
			 		.setValue(element.loginIdInput, strEmail)
		 },
		 
		 setLoginPassword: function(strPassword) {
			 return browser
			 		.waitForElementVisible(element.passwordInput, 1000)
			 		.assert.visible(element.passwordInput)
			 		.setValue(element.passwordInput, strPassword)
		 },
			 
		clickLogin: function() {
			return browser
					.waitForElementVisible(element.loginButton, 1000)
					.assert.visible(element.loginButton)
					.click(element.loginButton)
					.pause(5000)
		}
		
			 
	 };
}
 
	
