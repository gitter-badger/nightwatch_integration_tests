module.exports= function(browser) {
		
	element= {
		cashierLink: '#topMenuCashier',
		availablePaymentMethodsLink: '#view_payment_methods',
		paymentAgentLink: '#payment_agent'
	};

	return {
		goToCashier: function() {
			return browser
				.waitForElementVisible(element.cashierLink, 1000)
				.verify.elementPresent(element.cashierLink)
				.click(element.cashierLink)
				.pause(2000)
		},
		
		verifyCashier: function() {
			return browser			
				.waitForElementVisible('body', 1000)
				.verify.containsText('body', 'Cashier')
				.verify.urlContains('cashier')
				.pause(2000)
		},

		clickPaymentMethods: function() {
			return browser
				.waitForElementVisible(element.availablePaymentMethodsLink, 1000)
				.verify.elementPresent(element.availablePaymentMethodsLink)
				.click(element.availablePaymentMethodsLink)
				.pause(2000)
		},
	
		verifyPaymentMethods: function() {
			return browser
				.waitForElementVisible('body', 1000)
				.verify.containsText('body', 'Available payment methods')
				.verify.urlContains('payment_methods')
		},

		clickPaymentAgent: function() {
			return browser
				.waitForElementVisible(element.paymentAgentLink, 1000)
				.verify.elementPresent(element.paymentAgentLink)
				.click(element.paymentAgentLink)
				.pause(2000)
		},

		verifyPaymentAgent: function() {
			return browser
				.waitForElementVisible('body', 1000)
				.verify.containsText('body', 'How to use a payment agent?')
				.verify.urlContains('payment_agent_list')
		}		

	};

};
