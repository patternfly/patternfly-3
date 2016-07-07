describe("area-charts test suite", function () {

  beforeEach(function () {
    loadFixtures(globals.fixturePath + 'area-charts.html');
  });

  it('should render an area chart with four data points', function (done) {
    var chart = $('#areaChart svg');
    var chartLegends = $('#areaChart .c3-legend-item');

    setTimeout(function () {
      expect(chart).toExist();
      expect(chartLegends).toHaveLength(4);
      done();
    }, globals.wait);
  });

});
