var objhome = require('../../pages/home');
var utils = require('../../utils');

module.exports = {
   'Create Virtual Account' : function (browser) {
    
	   var randomStr = utils.randomStr(5),
       randomEmail = 'binarytest-' + randomStr + '@mailinator.com';
	   
	   browser
	   		.objhome.createVirtualAccount(browser,randomStr,randomEmail)
	   		.end();
	   
	   
  }
};
