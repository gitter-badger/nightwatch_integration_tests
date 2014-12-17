var URL = require('../../url');

var element = {
    forexTab: 'a[href="#tradingtimes-forex"]',
    indicesTab: 'a[href="#tradingtimes-indices"]',
    commoditiesTab: 'a[href="#tradingtimes-commodities"]',
    randomsTab: 'a[href="#tradingtimes-random"]',
    smartIndiciesTab: 'a[href="#tradingtimes-smarties"]'
};

module.exports = {

    "tradingTimes": function (browser) {

        browser
            .url(browser.launch_url + URL.RESOURCES.TRADING_TIMES)
            .waitForElementVisible('body', 5000)
            .click(element.forexTab)
            .pause(1000)
            .click(element.indicesTab)
            .pause(1000)
            .click(element.commoditiesTab)
            .pause(1000)
            .click(element.randomsTab)
            .pause(1000)
            .click(element.smartIndiciesTab)
            .pause(1000)
        .end();
    }
};
