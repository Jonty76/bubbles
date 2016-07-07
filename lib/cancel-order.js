var SendEmail = require('./mail-gun.js');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/cancel-order/{orderNumber}',
    config: {
      description: 'cancel order',
      handler: function(request, reply) {
        var orderNumber = encodeURIComponent(request.params.orderNumber)
        sendCancelEmail(orderNumber, reply);
      }
    }
  });
  return next();
};

function sendCancelEmail(orderNumber, reply) {
  SendEmail(orderNumber, 'piccniccCancelledOrder', function(error){
    if (typeof error === "undefined") {
      reply("cancel email sent")
    } else {
      reply("error")
    }
  })
}


exports.register.attributes = {
  name: 'CancelOrder'
}
