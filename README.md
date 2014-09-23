## Nightwatch and Selenium

We use automated integration tests to protect against stability regression.

[Nightwatch](http://nightwatchjs.org/) can run tests against a local [Selenium](http://www.seleniumhq.org/) server or against [BrowserStack](http://www.browserstack.com/start)

These tests reside in

    /integration

In order to run the tests locally, you have to have [Selenium](http://www.seleniumhq.org/) server running on your machine.

To run the tests via [BrowserStack](http://www.browserstack.com/start) you need to specify your API keys via the command line (not yet implemented, but shouldn't be stored in the config).



Run all tests locally (on firefox):

    nightwatch

Run a single test:

    nightwatch -t tests/auth/loginFail

Run a group of tests:

    nightwatch -g auth

Run tests via BrowserStack:

Firefox (default):

    nightwatch -c browserstack.json

Chrome:

    nightwatch -c browserstack.json --env chrome

Internet Explorer:

    nightwatch -c browserstack.json --env ie


####You can also run via Grunt like this:

Locally:

    grunt

BrowserStack:

    grunt bs


## Smoke Tests

Smoke testing is preliminary testing to reveal simple failures severe enough to reject a prospective software release. A subset of test cases that cover the most important functionality of a component or system is selected and run, to ascertain if the most crucial functions of a program work correctly.

To run smoke tests locally:

    grunt smoke

Which is equivalent to:

    nightwatch -g tests/smoke-tests

Smoke tests for Binary.com consist of loading a comprehensive list of URLs covering a big surface of the application's functionality, and checking if they load or throw an error (server or client side).

## Testing Production Site

All tests run against the staging server, by default.

If you need to run against the production site, include the --env parameter like this:

    nightwatch -g tests/smoke-tests --env production
