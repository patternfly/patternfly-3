module.exports = function (chromy, scenario) {
  var targetSelector = scenario.selectors[0];
  chromy.evaluate(`window._targetSelector = '${targetSelector}'`);

  switch (targetSelector) {
    case '#input-filters': {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style = 'height: 150px;';
      });
      chromy.click(targetSelector + ' .dropdown-toggle');
      break;
    }
    case '#select-filters': {
      if (scenario.label.substr(-1, 1) === '1') {
        chromy.evaluate(() => {
          document.querySelector(window._targetSelector).style = 'height: 150px;';
        });
        chromy.click(targetSelector + ' .input-group-btn .dropdown-toggle');
      } else {
        chromy.evaluate(() => {
          document.querySelector(window._targetSelector).style = 'height: 360px;';
        });
        chromy.click(targetSelector + ' .filter-pf-select .dropdown-toggle');
      }
      break;
    }
    case '#category-filters': {
      var number = scenario.label.substr(-1, 1);
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style = 'height: 150px;';
      });
      if (number === '1') {
        chromy.click(targetSelector + ' .input-group-btn .dropdown-toggle');
      } else if (number === '2') {
        chromy.click(targetSelector + ' .filter-pf-select:first-child .dropdown-toggle');
      } else {
        chromy.click(targetSelector + ' .filter-pf-select:last-child .dropdown-toggle');
      }
      break;
    }
  }
};
