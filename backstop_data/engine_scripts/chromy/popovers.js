module.exports = function (chromy, scenario) {
  var targetSelector = scenario.selectors[0];
  chromy.evaluate(`targetSelector = '${targetSelector}'`);

  if (targetSelector === '.form-horizontal') {
    chromy.evaluate(() => {
      document.querySelector(targetSelector).style = 'padding-top: 180px;';
      document.querySelector(targetSelector + ' a').focus();
    });
  } else {
    chromy.evaluate(() => {
      var wrapperStyle = '';
      if(targetSelector.includes('-right')) {
        wrapperStyle = 'padding: 80px 0;';
      } else if(targetSelector.includes('-left')) {
        wrapperStyle = 'padding: 80px 240px;';
      } else if (targetSelector.includes('-top')) {
        wrapperStyle = 'padding-top: 200px; padding-left: 70px;';
      } else if (targetSelector.includes('-bottom')) {
        wrapperStyle = 'padding-bottom: 200px; padding-left: 60px;';
      }
      document.querySelector(targetSelector).style = wrapperStyle;
    });
    chromy.click(targetSelector + ' .btn');
  }
};
