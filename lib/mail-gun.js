var env = require('env2')('.env');
var api_key = process.env.TEST_MAILGUN_KEY
var domain = process.env.TEST_DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


var formatUserReciept = function(recieptDetails) {
return '<body><div style="margin:2em; max-width:40em; font-family:sans-serif;">'
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
}

var formatPiccniccReciept = function(recieptDetails) {
  return '<body><p>Piccnicc Receipt' + recieptDetails.orderNumber + '</p><p>' + recieptDetails + '</p></body>'
}

var formatPiccniccProcessedPayment = function(recieptDetails) {
  return '<body><div><h2>Order from' + recieptDetails.firstName + ' ' + recieptDetails.lastName + ', #' + recieptDetails.orderNumber + ' payment has been taken</h2></div></body>'
}


var SendMail = function(payload, emailType, callback) {
  var recieptDetails = payload
  if (emailType === "piccniccReciept") {
    var piccniccReciept = formatPiccniccReciept(recieptDetails)
    var data = {
      from: 'Excited User <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      subject: recieptDetails.firstName + ', order #' + recieptDetails.orderNumber,
      html: piccniccReciept
    };
    mailgun.messages().send(data, function (error, body) {
      console.log("email body>>>>", body);
      console.log("error>>>>", error);
      callback(error)
    });

  } else if (emailType === "userReciept") {
    var userReciept = formatUserReciept(recieptDetails)
    var data = {
      from: 'Excited User <postmaster@' + domain + '>',
      to: recieptDetails.customer.email,
      subject: recieptDetails.customer.firstName + ', your Piccnicc Order and Receipt',
      html: userReciept
    };
    mailgun.messages().send(data, function (error, body) {
      console.log("email body>>>>", body);
      console.log("error>>>>.", error);
      callback()
    });
  } else if (emailType === "piccniccProccessedPayment") {
    var piccniccProccessedPayment = formatPiccniccProcessedPayment(recieptDetails)
    var data = {
      from: 'Excited User <postmaster@' + domain + '>',
      to: 'kat_pas@hotmail.co.uk', //this needs to be Jonny's email
      subject: recieptDetails.firstName + ', payment complete for order #' + recieptDetails.orderNumber,
      html: piccniccProccessedPayment
    };
    mailgun.messages().send(data, function (error, body) {
      console.log("email body>>>>", body);
      console.log("error>>>>", error);
      callback(error)
    });
  }
}


  // { firstName: 'Katerina',
  //   lastName: 'Pascoulis',
  //   email: 'kat_pas@hotmail.co.uk',
  //   phoneNumber: '79527958721',
  //   company: 'FAC',
  //   total: '2600',
  //   orderNumber: '14678013129742600',
  //   deliveryPoint: 'Main Entrance',
  //   deliveryTime: '1474428840000',
  //   order: '[{"name":"Grain Store","description":"Grain Store is an innovative and sustainable restaurant and bar by celebrated chef Bruno Loubet, drinks pioneer Tony Conigliaro and the Zetter Group. Grain Store was awarded Menu of the Year at the Cateys in 2014.","items":[{"id":18,"name":"A Bowl of Superfood","description":"Quinoa, Beluga lentils, avocado, baby spinach, raw apple, pumpkin seeds, crumbled goat\'s feta","foodType":"Salads","restaurant":"Grain Store","price":"1200","quantityOrdered":1},{"id":19,"name":"Wild Mushroom and Truffle Burger","description":"Chicory, apple and hazelnut salad, milk bun","foodType":"Homemade Burgers","restaurant":"Grain Store","price":"1300","quantityOrdered":1}]}]',
  //   payment_method_nonce: '8ce34425-b9e5-40f2-8a6a-c1ba81abffa4' }





module.exports = SendMail
