//test globals
window.globals = {

  //karma test timeout
  timeout: 10000,

  //fixture base path
  base: './',

  //fixture path
  fixturePath: 'base/dist/tests/',

  //visual waits in between tests
  wait: 2000
};

//set global jasmine variables
jasmine.DEFAULT_TIMEOUT_INTERVAL = globals.timeout;
jasmine.getFixtures().fixturesPath = globals.base;

