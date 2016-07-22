var env = require('env2')('.env');
var api_key = process.env.TEST_MAILGUN_KEY;
var domain = process.env.TEST_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var emailTemplates = require('./email-templates.js');


var SendMail = function(payload, emailType, callback) {
  var recieptDetails = payload;
  if (emailType === "piccniccReciept") {
    console.log("JONNY GETS ORDER DETAILS");
    var piccniccReciept = emailTemplates.formatPiccniccReciept(recieptDetails);
    var data = {
      from: 'Piccnicc Orders <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      //add bcc to Jonny's gmail here
      subject: recieptDetails.customerName + ', order #' + recieptDetails.orderNumber,
      html: piccniccReciept
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "userReciept") {
    console.log("USER RECIEPT!!!!!!!!!!!!!!!!!!!");
    var userReciept = emailTemplates.formatUserReciept(recieptDetails);
    var data = {
      from: 'Piccnicc <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk',//recieptDetails.email,
      subject: recieptDetails.customerName + ', your Piccnicc Order and Receipt',
      html: userReciept,
      inline: 'public/piccnicclogo.png'
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "piccniccProccessedPayment") {
    console.log("JONNY GETS PAYMENT COMPLETE");
    var piccniccProccessedPayment = emailTemplates.formatPiccniccProcessedPayment(recieptDetails);
    var data = {
      from: 'Piccnicc Payment <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      subject: recieptDetails.customerName + ', payment complete for order #' + recieptDetails.orderNumber,
      html: piccniccProccessedPayment
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  } else if (emailType === "piccniccCancelledOrder") {

    console.log("details>>>>>>", recieptDetails)
    var cancelOrder = emailTemplates.formatCancelOrderForPiccnicc(recieptDetails);
    var data = {
      from: 'Piccnicc Cancelled <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      subject: 'order #' + recieptDetails.orderNumber + ' has CANCELLED!',
      html: cancelOrder
    };
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        callback(error);
      } else {
        var cancelOrderUser = emailTemplates.formatCancelOrderForUser(recieptDetails);
        var cancelUserData = {
          from: 'Piccnicc Cancelled <postmaster@' + domain + '>',
          to: 'kat_pas@hotmail.co.uk', //this needs to be recieptDetails.customerEmail
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
    console.log("JONNY GETS PAYMENT FAILED");
    var failedPayment = emailTemplates.formatFailedPayment(recieptDetails);
    var data = {
      from: 'Piccnicc Payment <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      subject: recieptDetails.customerName + ' order #' + recieptDetails.orderNumber + ' payment failed',
      html: failedPayment
    };
    mailgun.messages().send(data, function (error, body) {
      callback(error);
    });
  }
};

module.exports = SendMail;
