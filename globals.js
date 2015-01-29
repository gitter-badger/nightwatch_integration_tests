function randomStr(length, initChars) {
    var chars = initChars || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        str = '';
    for (var i = length; i > 0; --i) {
        str += chars[Math.round(Math.random() * (chars.length - 1))];
    }
    return str;
}

module.exports = {
    'default': {
        url: 'https://www.binary-beta.com',
        randomStr: randomStr
    },
    'production': {
        url: 'https://www.binary.com',
        randomStr: randomStr
    },
    reporter : function(results, done) {

        if (results.failed === 0) return;

        console.log('\nList of failed tests:');

        Object.keys(results.modules).forEach(function(x) {
            var module = results.modules[x];
            Object.keys(module).forEach(function(suite) {
                module[suite].tests.forEach(function(test) {
                    if (test.failure) {
                        console.log('\n', suite, '\n', test.message, '\n', test.failure);
                    }
                });
            });
        });
        done();
    }
};
