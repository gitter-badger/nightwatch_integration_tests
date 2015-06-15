var createVirtualAccount= require('../account/createVirtualAccount').createVirtualAccount;
var accessCashier= require('./accessCashier').accessCashier;

module.exports= {
	before: function(browser) {
		console.log('Setting up...');
		createVirtualAccount(browser, true);
		accessCashier(browser, true);
	},
	
	after: function(browser) {
		console.log('Closing down...');
	},

	'accessPaymentMethods': function(browser) {
		browser
			.page.cashier().clickPaymentMethods()
			.page.cashier().verifyPaymentMethods()
			.end();
	}
};
