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
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['shell:nightwatch']);
    grunt.registerTask('bs', ['shell:browserstack']);
    grunt.registerTask('smoke', ['shell:smoke']);
    grunt.registerTask('continuous', ['shell:continuous']);
};
