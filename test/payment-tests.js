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


test.only('Does successful payment return successful page', function(t){
  var options = {
    method: "POST",
    url: "/process-payment",
    payload: {
      firstName: 'TestFirstName',
      lastName: 'TestSecondName',
      email: 'email@email.com',
      phoneNumber: '07111111111',
      company: 'FAC',
      total: '1390',
      orderNumber: '14676382555371390',
      payment_method_nonce: 'fake-valid-nonce'
    }
  }
  server.inject(options, function(response) {
    console.log("payload>>", response)
    t.ok(response.payload.includes("Delicious"), "Payment returned successful")
    t.end()
  });
});

test('Does failed payment return failed page', function(t){
  var options = {
    method: "POST",
    url: "/process-payment",
    payload: {
      firstName: 'TestFirstName',
      lastName: 'TestSecondName',
      email: 'email@email.com',
      phoneNumber: '07111111111',
      company: 'Failed Payment Co',
      total: '300000',
      orderNumber: '14676382555371390',
      payment_method_nonce: 'fake-processor-declined-visa-nonce'
    }
  }
  server.inject(options, function(response) {
    t.equal(response.payload, "payment-failed", "Payment returned as failed")
    server.stop(t.end)
  });
});
