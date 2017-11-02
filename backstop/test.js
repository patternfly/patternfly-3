const backstop = require('backstopjs');
const browserSync = require('browser-sync').create();
const path = require('path');
const helpers = require('./lib/helpers');
const config = require('./config');

// check if arguments passed at the command line, and only run those
helpers.filterScenarios(config);

// execute backstop
backstop('test', { config })
  .then(() => {
    console.log('tests completed without failures');
  })
  .catch((err) => {
    if (err) {
      console.log(err)
    }
  });
