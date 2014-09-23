var URL = require('../../url');

var element = {
    chart: '.chart_holder'
};

module.exports = {

    "lightCharts": function (browser) {
        browser
            .url(browser.launch_url + URL.CHARTS.LIGHT_CHARTS)
            .waitForElementVisible('body', 5000)
            .assert.elementPresent(element.chart)
        .end();
    },
};
