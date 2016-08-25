
function formatOrder(order) {
  var parsedOrder = JSON.parse(order);
  var htmlString = "";
  parsedOrder.map(function(restaurant) {
    var restaurantName = "<tr><th style='float:left;'>" + restaurant.name + '</th></tr>';
    var itemList = "";
    restaurant.items.map(function(item) {
      var itemTotal = item.quantityOrdered * item.price;
      var singleItem = "<tr><td style='padding:0.4em;'>" + item.quantityOrdered + "</td><td style='padding:0.4em'>" + item.name + "</td><td style='padding:0.4em;'>" + formatPrice(itemTotal) + "</td></tr>";
      itemList = itemList + singleItem;
    });
    htmlString = htmlString + restaurantName + itemList;
  });
  return htmlString;
}

function formatPrice (price){
  var pounds = price => Math.floor(price/100);
  var pad = (str, len) => str.length < len ? pad('0' + str, len) : str;
  var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
  return '£' + pounds(price) + '.' + pence(price);
}

function formatDate (dateObject) {
  var d = new Date(Number(dateObject));
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = months[d.getMonth()];
  var formattedDate = d.getDate() + " " + month + " " + d.getFullYear()
  return formattedDate;
}

function formatTime (dateObject) {
 var t = new Date(Number(dateObject));
 var hours = t.getHours();
 var minutes = t.getMinutes();
 var time =  hours + ":" + minutes;
 return time;
}

function formatDeliveryPoint(deliveryPoint) {
  if (deliveryPoint === "Main Entrance") {
    return "to the <b>Main Entrance</b>"
  } else {
    return "to Stand: <b>" + deliveryPoint + "</b>"
  }
}

var formatUserReciept = function(recieptDetails) {
return (
  `<body>
    <div style="margin:2em; max-width:40em; font-family:sans-serif;">
      <h2> ${recieptDetails.customerName}, thank you for ordering your Piccnicc.</h2>
      <br>
      <p><b>Order Summary: ${recieptDetails.orderNumber} </b></p>
      <table>
        ${formatOrder(recieptDetails.order)}
        <tr></tr>
        <tr>
          <td style="padding-top:2em;">Optional Delivery Fee:</td>
          <td></td>
          <td style="padding-top:2em;">${formatPrice(recieptDetails.tip)} </td>
        </tr>
        <tr>
          <td style="padding-top:1em; font-weight:bold">Total</td>
          <td></td>
          <td style="padding-top:1em; font-weight:bold"> ${formatPrice(recieptDetails.total)} </td>
        </tr>
      </table>
      <br>
      <p>For delivery at <b>${formatTime(recieptDetails.deliveryTime)}</b> on <b>${formatDate(recieptDetails.deliveryTime)}</b> ${formatDeliveryPoint(recieptDetails.deliveryPoint)} at <b>${recieptDetails.expoName}, ${recieptDetails.expoCenter}</b></p>
      <br>
      <br>
      <p><b>To Cancel or Change your Order</b></p>
      <p>If you want to cancel or change your order, click the CANCEL button below – and then place a new order if you want to. </p>
      <p style="color:#ED2C31;">Please note, cancellation is immediate on clicking. You'll need to cancel/change your order at least 45 minutes before your requested delivery time, or you will not receive any refund.</p>
      <span><a style="color:#ED2C31;" href="https://www.piccnicc.com/#/expo-cancel-order/${recieptDetails.orderNumber}/${recieptDetails.deliveryTime}/${recieptDetails.email}"><b>CANCEL ORDER</b></a></span>

      <div style="margin-top: 4em;">
        <p>Thanks again – have a great expo… and enjoy your Piccnicc.</p>
        <p style="padding-top: 2em;">Jonny & Avi</p>
      </div>
      <p><b>Founders, Piccnicc</b></p>
      <div style="margin-top: 2em;">
        <p style="height: 100px; width: 150px; margin-left: 6em;"><img src="cid:piccnicclogo.png"></p>
        <p style="color:#ED2C31; font-size: 1.2em;">Hampers of Happiness, Delivered.</p>
        <p>Click for our <span><a href="https://www.piccnicc.com/#/expo-terms" style="color:#ED2C31;">Terms & Conditions</a></span> and <span><a href="https://www.piccnicc.com/#/expo-privacy" style="color:#ED2C31">Privacy Policy </a></span></p>        <p><i>Piccnicc Ltd, 31 King Street West, Manchester M3 2PJ</i></p>
      </div>
    </div>
  </body>`
  );
}


