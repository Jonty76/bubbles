var env = require('env2')('.env');
var api_key = process.env.MAILGUN_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var emailTemplates = require('./email-templates.js');


var SendMail = function(payload, emailType, callback) {
  var recieptDetails = payload;
  if (emailType === "piccniccReciept") {
    var piccniccReciept = emailTemplates.formatPiccniccReciept(recieptDetails);
    var data = {
      from: 'Piccnicc Orders <orders@' + domain + '>',
      to: 'jonny@piccnicc.com', //this needs to be Jonny's email
      //add bcc to Jonny's gmail here
      subject: recieptDetails.customerName + ', order #' + recieptDetails.orderNumber,
      html: piccniccReciept
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "userReciept") {
    var userReciept = emailTemplates.formatUserReciept(recieptDetails);
    var data = {
      from: 'Piccnicc <orders@' + domain + '>',
      to: recieptDetails.email,
      subject: recieptDetails.customerName + ', your Piccnicc Order and Receipt',
      html: userReciept,
      inline: 'public/piccnicclogo.png'
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "piccniccProccessedPayment") {
    var piccniccProccessedPayment = emailTemplates.formatPiccniccProcessedPayment(recieptDetails);
    var data = {
      from: 'Piccnicc Payment <orders@' + domain + '>',
      to: 'jonny@piccnicc.com', //this needs to be Jonny's email
      subject: recieptDetails.customerName + ', payment complete for order #' + recieptDetails.orderNumber,
      html: piccniccProccessedPayment
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "piccniccCancelledOrder") {
    var cancelOrder = emailTemplates.formatCancelOrderForPiccnicc(recieptDetails);
    var data = {
      from: 'Piccnicc Cancelled <orders@' + domain + '>',
      to: 'jonny@piccnicc.com',
      subject: 'order #' + recieptDetails.orderNumber + ' has CANCELLED!',
      html: cancelOrder
    };
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        callback(error);
      } else {
        var cancelOrderUser = emailTemplates.formatCancelOrderForUser(recieptDetails);
        var cancelUserData = {
          from: 'Piccnicc Cancelled <orders@' + domain + '>',
          to: recieptDetails.customerEmail,
          subject: 'Your Piccnicc Order #' + recieptDetails.orderNumber + ' has been cancelled',
          html: cancelOrderUser,
          inline: 'public/piccnicclogo.png'
        };
        mailgun.messages().send(cancelUserData, function (error, body) {
          callback(error);
        });
      }
    });



  }
  else if (emailType === "piccniccFailedPayment") {
    var failedPayment = emailTemplates.formatFailedPayment(recieptDetails);
    var data = {
      from: 'Piccnicc Payment <orders@' + domain + '>',
      to: 'jonny@piccnicc.com', //this needs to be Jonny's email
      subject: recieptDetails.customerName + ' order #' + recieptDetails.orderNumber + ' payment failed',
      html: failedPayment
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  }
};

module.exports = SendMail;
