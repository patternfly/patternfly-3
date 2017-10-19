const backstop = require('backstopjs');
const path = require('path');
const server = require('./lib/server');
const helpers = require('./lib/helpers');
const config = require('./config');

server.start().then((webServer) => {
  // check if arguments passed at the command line, and only run those
  helpers.filterScenarios(config);

  // execute backstop
  backstop('test', { config })
    .then(() => {
      console.log('tests completed without failures');
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      // close the express server
      webServer.close();
    });
})
.catch((err) => {
  // there was an error launching the web server
  throw err;
})
