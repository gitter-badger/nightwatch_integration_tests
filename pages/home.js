 module.exports = function(browser) { 
	 var formId = '#virtual-acc-form',
	 element = {
	     form: formId,
	     emailInput: formId + ' input[type=email]',
	     passwordInput: '#chooseapassword',
	     passwordInput2: '#chooseapassword_2',
	     createAccountButton: formId + ' input[type=submit]'
	     
	   
	 };
	 
	  return {
		 goToHome: function() {
			 return browser
			 		.url(browser.launch_url)
			 		.waitForElementVisible('body', 1000)
			 		
		 },
		 
		 setAccEmail: function(strEmail) {
			 return browser
			 		.waitForElementVisible(element.emailInput, 1000)
			 		.assert.visible(element.emailInput)
			 		.setValue(element.emailInput, strEmail)
		 },
		 
		 setAccPassword: function(strPassword) {
			 return browser
			 		.waitForElementVisible(element.passwordInput, 1000)
			 		.assert.visible(element.passwordInput)
			 		.setValue(element.passwordInput, strPassword)
			 		.waitForElementVisible(element.passwordInput2, 1000)
			 		.assert.visible(element.passwordInput2)
			 		.setValue(element.passwordInput2, strPassword)
		 },
			 
		clickOpenAccount: function() {
			return browser
					.waitForElementVisible(element.createAccountButton, 1000)
					.assert.visible(element.createAccountButton)
					.click(element.createAccountButton)
					.pause(5000)
		}
		
	 };
 }
	 
	
	
	