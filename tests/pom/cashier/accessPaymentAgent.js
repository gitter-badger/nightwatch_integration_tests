//Client can view Payment Agent page from Cashier page

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

	'accessPaymentAgent' : function(browser) {
		browser
			.page.cashier().clickPaymentAgent()
			.page.cashier().verifyPaymentAgent()
			.end();
	}

};
