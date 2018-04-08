module.exports = function (chromy, scenario) {
  var wrapperSelector = scenario.selectors[0];
  chromy.evaluate(`wrapperSelector = '${wrapperSelector}'`);

  chromy.evaluate(() => {
    $(wrapperSelector.slice(0, -8))
      .wrap('<div id="' + wrapperSelector.slice(1) + '" style="padding-top: 300px;"></div>')
      .datepicker('update', new Date(2018, 2, 13))
      .datepicker('show');
  });
};
