import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';


let GetOrder = React.createClass({
  renderLineItem: function (details) {
    return details.map(function(lineItem){
      return (
        <div className="row">
          <div className="retailer-quantity col s2 m2 left-align"><span>{lineItem.quantityOrdered}</span></div>
          <div className="retailer-line-item col s4 m4"><span>{lineItem.name}</span></div>
          <div className="retailer-price col s1 m1 right-align"><span>{lineItem.price}</span></div>
        </div>
      )
    })
  },

  render: function() {
    var activeOrders = require('./order-confirmation.jsx').activeOrder;
        console.log(activeOrders)
    if (activeOrders.length === 0) {
      return (
        <div className="white-background">
        <div className="divider"></div>
          <div className="order-option">
            <h4 className="red-color">No active orders</h4>
          </div>
        <div className="divider"></div>
      </div>
    )
  } else {

    var order = activeOrders[0][0].items

    return (
    <div>
      <h1>Order</h1>
      {this.renderLineItem(order)}
    </div>
    )
  }
}

})



let OrderDetails = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]

    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <GetOrder />
    </div>
    );
  }
});

module.exports = OrderDetails
