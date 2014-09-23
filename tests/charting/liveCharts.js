var URL = require('../../url');

var element = {
    chart: '.highcharts-container'
};

module.exports = {

    "liveCharts": function (browser) {
        browser
            .url(browser.launch_url + URL.CHARTS.LIVE_CHARTS)
            .waitForElementVisible('body', 5000)
            .assert.elementPresent(element.chart)
        .end();
    },
};
