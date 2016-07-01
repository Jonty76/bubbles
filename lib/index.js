var Hapi    = require('hapi');
var Home    = require('./home.js');
var Inert   = require('inert');
var Payment = require('./payment.js');


exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Home, Payment], function (err) {
    if (err) {
      return next(err);
    }

    server.start(function (err) {
      if (err) console.log("error starting server: ", err);
      return next(err, server);
    });
  });
  module.exports = server;
};
