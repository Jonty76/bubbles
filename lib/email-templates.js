function formatPrice (price){
  var pounds = price => Math.floor(price/100);
  var pad = (str, len) => str.length < len ? pad('0' + str, len) : str;
  var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
  return '£' + pounds(price) + '.' + pence(price);
}

var formatUserReciept = function(recieptDetails) {
  var date = new Date(recieptDetails.deliveryTime)
return "hello"
  // `<body>
  //   <div style="margin:2em; max-width:40em; font-family:sans-serif;">
  //     <h2>` + recieptDetails.firstName + `, thank you for ordering your Piccnicc.</h2>
  //     <br>
  //     <p><b>Order Summary:` + recieptDetails.orderNumber + `</b></p>
  //     <table>
  //       <tr>
  //         <td style="padding:0.4em;">Item 1</td>
  //         <td style="padding:0.4em;">£Price1</td>
  //       </tr>
  //       <tr>
  //         <td style="padding:0.4em;">Item 2</td>
  //         <td style="padding:0.4em;">£Price2</td>
  //       </tr>
  //       <tr>
  //         <td style="padding:0.4em;">Item 3</td>
  //         <td style="padding:0.4em;">£Price3</td>
  //       </tr>
  //       <tr>
  //         <td style="padding-top:1em;">Option delivery fee:</td>
  //         <td style="padding-top:1em;">£` + formatPrice(recieptDetails.tip) + `</td>
  //       </tr>
  //       <tr></tr>
  //       <tr>
  //         <td style="padding-top:1em;">Total</td>
  //         <td style="padding-top:1em; font-weight:bold">` + formatPrice(recieptDetails.total) + `</td>
  //       </tr>
  //     </table>
  //     <p>For delivery on ` + date + ` to ` + recieptDetails.deliveryPoint + `</p>
  //     <br>
  //     <p><b>Cancel or Change your Order</b></p>
  //     <p>If you want to cancel or change your order, select the CANCEL button below – and place a new order if you want to. </p>
  //     <p>Please note you need to cancel/change your order at least 45 minutes before your requested delivery time, or you will not receive any refund. (We’re working on a slicker way of doing all this, but for now we hope you don’t find this too inconvenient.)</p>
  //     <p style="color:#ED2C31;">[CANCEL BUTTON]</p>
  //     <br>
  //     <div>
  //       <p>Thanks again – have a great expo… and enjoy your Piccnicc.</p>
  //       <p>Jonny & Avi</p>
  //     </div>
  //     <p>Founders, Piccnicc</p>
  //     <br>
  //     <p>[Logo]</p>
  //     <p style="color:#ED2C31;">Piccnicc: Hampers of Happiness, Delivered.</p>
  //     <p>Terms & Conditions Hyperlinks to T&Cs on website [Jonny to provide]</p>
  //     <p><i>Piccnicc Ltd, 31 King Street West, Manchester M3 2PJ</i></p>
  //   </div>
  // </body>`
}


var formatPiccniccReciept = function(recieptDetails) {
  return '<body><p>Piccnicc Receipt' + recieptDetails.orderNumber + '</p><p>' + recieptDetails + '</p></body>'
}

var formatPiccniccProcessedPayment = function(recieptDetails) {
  return '<body><div><h2>Order from ' + recieptDetails.firstName + ' ' + recieptDetails.lastName + ', #' + recieptDetails.orderNumber + ' payment has been taken</h2></div></body>'
}

module.exports = {
  formatUserReciept: formatUserReciept,
  formatPiccniccReciept: formatPiccniccReciept,
  formatPiccniccProcessedPayment: formatPiccniccProcessedPayment
}
