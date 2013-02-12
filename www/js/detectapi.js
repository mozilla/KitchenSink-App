define(function(require) {

  // import functions from https://github.com/wfwalker/webrt-feature-test
  var tests = require('tests').tests;
  var detect = {};
  tests.forEach(function(test) {
    detect[test['id']] = test;
  });

  // here modify/add functions and info
  detect.sms.run = function() {
    if ('mozSms' in navigator && navigator.mozSms) {
      return { output: 'Success', emulated: '' };
    } else {
      return { output: 'Failed', emulated: 'No' };
    }
  };

  // return
  return detect;
});
