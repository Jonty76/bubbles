var braintree = require("braintree");
var env = require('env2')('.env');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        console.log('>>>>>>>>>>>>>>',request.payload);
      }
    }
  });
  return next();
};


// function generateBraintreeToken(reply){
//   var gateway = braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: process.env.TEST_BRAINTREE_MERCHANT_ID,
//     publicKey: process.env.TEST_BRAINTREE_PUBLIC_KEY,
//     privateKey: process.env.TEST_BRAINTREE_PRIVATE_KEY
//   });
//   gateway.clientToken.generate({}, function (err, response) {
//     var clientToken = response.clientToken
//     reply(clientToken)
//   });
// }


exports.register.attributes = {
  name: 'ProcessPayment'
}
