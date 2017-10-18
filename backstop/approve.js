const backstop = require('backstopjs');
const config = require('./config');

// check for arguments passed at the command line
const cliArguments = process.argv.filter((current, index) => {
  return index > 1;
});

// if arguments are passed only run the given scenarios
if (cliArguments.length) {
  let scenarios = [];

  cliArguments.forEach((currentScenario) => {
    let scenarioPath = path.join(__dirname, 'config', 'scenarios', `${currentScenario}.js`);
    let scenario = require(scenarioPath);

    scenarios.push(...scenario);
  });

  config.scenarios = scenarios;
}

backstop('approve', { config })
  .then(() => {
    console.log('approved changes');
  })
  .catch((err) => {
    throw err;
  });
