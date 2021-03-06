﻿var URL = require('../../url');

module.exports = {

    "assetIndex": function (browser) {
        browser
            .url(browser.launch_url + URL.RESOURCES.ASSET_INDEX)
            .windowMaximize()
            .waitForElementVisible('body', 5000)
            .assert.containsText('#content', 'Asset Index')
        .end();
    },
};
