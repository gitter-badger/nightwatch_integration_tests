exports.command = function(email, password, callback) {
    var self = this;
    var formId = '#virtual-acc-form',
	 element = {
	     form: formId,
	     emailInput: formId + ' input[type=email]',
	     passwordInput1: formId + ' input[id=chooseapassword]',
	     passwordInput2: formId + ' input[id=chooseapassword_2]',
	     createAccountButton: formId + ' input[type=submit]'
    };
    this
        .frame(null)
        .waitForElementVisible(element.emailInput, 1000)
		.assert.visible(element.emailInput)
		.setValue(element.emailInput, email)
		.waitForElementVisible(element.passwordInput1, 2000)
		.waitForElementPresent(element.passwordInput1, 2000)
		.assert.visible(element.passwordInput1)
		.setValue(element.passwordInput1, password)
		.pause(4000)
		.waitForElementVisible(element.passwordInput2, 2000)
		.waitForElementPresent(element.passwordInput2, 2000)
		.assert.visible(element.passwordInput2)
		.setValue(element.passwordInput2, password)
		.waitForElementVisible(element.createAccountButton, 1000)
		.assert.visible(element.createAccountButton)
		.click(element.createAccountButton)
	    .pause(5000)

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};

