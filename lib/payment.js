exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/process-payment',
    config: {
      description: 'process payment',
      handler: function(request, reply) {
        var formDetails = request.payload
        reply("ok")
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'Payment'
}
