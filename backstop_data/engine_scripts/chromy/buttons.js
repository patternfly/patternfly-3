module.exports = function (chromy, scenario) {
  var targetSelector = scenario.selectors[0];
  chromy.evaluate(`window._targetSelector = '${targetSelector}'`);

  switch (true) {
    case /groups-nesting/.test(targetSelector): {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style.height = '130px';
      });
      chromy.click(targetSelector + ' .dropdown-toggle');
      break;
    }
    case /dropdowns-single-button/.test(targetSelector): {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style.height = '190px';
      });
      chromy.click(targetSelector + ' .dropdown-toggle');
      break;
    }
    case /dropdowns-split-button/.test(targetSelector): {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style.height = '190px';
      });
      chromy.click(targetSelector + ' h3 + .btn-group .dropdown-toggle');
      break;
    }
    case /dropdowns-sizing/.test(targetSelector): {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style.height = '190px';
      });
      chromy.click(targetSelector + ' h3 + .btn-group .dropdown-toggle');
      break;
    }
    case /dropdowns-dropup-variation/.test(targetSelector): {
      chromy.evaluate(() => {
        document.querySelector(window._targetSelector).style.paddingTop = '70px';
      });
      chromy.click(targetSelector + ' .btn-toolbar .btn-group:first-child .dropdown-toggle');
      break;
    }
  }
};
