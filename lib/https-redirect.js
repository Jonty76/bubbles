exports.register = (server, options, next) => {

  server.ext('onRequest', (request, reply) => {
    if (process.env.NODE_ENV === 'production') {
      const httpOrigin = request.headers.origin;
      const httpForward = request.headers['x-forwarded-proto'];

      if (httpForward && httpForward === 'http')
        return reply.redirect('https://' + request.headers.host + request.url.path);

      if (httpOrigin && httpOrigin.search('http://') === 0)
        return reply.redirect('https://' + request.headers.host + request.url.path);
    }
    reply.continue();
  });
  next();
};

exports.register.attributes = {
  name: 'Https'
};
