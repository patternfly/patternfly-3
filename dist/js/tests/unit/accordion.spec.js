describe("accordion test suite", function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = './';
    loadFixtures('base/tests/accordions.html');

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('should add the "in" class after accordion collapsed', function(done){
    var accordion = $('a[href="#collapseTwo"]');
    var collapse = $('#collapseTwo');

    expect(collapse).not.toHaveClass('in');

    accordion.click();

    setTimeout(function(){
      expect(collapse).toHaveClass('in');
      done();
    },2000);
  });

});
