| [qa01](https://www.binaryqa01.com) | [qa02](https://www.binaryqa02.com) | [qa03](https://www.binaryqa03.com) | [qa04](https://www.binaryqa04.com) | [qa05](https://www.binaryqa05.com) | [qa06](https://www.binaryqa06.com) | [qa07](https://www.binaryqa07.com) |
|-------------|------|------|------|------|------|-----|
| [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa01)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa02)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa03)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa04)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa05)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa06)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) | [![](https://travis-ci.org/regentmarkets/nightwatch_integration_tests.svg?branch=qa07)](https://travis-ci.org/regentmarkets/nightwatch_integration_tests) |

## Nightwatch and Selenium test suite for Binary.com

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


## Smoke Tests

Smoke testing is preliminary testing to reveal simple failures severe enough to reject a prospective software release. A subset of test cases that cover the most important functionality of a component or system is selected and run, to ascertain if the most crucial functions of a program work correctly.

To run smoke tests locally:

    grunt smoke

Which is equivalent to:

    nightwatch -g smoke-tests

Smoke tests for Binary.com consist of loading a comprehensive list of URLs covering a big surface of the application's functionality, and checking if they load or throw an error (server or client side).

## Testing Production or QA

The default configuration is:

 * Selenium Server: BrowserStack
 * Browser: Firefox
 * Url: http://binary-beta.com

If you want to change any of these from the command line:

    nightwatch --env <server>*<browser>*<url>

Testing on BrowserStack, with Firefox, QA01:

    nightwatch --env bs*firefox*https://binaryqa01.com

Test locally, with chrome, on binary-beta:

    nightwatch --env local*chrome*https://binary-beta.com

Or pick a single test like:

    nightwatch --env bs*firefox*https://binaryqa01.com -t tests/auth/loginFail


### Read more at [Nightwatch Test Runner](http://nightwatchjs.org/guide#test-runner)
