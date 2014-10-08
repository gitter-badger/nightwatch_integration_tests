var defaultUrl = 'http://www.binary-beta.com',
    defaultBrowser = 'firefox',
    browserStackEnv = {
        launch_url: defaultUrl,
        selenium_port: 80,
        selenium_host: 'hub.browserstack.com',
        silent: true,
        desiredCapabilities: {
            browserName: defaultBrowser,
            'browserstack.user': 'BorisYankov',
            'browserstack.key': 'RLpblHGObo8kqtQWLjT4',
            'browserstack.debug': true,
            'browserstack.resolution': '1280x1024'
        }
    },
    localSeleniumEnv = {
        launch_url: defaultUrl,
        selenium_host: '127.0.0.1',
        selenium_port: 4444,
        silent: true,
        screenshots: {
            enabled: false,
            path: ''
        },
        desiredCapabilities: {
            browserName: defaultBrowser,
            javascriptEnabled: true,
            acceptSslCerts: true
        }
    };

module.exports = {
    src_folders: [ 'tests/' ],
    globals_path: 'globals.js',
    custom_commands_path: 'commands/',
    custom_assertions_path: 'assertions/',
    test_settings: {
        'default': browserStackEnv
    }
};


if (process.argv.length === 4 && process.argv[2] === '--env') {

    console.log(process.argv);

    var config = process.argv[3].split('*'),
        env = Object.create(config[0] === 'local' ? localSeleniumEnv : browserStackEnv);

    env.desiredCapabilities.browserName = config[1];
    env.launch_url = config[2];

    module.exports.test_settings[process.argv[3]] = env;
};

console.log(module.exports);
