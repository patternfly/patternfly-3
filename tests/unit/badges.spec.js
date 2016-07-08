describe("badges test suite", function () {

  beforeEach(function () {
    loadFixtures(globals.fixturePath + 'badges.html');
  });

  it('should contain a button with a badge span element', function (done) {
    var button = $('button');
    var span = $('button span.badge');

    setTimeout(function () {
      expect(button).toExist();
      expect(span).toHaveClass('badge');
      done();
    }, globals.wait);
  });

});
