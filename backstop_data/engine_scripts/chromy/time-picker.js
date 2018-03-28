module.exports = function (chromy, scenario) {
  var clickSelector = scenario.clickSelector;
  chromy.evaluate(`window._clickSelector = '${clickSelector}'`);
  chromy.evaluate(() => {
    document.body.style = 'height: 360px;';
    document.querySelector(window._clickSelector + ' input').value = '10:30 AM';
  });
  chromy.click(clickSelector + ' .btn');
};
