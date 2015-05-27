var formId = '#virtual-acc-form';
    
 module.exports = function(browser) {

	this.txt_Username = function()
	{
		element = formId + 'input[type=email]';
		return element;
	}
	
	this.txt_Password = function()
	{
		element = formId + 'input[type=email]';
		return element;
	}
	this.btn_CreateAccount = function()
	{
		element = formId + 'input[type=email]';
		return element;
	}
		
	this.SetUsername = function(browser,strUsername)
	{
		browser
			.waitForElementVisible(txt_Username,5000)
			.setValue(txt_Username, strUsername)
			.end();
		
		return browser;
	}
	this.SetPassword = function(browser,strPassword)
	{
		browser
			.waitForElementVisible(txt_Password,5000)
			.setValue(txt_Password,strPassword)
			.end();
		
		return browser;
	}
	this.ClickCreateAccount = function(browser)
	{
		browser
			.waitForElementVisible(btn_CreateAccount,5000)
			.click(btn_CreateAccount)
			.end();
		
		return browser;
	}
	this.VerifyCreateAccount = function(browser)
	{
		browser
			.assert.containsText('#content', 'Welcome')
			.end();
		
		return browser;
		
	}
	this.GoToHomePage = function(browser)
	{
		browser
			.url(browser.launch_url)
			.waitForElementVisible('body', 1000);
		
		return browser;
	}
	
	this.createVirtualAccount = function(browser,strUsername,strPassword)
	{
		this.GoToHomePage(browser);
		this.SetUsername(browser, strUsername);
		this.SetPassword(browser, strPassword);
		//this.ClickCreateAccount(browser);
		this.VerifyCreateAccount(browser);
	}
	
	
	};

	
	
	
