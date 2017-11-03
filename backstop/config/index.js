let config;

try {
  const configName = (process.env.NODE_ENV) ? `backstop.${process.env.NODE_ENV}.json` : 'backstop.json';
  config = require(`${__dirname}/../../${configName}`);

} catch (e) {
  const requireAll = require('require-all');
  const reportTypes = (process.env.NODE_ENV === 'test') ? ['CI'] : ['browser'];
  let scenarioConfigs = requireAll(`${__dirname}/scenarios`);
  let scenariosToLoad = [];

  Object.keys(scenarioConfigs).forEach((scenarioConfig) => {
    scenarioConfigs[scenarioConfig].forEach((scenario) => {
      if (!scenario.disabled) {
        scenariosToLoad.push(scenario);
      }
    })
  });

  config = {
    "id": "backstop_default",
    "viewports": [
      {
        "label": "large-device",
        "width": 1280,
        "height": 720
      },
      {
        "label": "medium-device",
        "width": 1024,
        "height": 768
      },
      {
        "label": "small-device",
        "width": 768,
        "height": 1024
      },
      {
        "label": "extra-small-device",
        "width": 480,
        "height": 320
      }
    ],
    "onBeforeScript": "chromy/onBefore.js",
    "onReadyScript": "chromy/onReady.js",
    "scenarios": scenariosToLoad,
    "paths": {
      "bitmaps_reference": "backstop_data/bitmaps_reference",
      "bitmaps_test": "backstop_data/bitmaps_test",
      "engine_scripts": "backstop_data/engine_scripts",
      "html_report": "backstop_data/html_report",
      "ci_report": "backstop_data/ci_report"
    },
    "report": reportTypes,
    "engine": "chrome",
    "engineFlags": [],
    "asyncCaptureLimit": 40,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false,
    "resembleOutputOptions": {
      "errorColor": {
        "red": 204,
        "green": 0,
        "blue": 0
      },
      "errorType": "movement",
      "transparency": 0.15
    }
  };
}

module.exports = config
