var braintree = require("braintree");
var env = require('env2')('.env');
var SendEmail = require('./mail-gun.js');


exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        console.log("HERE!!!!!!");
        var payload = request.payload;
        SendEmail(payload, 'piccniccReciept', function(error){
          if (typeof error === "undefined") {
            processPayment(payload, reply);

          } else {
            reply.redirect('/#/expo-order-not-taken-page');
          }
        });
      }
    }
  });
  return next();
};

function processPayment(payload, reply) {
  var total = (payload.total/100).toString();
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
    console.log("result",result);
    if (result.success) {
      SendEmail(payload, 'piccniccProccessedPayment', function(error){
        if (typeof error === "undefined") {

        } else {
          console.log("error", error);
        }
      });

      SendEmail(payload, 'userReciept', function(error){
        if (typeof error === "undefined") {

        } else {
          console.log("error", error);
        }
      });
      reply.redirect('/#/expo-order-confirmed-page');
    } else {
      SendEmail(payload, 'piccniccFailedPayment', function(error){
        if (typeof error === "undefined") {

        } else {
          console.log("error", error);
        }
      });
      reply.redirect('/#/expo-order-failed');
    }
  });
}


exports.register.attributes = {
  name: 'ProcessPayment'
};
