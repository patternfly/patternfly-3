module.exports = function (chromy, scenario) {
  var wrapperSelector = scenario.selectors[0];
  var clickSelector = wrapperSelector + ' .dropdown-toggle';
  chromy.evaluate(`wrapperSelector = '${wrapperSelector}'; clickSelector = '${clickSelector}'`);

  chromy.evaluate(() => {
    var wrapper = document.createElement('div');
    wrapper.id = wrapperSelector.slice(1);
    wrapper.append(document.querySelector(wrapperSelector.slice(0, -8)));
    document.body.append(wrapper);
    document.querySelector(wrapperSelector).style = 'height: 170px';
    document.querySelector(clickSelector).style = 'outline: none;'
  });
  chromy.click(clickSelector);
};
