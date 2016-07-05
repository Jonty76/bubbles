var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js");

test("does too soon page show if user tries to cancel order less than 45 minutes before delivery time", function(t) {
  var timeNow = new Date().getTime()
  var lessThan45 = timeNow + 30*60000
  var options = {
    method: "GET",
    url: "/cancel-order/ORDER-NUMBER/" + lessThan45
  };
  server.inject(options, function(response) {
    t.equal(response.headers.location, "/#/expo-cancel-too-soon-page", "Too soon page should be returned")
    t.end()
  });
});

test("does user get redirected to cancelled order page successfully", function(t) {
  var timeNow = new Date().getTime()
  var greaterThan45 = timeNow + 60*60000
  var options = {
    method: "GET",
    url: "/cancel-order/ORDER-NUMBER/" + greaterThan45
  };
  server.inject(options, function(response) {
    t.equal(response.headers.location, "/#/expo-cancel-order-page", "Cancel order page should be returned")
    t.end()
  });
});
