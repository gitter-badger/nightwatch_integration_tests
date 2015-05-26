var login = require('../../pages/login');
var formId = '#login-form',
    element = {
        form: formId,
        loginIdInput: formId + ' input[type=text]',
        passwordInput: formId + ' input[type=password]',
        loginButton: formId + ' input[type=submit]'
    };

function loginWith(browser, login, password, containsText) {

    browser
       // .url(browser.launch_url)
       // .waitForElementVisible(element.form, 5000)
    	.page.login.goToLogin()
        .setValue(element.loginIdInput, login)
        .setValue(element.passwordInput, password)
        .click(element.loginButton)
        .verify.containsText('#content', containsText)
      .end();
}

module.exports = {

    "loginFailNoPassword": function (browser) {
        loginWith(browser, 'VRTC449697', '', 'Password not given.');
    },
    "loginFailNoLogin": function (browser) {
        loginWith(browser, '', '', 'Email not given.');
    },
    "loginFailAccountUnavailable": function (browser) {
        loginWith(browser, 'VRTC449697', 'wrongpassword', 'account is unavailable');
        
    }
    
};
