exports.command = function(callback) {
    var self = this;
    var formId_login = '#login-form',
    element = {
        form: formId_login,
        loginButton: formId_login + ' input[type=submit]',
        logoutButton: '#btn_logout'
    };
   
    this
        .frame(null)
		.timeouts("implicit",5000)
		.waitForElementVisible(element.logoutButton, 1000)
		.assert.elementPresent(element.logoutButton)				
		.click(element.logoutButton)  
		.pause(5000)
		.assert.visible(element.loginButton)

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};

