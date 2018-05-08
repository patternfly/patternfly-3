module.exports = function (chromy, scenario) {
  var targetSelector = scenario.selectors[0];
  chromy.evaluate(`targetSelector = '${targetSelector}'`);

  switch (targetSelector) {
    case '#date-picker-wrapper': {
      chromy.evaluate(() => {
        document.querySelector(targetSelector).style = 'height: 360px;';
        document.querySelector(targetSelector + ' input').value = '03/13/2018';
        document.querySelector(targetSelector + ' input').dispatchEvent(new Event('focus'));
      });
      break;
    }
    case '#time-picker-wrapper': {
      chromy.evaluate(() => {
        document.querySelector(targetSelector).style = 'height: 240px;';
        document.querySelector(targetSelector + ' input').value = '10:30 AM';
        document.querySelector(targetSelector + ' input').dispatchEvent(new Event('focus'));
      });
      break;
    }
    case '#date-time-picker-wrapper': {
      chromy.evaluate(() => {
        document.querySelector(targetSelector).style = 'height: 360px;';
        document.querySelector(targetSelector + ' input').value = '03/13/2018 10:30 AM';
        document.querySelector(targetSelector + ' input').dispatchEvent(new Event('focus'));
      });
      break;
    }
    case '#date-range-picker-wrapper': {
      chromy.evaluate(() => {
        document.querySelector(targetSelector).style = 'height: 200px;';
      });
      chromy.click(targetSelector + ' .dropdown-toggle');
      break;
    }
  }
};
