describe("alerts test suite", function(){

  beforeEach(function(){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('base/tests/alerts.html');
  });

  it('should not exist after dismiss', function(done){
    var alertSelector = '.alert-danger.alert-dismissable';
    var closeButton = $('.alert-danger.alert-dismissable button');

    expect($(alertSelector)).toExist();
    closeButton.click();

    setTimeout(function(){
      expect($(alertSelector)).not.toExist();
      done();
    },2000);
  });

});
