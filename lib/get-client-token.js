var braintree = require("braintree");
var env = require('env2')('.env');

exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/get-client-token',
    config: {
      description: 'get client token',
      handler: function(request, reply) {
        generateBraintreeToken(reply)
      }
    }
  });
  return next();
};


function generateBraintreeToken(reply){
  var gateway = braintree.connect({
    environment: braintree.Environment.Production,
    merchantId: process.env.LIVE_BRAINTREE_MERCHANT_ID,
    publicKey: process.env.LIVE_BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.LIVE_BRAINTREE_PRIVATE_KEY
  });
  gateway.clientToken.generate({}, function (err, response) {
    var clientToken = response.clientToken
    reply(clientToken)
  });
}


exports.register.attributes = {
  name: 'GetClientToken'
}