var formatPiccniccReciept = function(recieptDetails) {
  return (
  `<body>
    <h2>Piccnicc Order Details for ${recieptDetails.customerName}, #${recieptDetails.orderNumber}</h2>
    <br>
    <p>Pending Payment Proccesed Email</p>
    <p><b>Order Summary: #${recieptDetails.orderNumber} </b></p>
    <table>
      ${formatOrder(recieptDetails.order)}
      <tr>
        <td style="padding-top:1em;">Optional Delivery Fee:</td>
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
    <br>
    <p><b>Delivery Date:</b> ${formatDate(recieptDetails.deliveryTime)}</p>
    <p><b>Delivery Time:</b> ${formatTime(recieptDetails.deliveryTime)}</p>
    <p><b>Delivery Point:</b> ${recieptDetails.deliveryPoint}</p>
    <p><b>Exhibition Name:</b> ${recieptDetails.expoName}</p>
    <p><b>Exhibition Center:</b> ${recieptDetails.expoCenter}</p>
    <br>
    <h3>Customer Details</h3>
    <p><b>Name:</b> ${recieptDetails.customerName}</p>
    <p><b>Email:</b> ${recieptDetails.email}</p>
    <p><b>Phone Number:</b> ${recieptDetails.phoneNumber}</p>

  </body>`
);
};

var formatPiccniccProcessedPayment = function(recieptDetails) {
  return (`<body><div><h2>Order from ${recieptDetails.customerName}, #${recieptDetails.orderNumber} payment has been taken</h2></div></body>`)
};

var formatCancelOrderForPiccnicc = function(cancelDetails) {
  return (`<body><div><h2>Order #${cancelDetails.orderNumber} has been cancelled.</h2></div></body>`)
};

var formatCancelOrderForUser = function(cancelDetails) {
  return (
    `  <body>
        <div style="margin:2em; max-width:40em; font-family:sans-serif;">
          <h2> Your order #${cancelDetails.orderNumber} has been cancelled</h2>
          <br>
          <div>If you want to order something else instead click the link below to head back to the app</div>
          <br></br>
          <span><a style="color:#ED2C31;" href="https://www.piccnicc.com/#/events"><b>START AGAIN</b></a></span>
          <div style="margin-top: 2em;">
            <p>Have a great expo</p>
            <p style="padding-top: 2em;">Jonny & Avi</p>
          </div>
          <p><b>Founders, Piccnicc</b></p>
          <div style="margin-top: 2em;">
            <p style="height: 100px; width: 150px; margin-left: 6em;"><img src="cid:piccnicclogo.png"></p>
            <p style="color:#ED2C31; font-size: 1.2em;">Hampers of Happiness, Delivered.</p>
            <p>Click for our <span><a href="https://www.piccnicc.com/#/expo-terms" style="color:#ED2C31;">Terms & Conditions</a></span> and <span><a href="https://www.piccnicc.com/#/expo-privacy" style="color:#ED2C31">Privacy Policy </a></span></p>
            <p><i>Piccnicc Ltd, 31 King Street West, Manchester M3 2PJ</i></p>
          </div>
        </div>
      </body>`
  )
}

var formatFailedPayment = function(recieptDetails) {
  return (`<body><div><h2>Payment for order #${recieptDetails.orderNumber} for ${recieptDetails.customerName} has failed.</h2></div></body>`)
};

module.exports = {
  formatUserReciept: formatUserReciept,
  formatPiccniccReciept: formatPiccniccReciept,
  formatPiccniccProcessedPayment: formatPiccniccProcessedPayment,
  formatCancelOrderForPiccnicc: formatCancelOrderForPiccnicc,
  formatCancelOrderForUser: formatCancelOrderForUser,
  formatFailedPayment: formatFailedPayment
};
