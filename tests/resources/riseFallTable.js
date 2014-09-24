var URL = require('../../url');

var element = {
    startTimeSelect: '#atleast',
    durationAmountInput: '#duration_amount',
    durationUnitsSelect: '#duration_units',
    payoutCurrencySelect: '#bet_currency',
    calculateButton: '#rise_fall_calculate',
    pricingTable: '#rise_fall_prices_div'
};

module.exports = {

    "riseFalLTable": function (browser) {
        browser
            .url(browser.launch_url + URL.RESOURCES.RISE_FALL_TABLE)
            .click(element.calculateButton)
            .pause(10000)
            .assert.visible(element.pricingTable)
        .end();
    }
};
