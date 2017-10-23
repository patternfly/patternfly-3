const path = require('path');
const backstop = require('backstopjs');
const helpers = require('./lib/helpers');
const config = require('./config');

// check if arguments passed at the command line, and only run those
helpers.filterScenarios(config);

// execute backstop
backstop('reference', { config })
  .then(() => {
    console.log('references completed successfully');
  })
  .catch((err) => {
    throw err;
  });
