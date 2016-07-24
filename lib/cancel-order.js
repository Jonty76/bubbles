var SendEmail = require('./mail-gun.js');

exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/cancel-order/{orderNumber}/{email}',
    config: {
      description: 'cancel order',
      handler: function(request, reply) {
        var orderNumber = encodeURIComponent(request.params.orderNumber)
        var customerEmail = request.params.email
        sendCancelEmail(orderNumber, customerEmail, reply);
      }
    }
  });
  return next();
};

function sendCancelEmail(orderNumber, customerEmail, reply) {
  var cancelObj = {
    customerEmail: customerEmail,
    orderNumber: orderNumber
  }
  SendEmail(cancelObj, 'piccniccCancelledOrder', function(error){
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
