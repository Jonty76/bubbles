exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/cancel-order/{orderNumber}/{deliveryTime}',
    config: {
      description: 'cancel order',
      handler: function(request, reply) {
        var orderNumber = encodeURIComponent(request.params.orderNumber)
        var deliveryTime = encodeURIComponent(request.params.deliveryTime)
        tooSoonCheck(orderNumber, deliveryTime, reply);
      }
    }
  });
  return next();
};


function tooSoonCheck (orderNumber, deliveryTime, reply) {
  var now = new Date().getTime()
  var diff = now + 45*60000

  if (deliveryTime < diff) {
    reply.redirect("/#/expo-cancel-too-soon-page");
  } else {
    sendCancelEmail(orderNumber, reply);
  }
}

function sendCancelEmail(orderNumber, reply) {
  //SEND CANCEL EMAIL TO JONNY
  //if sends successfully:
  reply.redirect("/#/expo-cancel-order-page")
}


exports.register.attributes = {
  name: 'CancelOrder'
}
