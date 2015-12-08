var Server = require('./index.js');
var Hoek = require('hoek');

Server.init(process.env.PORT || 8000, function (err, server) {

  Hoek.assert(!err, err); //hoek deals with the error
  console.log('The server is running on: ', server.info.uri);
});
