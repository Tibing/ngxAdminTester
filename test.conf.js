
exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 100000,
  allScriptsTimeout: 40000,
  capabilities: {
    'browserName': '<BROWSER>',
     '<chrome>Options': {
      'args': ['--start-maximized'], 
      prefs: {
        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: __dirname
        }
      }
    },
  },
  onPrepare: function () {
    browser.isFirefox = function() {
      return this.browserName === 'firefox';
    };
    browser.isChrome = function() {
      return this.browserName === 'chrome';
    };
  },
  specs: ['e2e/tests/navigation-pane-spec.js'],
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    timeout: 600000
  }
};