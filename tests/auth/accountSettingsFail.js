var URL = require('../../url');
var createAccountVirtualSuccess = require('./createAccountVirtualSuccess').createAccountVirtualSuccess;

var element = {
    form: '#changePasswordForm',
    emailAddressInput: '#Email',
    securityTab: 'a[href="#b-security"]',
    ipAddressInput: '#ipsecurity',
    updateButton: '#submit'
};

module.exports = {

    "changeEmailFail": function (browser) {

        createAccountVirtualSuccess(browser, true);

        browser
            .url(browser.launch_url + URL.ACCOUNT.CHANGE_SETTINGS)
            .waitForElementVisible(element.emailAddressInput, 5000)
            .clearValue(element.emailAddressInput)
            .click(element.updateButton)
            .pause(5000)
            .assert.containsText('#content', 'enter your email address')
        .end();
    },

    "changeIPAddressToInvalid": function (browser) {

        createAccountVirtualSuccess(browser, true);

        browser
            .url(browser.launch_url + URL.ACCOUNT.CHANGE_SETTINGS)
            .waitForElementVisible(element.securityTab, 5000)
            .click(element.securityTab)
            .setValue(element.ipAddressInput, 'Invalid IP')
            .click(element.updateButton)
            .pause(5000)
            .assert.containsText('#content', 'invalid IP address')
        .end();
    },
    "changeIPAddressToInaccessible": function (browser) {

        createAccountVirtualSuccess(browser, true);

        browser
            .url(browser.launch_url + URL.ACCOUNT.CHANGE_SETTINGS)
            .waitForElementVisible(element.securityTab, 5000)
            .click(element.securityTab)
            .setValue(element.ipAddressInput, '1.1.1.1')
            .click(element.updateButton)
            .pause(5000)
            .assert.containsText('#content', 'wouldn\'t let you in')
        .end();
    }
};
