describe("bar-charts test suite", function () {

  beforeEach(function () {
    loadFixtures(globals.fixturePath + 'bar-charts.html');
  });

  it('should render a vertical bar chart with four bars', function (done) {
    var verticalBarChart = $('#verticalBarChart');
    var verticalBars = verticalBarChart.find('.c3-event-rects-single rect');

    setTimeout(function () {
      expect(verticalBarChart).toExist();
      expect(verticalBars).toHaveLength(4);
      done();
    }, globals.wait);
  });

});
