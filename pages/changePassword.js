module.exports= function(browser) {
	
	element= {
		oldPassword: '#oldpassword',
		newPassword: '#npassword',
		newPassword2: '#npassword2',
		submitButton: '#submit'
	};
	
	return {
		changePassword: function(strPass) {
			return browser
				.waitForElementVisible(element.oldPassword, 1000)
				.assert.visible(element.oldPassword)
				.setValue(element.oldPassword, 'test123')
			
				.setValue(element.newPassword, strPass)
				.setValue(element.newPassword2, strPass)
				.click(element.submitButton)
				.pause(1000)
		},
		
		verifyChangePassword: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Your password has been changed')
		}
		
	};
}
