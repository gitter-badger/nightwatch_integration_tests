 module.exports = function(browser) { 
	 var formId = '#virtual-acc-form',
	 element = {
	     form: formId,
	     emailInput: formId + ' input[type=email]',
	     passwordInput1: formId + ' input[id=chooseapassword]',
	     passwordInput2: formId + ' input[id=chooseapassword_2]',
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
			 		.waitForElementVisible(element.passwordInput1, 1000)
			 		.assert.visible(element.passwordInput1)
			 		.setValue(element.passwordInput1, strPassword)
			 		.pause(2000)
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
	 
	
	
	
