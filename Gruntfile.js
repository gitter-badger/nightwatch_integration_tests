module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        shell: {
            nightwatch: {
                command: 'nightwatch'
            },
            browserstack: {
                command: 'nightwatch -c local-selenium.json'
            },
            smoke: {
                command: 'nightwatch -g smoke-tests'
            },
            continuous: {
                command: 'nightwatch -t continuous/test'
            },
            push: {
                command:
'git checkout beta; \
git merge master; \
git checkout qa01; \
git merge master; \
git checkout qa02; \
git merge master; \
git checkout qa03; \
git merge master; \
git checkout master; \
git push origin --all'
            }
        },
        junit_report: {
            options: {
                xmlFolder : "reports/",
                outputFolder : "output/"
            },
            your_target: {
                // Target-specific file lists and/or options go here.
            },
        },
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-junit-report');

    grunt.registerTask('default', ['shell:nightwatch']);
    grunt.registerTask('bs', ['shell:browserstack']);
    grunt.registerTask('smoke', ['shell:smoke']);
    grunt.registerTask('continuous', ['shell:continuous']);
    grunt.registerTask('push', ['shell:push']);
};
