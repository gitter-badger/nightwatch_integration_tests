//Client can access Cashier Page

var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;

module.exports= {

	before: function(browser) {
		console.log('Setting up...');
		createVirtualAccount(browser, true);
	},

	after: function(browser) {
		console.log('Closing down...');
	},

	'accessCashier': function(browser, doNotEnd) {
		browser
			.page.cashier().goToCashier()
			.page.cashier().verifyCashier()
			if (!doNotEnd) browser.end();
	}

};
