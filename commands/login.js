exports.command = function(username, password, callback) {
    var self = this;
    var formId_login = '#login-form',
    element = {
        form: formId_login,
        loginIdInput: formId_login + ' input[type=text]',
        passwordInput: formId_login + ' input[type=password]',
        loginButton: formId_login + ' input[type=submit]'
    };
    this
        .frame(null)
        .waitForElementPresent(element.loginIdInput, 5000)
        .setValue(element.loginIdInput, username)
        .waitForElementPresent(element.passwordInput, 5000)
        .setValue(element.passwordInput, password)
        .click(element.loginButton);

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};

