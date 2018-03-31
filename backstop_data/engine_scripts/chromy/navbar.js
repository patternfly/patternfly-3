module.exports = function (chromy, scenario) {
  var clickSelector = scenario.clickSelector;
  chromy.evaluate(`clickSelector = '${clickSelector}'`);

  switch (scenario.label) {
    case 'navbar-primary-utility-menu1': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 100px;';
      });
      chromy.click(clickSelector);
      break;
    }
    case 'navbar-primary-utility-menu2': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 300px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy
        .click(scenario.clickSelector)
        .rect(scenario.hoverSelector)
        .result(function (rect) {
          chromy.mouseMoved(rect.left, rect.top);
        });
      break;
    }
    case 'navbar-context-selector': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 330px;';
      });
      chromy.click(clickSelector);
      break;
    }
    case 'navbar-multi-level-menu-without-submenu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 240px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy.click(clickSelector);
      break;
    }
    case 'navbar-multi-level-menu-submenu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 380px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy
        .click(scenario.clickSelector)
        .rect(scenario.hoverSelector)
        .result(function (rect) {
          chromy.mouseMoved(rect.left, rect.top);
        });
      break;
    }
    case 'navbar-multi-level-menu-dropup-submenu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 270px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy
        .click(scenario.clickSelector)
        .rect(scenario.hoverSelector)
        .result(function (rect) {
          chromy.mouseMoved(rect.left, rect.top);
        });
      break;
    }
    case 'navbar-multi-level-menu-pull-left-submenu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 380px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy
        .click(scenario.clickSelector)
        .rect(scenario.hoverSelector)
        .result(function (rect) {
          chromy.mouseMoved(rect.left, rect.top);
        });
      break;
    }
    case 'navbar-multi-level-menu-submenu-default-selected': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 380px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy.click(clickSelector);
      break;
    }
    case 'navbar-tertiary-menu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 260px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy.click(clickSelector);
      break;
    }
    case 'navbar-tertiary-menu-submenu': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 280px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy
        .click(scenario.clickSelector)
        .rect(scenario.hoverSelector)
        .result(function (rect) {
          chromy.mouseMoved(rect.left, rect.top);
        });
      break;
    }
    case 'navbar-tertiary-menu-submenu-default-selected': {
      chromy.evaluate(() => {
        document.querySelector('.container').style = 'height: 280px;';
        document.querySelector(clickSelector).style = 'outline: none;';
      });
      chromy.click(clickSelector);
      break;
    }
  }
};
