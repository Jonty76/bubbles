var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js");

test("Is cancel route working correctly", function(t) {
    var options = {
      method: "POST",
      url: "/cancel-order/ORDER-NUMBER/jonny@piccnicc.com"
    };
    server.inject(options, function(response) {
      t.equal(response.payload, "cancel email sent", "Cancel route working correctly");
      t.end()
    });
});
