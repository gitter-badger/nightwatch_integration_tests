module.exports= function(browser) {
	
	element= {
		oldPassword: '#oldpassword',
		newPassword: '#npassword',
		newPassword2: '#npassword2',
		submitButton: '#submit'
	};
	
	return {
		changePassword: function(strPass1, strPass2) {
			return browser
				.waitForElementVisible(element.oldPassword, 1000)
				.assert.visible(element.oldPassword)
				.setValue(element.oldPassword, strPass1)
			
				.setValue(element.newPassword, strPass2)
				.setValue(element.newPassword2, strPass2)
				.click(element.submitButton)
				.pause(1000)
		},
		
		verifyChangePassword: function() {
			return browser
				.waitForElementVisible('body',1000)
				.verify.containsText('#content', 'Your password has been changed')
				.pause(1000)
		}
		
	};
}
