// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

const baseWidth = 1400;
const baseHeight = 1000;

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    // specs: [
    //     'specs/*/vueDemoFormSpec.js',
    //     'specs/*/markjsSpec.js'
    // ],
    framework: 'jasmine',
    suites: {
        vueDemoForm: ['specs/vueDemo/vueDemoFormSpec.js'],
        markjsConfigurator: ['specs/markjsConfigurator/markjsSpec.js'],
        both: [
            'specs/vueDemo/vueDemoFormSpec.js',
            'specs/markjsConfigurator/markjsSpec.js',    
        ]
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log',
                "--no-sandbox",
                "--disable-dev-shm-usage",
                "--headless"
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    onPrepare: () => {
        // non-angular app
        browser.ignoreSynchronization = true;
        // set browser window size for consistency...
        browser.manage().window().setSize(baseWidth, baseHeight);

        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};
