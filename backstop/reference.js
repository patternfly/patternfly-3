const path = require('path');
const backstop = require('backstopjs');
const server = require('./lib/server');
const helpers = require('./lib/helpers');
const config = require('./config');

server.start().then((webServer) => {
  // check if arguments passed at the command line, and only run those
  helpers.filterScenarios(config);

  // execute backstop
  backstop('reference', { config })
    .then(() => {
      console.log('references completed successfully');
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      //after backstop is complete, close the webserver
      webServer.close();
    });
})
.catch((err) => {
  // there was an error launching the web server
  throw err;
})
