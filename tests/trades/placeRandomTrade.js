var URL = require('../../url');﻿

var element = {
    amountFor10: '#amount_for_10',
    unitsFor10: '#units_for_10',
    durationInput: '#duration_amount',
    durationUnitsSelect: '#duration_units',
    payoutInput: '#amount',
    getPricesButton: '#bet_calculate',
    purcahseButton: '#btn_buybet_10',
    tradeRaisesValue: '#units_for_10',
    betCalculationPanel: '#bet_calculation_container',
    betConfirmationPanel: '#bet_confirm_wrapper'
};

module.exports = {

    disabled: true,

    "placeRandomTrade": function (browser) {
        console.log(browser.launch_url + URL.TRADE.RANDOM);
        browser
            .url(browser.launch_url + URL.TRADE.RANDOM)
            .waitForElementVisible(element.amountFor10, 10000)
            .setValue(element.durationInput, 5)
            .setValue(element.durationUnitsSelect, 'ticks')
            .setValue(element.payoutInput, 10)
            .click(element.getPricesButton)
            .waitForElementVisible(element.betCalculationPanel)
            .assert.containsText(element.tradeRaisesValue, '5')
            .click(element.purcahseButton)
            .assert.visible(element.betConfirmationPanel)
        .end();
    }
};
