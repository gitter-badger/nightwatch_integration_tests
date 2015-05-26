var URL = require('../../url');

module.exports = function(browser) {
	
	this.goToLogin = function() 
		{
		    browser
		      .url(browser.launch_url + URL.ACCOUNT.LOGIN);
		      //.waitForElementVisible('body', 1000);

		    return browser;
		  };
	}

