var env = require('env2')('.env');
var api_key = process.env.TEST_MAILGUN_KEY
var domain = process.env.TEST_DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


exports.register = function(server, options, next) {
  server.route({
    method: 'POST',
    path: '/mail-test',
    config: {
      description: 'send email',
      handler: function(request, reply) {
        var payload = request.payload;
        sendMail()
      }
    }
  })
  return next();
}

var recieptDetails = {
  amount: "£24.50",
  customer: {
    firstName: "Ruth",
    lastName: "Uweme",
    email: "kat_pas@hotmail.co.uk",
    company: "Founders & Coders",
    phone: "01010101010101"
  },
  orderId: "45689393939393984",
}


var expoRecieptEmail = '<body><div style="margin:2em; max-width:40em; font-family:sans-serif;">'
+ '<h2>' + recieptDetails.customer.firstName +', thank you for ordering your Piccnicc.</h2>' +
    + '<br><p><b>Order Summary:' + recieptDetails.orderId + '</b></p><table><tr><td style="padding:0.4em;">Item 1</td><td style="padding:0.4em;">£Price1</td>' +
  '</tr><tr><td style="padding:0.4em;">Item 2</td><td style="padding:0.4em;">£Price2</td></tr><tr><td style="padding:0.4em;">Item 3</td>' +
  '<td style="padding:0.4em;">£Price3</td></tr><tr><td style="padding-top:1em;">Discretionary Tip</td><td style="padding-top:1em;">£Fee</td></tr>' +
'<tr></tr><tr><td style="padding-top:1em;">Total</td><td style="padding-top:1em; font-weight:bold">' + recieptDetails.amount + '</td></tr>' +
'</table><p>For delivery on [date] at [time AM/PM] to [Stand [Number]]/[the [Company Name]Stand]/[the main entrance to the exhibition hall]:</p>' +
'<br><p><b>Cancel or Change your Order</b></p>' +
'<p>If you want to cancel or change your order, select the CANCEL button below – and place a new order if you want to. </p>' +
'<p>Please note you need to cancel/change your order at least 45 minutes before your requested delivery time, or you will not receive any refund. (We’re working on a slicker way of doing all this, but for now we hope you don’t find this too inconvenient.)</p>'
+ '<p style="color:#ED2C31;">[CANCEL BUTTON]</p><br><div><p>Thanks again – have a great expo… and enjoy your Piccnicc.</p>' +
'<p>Jonny & Avi</p></div><p>Founders, Piccnicc</p><br><p>[Logo]</p><p style="color:#ED2C31;">Piccnicc: Hampers of Happiness, Delivered.</p>' +
+ '<p>{Terms & Conditions} Hyperlinks to T&Cs on website [Jonny to provide]</p><p><i>Piccnicc Ltd, 31 King Street West, Manchester M3 2PJ</i></p>' +
'</div></body>'

var sendMail = function() {
  var data = {
    from: 'Excited User <postmaster@' + domain + '>',
    to: recieptDetails.customer.email,
    subject: recieptDetails.customer.firstName + ', your Piccnicc Order and Receipt',
    html: expoRecieptEmail
  };

  mailgun.messages().send(data, function (error, body) {
    console.log("email body>>>>", body);
    console.log("error>>>>.", error);
  });
}

exports.register.attributes = {
  name: 'MailTest'
};