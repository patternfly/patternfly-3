const fs = require('fs')
const path = require('path')
const pdf = require('html-pdf');

module.exports = {
  filterScenarios (config) {
    const cliArguments = process.argv.filter((current, index) => {
      return index > 1;
    });

    // if arguments are passed only run the given scenarios
    if (cliArguments.length) {
      let scenarios = [];

      cliArguments.forEach((currentScenario) => {
        let scenarioPath = path.join(__dirname, '../config/scenarios', `${currentScenario}.js`);
        let scenarioConfigs = require(scenarioPath);
        scenarioConfigs = scenarioConfigs.filter((scenarioConfig) => {
          return !scenarioConfig.disabled
        })
        scenarios.push(...scenarioConfigs);
      });

      config.scenarios = scenarios;
    }
  },
  appendQueryParam (scenarios) {
    return scenarios.map((scenarioConfig) => {
      if (scenarioConfig.url) {
        scenarioConfig.url = `${scenarioConfig.url}?environment=regressions`;
      }
      return scenarioConfig;
    });
  },
  generatePdfReport () {
    let htmlReportDir = path.join(__dirname, '../../backstop_data/html_report');
    let htmlReportPath = path.join(htmlReportDir, 'index.html');
    let htmlReport = fs.readFileSync(htmlReportPath, 'utf8');
    let pdfReportDir = path.join(__dirname, '../../');
    let pdfReportPath = path.join(pdfReportDir, 'regression-report.pdf');

    // generates a pdf version of the status report
    pdf
      .create(htmlReport, {
        base: `file://${htmlReportDir}/`
      })
      .toFile(pdfReportPath, function(fileError, res) {
        if (fileError) {  console.log(fileError); }
      });
  }
}
