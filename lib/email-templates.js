
function formatOrder(order) {
  console.log("format order runs>>", order)
  var parsedOrder = JSON.parse(order)
  var htmlString = ""
  parsedOrder.map(function(restaurant) {
    var restaurantName = "<tr><th style='float:left;'>" + restaurant.name + '</th></tr>'
    var itemList = ""
    restaurant.items.map(function(item) {
      singleItem = "<tr><td style='padding:0.4em;'>" + item.quantityOrdered + "</td><td style='padding:0.4em;'>" + item.name + "</td><td style='padding:0.4em;'>" + formatPrice(item.price) + "</td></tr>"
      itemList = itemList + singleItem
    })
    htmlString = htmlString + restaurantName + itemList
  })
  return htmlString
}


function formatPrice (price){
  var pounds = price => Math.floor(price/100);
  var pad = (str, len) => str.length < len ? pad('0' + str, len) : str;
  var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
  return '£' + pounds(price) + '.' + pence(price);
}



var formatUserReciept = function(recieptDetails) {
var t = new Date(Number(recieptDetails.deliveryTime))
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var month = months[t.getMonth()]
var formattedDate = t.getDate() + " " + month + " " + t.getFullYear()

return (
  `<body>
    <div style="margin:2em; max-width:40em; font-family:sans-serif;">
      <h2> ${recieptDetails.firstName}, thank you for ordering your Piccnicc.</h2>
      <br>
      <p><b>Order Summary: ${recieptDetails.orderNumber} </b></p>
      <table>
        ${formatOrder(recieptDetails.order)}
        <tr>
          <td style="padding-top:1em;">Optional delivery fee:</td>
          <td></td>
          <td style="padding-top:1em;">${formatPrice(recieptDetails.tip)} </td>
        </tr>
        <tr></tr>
        <tr>
          <td style="padding-top:1em;">Total</td>
          <td></td>
          <td style="padding-top:1em; font-weight:bold"> ${formatPrice(recieptDetails.total)} </td>
        </tr>
      </table>
      <p>For delivery on ${formattedDate} to ${recieptDetails.deliveryPoint}</p>
      <br>
      <br>
      <div>
        <p>Thanks again – have a great expo… and enjoy your Piccnicc.</p>
        <p>Jonny & Avi</p>
      </div>
      <p>Founders, Piccnicc</p>
      <br></br>
      
      <p><b>P.S To Cancel or Change your Order</b></p>
      <p>If you want to cancel or change your order, select the CANCEL button below – and place a new order if you want to. </p>
      <p>Please note you need to cancel/change your order at least 45 minutes before your requested delivery time, or you will not receive any refund. (We’re working on a slicker way of doing all this, but for now we hope you don’t find this too inconvenient.)</p>
      <a href="bubbles-mvp.herokuapp.com/#/cancel-order/${recieptDetails.orderNumber}/${recieptDetails.deliveryTime}">CANCEL ORDER</a>

      <br>
      <p>[Logo]</p>
      <p style="color:#ED2C31;">Piccnicc: Hampers of Happiness, Delivered.</p>
      <p>Terms & Conditions Hyperlinks to T&Cs on website [Jonny to provide]</p>
      <p><i>Piccnicc Ltd, 31 King Street West, Manchester M3 2PJ</i></p>
    </div>
  </body>`
  )
}


var formatPiccniccReciept = function(recieptDetails) {
  return '<body><p>Piccnicc Receipt' + recieptDetails.orderNumber + '</p><p>' + recieptDetails + '</p></body>'
}

var formatPiccniccProcessedPayment = function(recieptDetails) {
  return '<body><div><h2>Order from ' + recieptDetails.firstName + ' ' + recieptDetails.lastName + ', #' + recieptDetails.orderNumber + ' payment has been taken</h2></div></body>'
}

var formatCancelOrder = function(orderNumber) {
  return '<body><div><h2>Order #' + orderNumber + ' has been cancelled.</h2></div></body>'
}

module.exports = {
  formatUserReciept: formatUserReciept,
  formatPiccniccReciept: formatPiccniccReciept,
  formatPiccniccProcessedPayment: formatPiccniccProcessedPayment,
  formatCancelOrder: formatCancelOrder
}
