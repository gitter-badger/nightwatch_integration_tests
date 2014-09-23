var CONSTS = require('../../utils').CONSTS;

var formId = '#login-form',
    element = {
        form: formId,
        loginIdInput: formId + ' input[type=text]',
        passwordInput: formId + ' input[type=password]',
        loginButton: formId + ' input[type=submit]'
    };

module.exports = {

    "loginSuccess": function (browser) {

        browser
            .url(browser.launch_url)
            .waitForElementVisible(element.form, 5000)
            .setValue(element.loginIdInput, CONSTS.dummyAccount.login)
            .setValue(element.passwordInput, CONSTS.dummyAccount.password)
            .click(element.loginButton)
            .pause(5000)
            .assert.containsText('body', 'Welcome')
        .end();
    }
};
