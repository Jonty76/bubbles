var braintree = require("braintree");
var env = require('env2')('.env');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        var nonceFromTheClient = request.payload.payment_method_nonce;
        processPayment(nonceFromTheClient, reply)
      }
    }
  });
  return next();
};

function processPayment(nonceFromTheClient, reply) {
    var gateway = braintree.connect({
      environment: braintree.Environment.Sandbox,
      merchantId: process.env.TEST_BRAINTREE_MERCHANT_ID,
      publicKey: process.env.TEST_BRAINTREE_PUBLIC_KEY,
      privateKey: process.env.TEST_BRAINTREE_PRIVATE_KEY
    });
    gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    console.log("result>>>>>>", result)
    console.log(result.success)
    if (result.success) {
      reply("Sucess");
    } else {
      reply ("Payment Failed");
    }
  });
}


exports.register.attributes = {
  name: 'ProcessPayment'
}
