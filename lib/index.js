var Hapi    = require('hapi');
var Home    = require('./home.js');
var Inert   = require('inert');
var GetClientToken = require('./get-client-token.js');
var Payment = require('./process-payment.js');
var CancelOrder = require('./cancel-order.js');

exports.init = function (port, next) {
  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Home, GetClientToken, Payment, CancelOrder], function (err) {
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
