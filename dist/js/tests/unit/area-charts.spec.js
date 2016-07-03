describe("area-charts test suite", function(){

  beforeEach(function(){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('base/tests/area-charts.html');
  });

  it('should render an area chart with four data points', function(){
    var chart = $('#areaChart svg');
    var chartLegends = $('#areaChart .c3-legend-item');

    expect(chart).toExist();
    expect(chartLegends).toHaveLength(4);
  });

});
