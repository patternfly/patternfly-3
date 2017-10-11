const path = require('path');
const backstop = require('backstopjs');
const config = require('./config');

try {
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

  backstop('test', { config })
    .then(() => {
      console.log('tests completed')
    })
    .catch((err) => {
      console.log(err);
    });

} catch (e) {
  console.log('Error: ', e.message);
}
