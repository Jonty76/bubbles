var test   = require('tape');
var start = require('../lib/start.js');
var server = require("../lib/index.js");

test("simple server running", function(t) {
    var options = {
      method: "GET",
      url: "/"
    };
    server.inject(options, function(response) {
      t.equal(response.statusCode, 200, "200 status code returned");
      t.end()
    });
});


test('Does backend receive form details in payload in lib/payment.js', function(t){
  var request = {
    method:"POST",
    url: "/process-payment"
  };

  server.inject(request, function(res){
    var actual = res.statusCode;
    var expected = 200;
    t.equal(expected, actual, 'server is up and running');
    server.stop(t.end);
  });
});
