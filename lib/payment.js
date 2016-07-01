exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        console.log("in backend process payment");
        var formDetails = request.payload
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'Payment'
}
