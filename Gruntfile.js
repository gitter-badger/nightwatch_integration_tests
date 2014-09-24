module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        shell: {
            nightwatch: {
                command: 'nightwatch',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'integration'
                    }
                }
            },
            browserstack: {
                command: 'nightwatch -c local-selenium.json',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'integration'
                    }
                }
            },
            smoke: {
                command: 'nightwatch -g tests/smoke-tests',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'integration'
                    }
                }
            },
            continuous: {
                command: 'nightwatch -t test',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'continuous'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['shell:nightwatch']);
    grunt.registerTask('bs', ['shell:browserstack']);
    grunt.registerTask('smoke', ['shell:smoke']);
    grunt.registerTask('continuous', ['shell:continuous']);
};
