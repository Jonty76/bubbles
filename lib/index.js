var Hapi    = require('hapi');
var Home    = require('./home.js');
var Inert   = require('inert');
var GetClientToken = require('./get-client-token.js');
var Payment = require('./process-payment.js');
var MailTest = require('./mail-gun.js');
var engine = require('hapi-react')();
var Vision = require('vision');
var Path = require('path');

exports.init = function (port, next) {
  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Inert, Home, GetClientToken, Payment, MailTest, Vision], function (err) {
    if (err) {
      return next(err);
    }

    server.views({
      defaultExtension: 'jsx',
      engines: {
        jsx: engine, // support for .jsx files
        js: engine // support for .js
      },
      path: Path.join(__dirname, "../" + "src/js/components/views/expo")
    })

    server.start(function (err) {
      if (err) console.log("error starting server: ", err);
      return next(err, server);
    });
  });
  module.exports = server;
};
