﻿var URL = require('../../url');

var element = {
    contractTypeSelect: '#pricingtable_bet_type',
    marketSelect: '#pricingtable_underlying',
    payoutCurrencySelect: '#pricingtable_currency',
    strikeStepInput: '#strike_step',
    strikeTypeSelect: '#strike_type',
    strikeFromInput: '#from_strike',
    expiryStepSelect: '#expiry_step',
    expiryFromDatePicker: '#from_expiry',
    calculateButton: '#pricingtable_calculate',
    pricingTable: '#pricing_table_prices_div'
};

module.exports = {

    "pricingTable": function (browser) {
        browser
            .url(browser.launch_url + URL.RESOURCES.PRICING_TABLE)
            .click(element.calculateButton)
            .pause(20000)
            .assert.visible(element.pricingTable)
        .end();
    }
};
