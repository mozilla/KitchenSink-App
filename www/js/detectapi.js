define(function(require) {

  // import functions from https://github.com/wfwalker/webrt-feature-test
  var tests = require('tests').tests;
  var detect = {};
  tests.forEach(function(test) {
    detect[test['id']] = test;
  });

  // here modify/add functions and info

  // return
  return detect;
});
