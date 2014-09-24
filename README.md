## Nightwatch and Selenium

We use automated integration tests to protect against stability regression.

[Nightwatch](http://nightwatchjs.org/) can run tests against a local [Selenium](http://www.seleniumhq.org/) server or against [BrowserStack](http://www.browserstack.com/start)

These tests reside in

    /tests

In order to run the tests locally, you have to have [Selenium](http://www.seleniumhq.org/) server running on your machine.

To install and run Selenium, install via NPM:

    npm install selenium-standalone -g

Then run:

    start-selenium


Run all tests via BrowserStack (on firefox):

    nightwatch

Run a single test:

    nightwatch -t auth/loginFail

Run a group of tests:

    nightwatch -g auth

Run tests locally:

Firefox (default):

    nightwatch -c local-selenium.json


####You can also run via Grunt like this:

BrowserStack:

    grunt

Selenium:

    grunt selenium


## Smoke Tests

Smoke testing is preliminary testing to reveal simple failures severe enough to reject a prospective software release. A subset of test cases that cover the most important functionality of a component or system is selected and run, to ascertain if the most crucial functions of a program work correctly.

To run smoke tests locally:

    grunt smoke

Which is equivalent to:

    nightwatch -g smoke-tests

Smoke tests for Binary.com consist of loading a comprehensive list of URLs covering a big surface of the application's functionality, and checking if they load or throw an error (server or client side).

## Testing Production Site

All tests run against the staging server, by default.

If you need to run against the production site, include the --env parameter like this:

    nightwatch -g smoke-tests --env production


### Read more at [Nightwatch Test Runner](http://nightwatchjs.org/guide#test-runner)
