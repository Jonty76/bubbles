exports.register = function(server, options, next) {
  server.route({
    method: '*',
    path: '/{p*}',
    config: {
      description: 'our 404 page',
      handler: function(request, reply) {
        return //SOMETHING
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'Error 404'
