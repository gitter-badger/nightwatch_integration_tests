var URL = require('../../url');

var element = {
    riseFallSeeDemoLink: '.bet_demo_link[href*="risefall"]',
    higherLowerSeeDemoLink: '.bet_demo_link[href*="higherlower"]',
    touchNoTouchSeeDemoLink: '.bet_demo_link[href*="touchnotouch"]',
    inOutSeeDemoLink: '.bet_demo_link[href*="inout"]',
    demoPopup: '.inpage_popup_container',
    closeButton: '.close'
};

module.exports = {

    "tradingGuide": function (browser) {

        browser
            .url(browser.launch_url + URL.RESOURCES.TRADING_GUIDE)
            .windowMaximize()
            .waitForElementVisible('body', 5000)

            .click(element.riseFallSeeDemoLink)
            .pause(1000)
            .assert.visible(element.demoPopup)
            .click(element.closeButton)

            .click(element.higherLowerSeeDemoLink)
            .pause(1000)
            .assert.visible(element.demoPopup)
            .click(element.closeButton)

            .click(element.touchNoTouchSeeDemoLink)
            .pause(1000)
            .assert.visible(element.demoPopup)
            .click(element.closeButton)

            .click(element.inOutSeeDemoLink)
            .pause(1000)
            .assert.visible(element.demoPopup)
            .click(element.closeButton)

        .end();
    }
};
