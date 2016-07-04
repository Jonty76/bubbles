var braintree = require("braintree");
var env = require('env2')('.env');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        var payload = request.payload
        processPayment(payload, reply)
      }
    }
  });
  return next();
};

function processPayment(payload, reply) {
  console.log(payload)

  var total = (payload.total/100).toString()
  var nonceFromTheClient = payload.payment_method_nonce;

    var gateway = braintree.connect({
      environment: braintree.Environment.Sandbox,
      merchantId: process.env.TEST_BRAINTREE_MERCHANT_ID,
      publicKey: process.env.TEST_BRAINTREE_PUBLIC_KEY,
      privateKey: process.env.TEST_BRAINTREE_PRIVATE_KEY
    });
    gateway.transaction.sale({
    amount: total,
    customer: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      company: payload.company,
      phone: payload.phoneNumber
    },
    orderId: payload.orderNumber,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    console.log(result)
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
