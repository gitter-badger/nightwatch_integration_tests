var languages = [
    { code: 'EN', language: 'English', translation: 'GET STARTED' },
    { code: 'DE', language: 'Deutsch', translation: 'ERSTE SCHRITTE' },
    { code: 'ID', language: 'Bahasa Indonesia', translation: 'MEMULAI' },
    { code: 'ZH_CN', language: '简体中文', translation: '现在就开始' },
    { code: 'PL', language: 'Polish', translation: 'ROZPOCZNIJ' },
    { code: 'AR', language: 'Arabic', translation: 'ابدأ' },
    { code: 'RU', language: 'Русский', translation: 'С ЧЕГО НАЧАТЬ' },
    { code: 'PT', language: 'Português', translation: 'COMEÇAR' },
    { code: 'ES', language: 'Español', translation: 'COMENZAR' },
    { code: 'FR', language: 'Français', translation: 'SE LANCER' }
];

languages.forEach(function(l) {
    module.exports[l.language] = function(browser) {
        browser
            .url(browser.launch_url + '?l=' + l.code)
            .windowMaximize()
            .waitForElementPresent('#menu-top', 5000)
            .assert.containsText('#menu-top', l.translation)
        .end();
    };
});
