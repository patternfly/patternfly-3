const backstop = require('backstopjs');
const path = require('path');
const helpers = require('./lib/helpers');
const config = require('./config');

// check if arguments passed at the command line, and only run those
helpers.filterScenarios(config);
config.scenarios = helpers.appendQueryParam(config.scenarios);

// execute backstop
backstop('test', { config })
  .then(() => {
    console.log('tests completed without failures');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
