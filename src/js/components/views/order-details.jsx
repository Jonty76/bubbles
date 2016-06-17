import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

var activeOrders = require('./order-confirmation.jsx').activeOrder;

let GetOrder = React.createClass({
  componentDidUpdate: function (nextProps, nextState){

  },

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

  renderOrderByRestaurant: function(order){
    var that = this
    return order.map(function(elem){
      var items = elem.items
      return (
        <div>
          <h3>{elem.name}</h3>
          {that.renderLineItem(items)}
        </div>
      )
    })
  },

  render: function() {
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
    var order = activeOrders[0]
    return (
    <div>
      <h1>Order</h1>
      {this.renderOrderByRestaurant(order)}
    </div>
    )
  }
}
})


let OrderDetails = React.createClass({
  emptyArray: function(){
    activeOrders = [];
  },

  onClick: function (){
    this.props.actions.clearBasket()
    this.emptyArray()
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]

    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <GetOrder />
        <button>Edit Order</button>
        <button onClick={this.onClick}>Cancel Order</button>
    </div>
    );
  }
});

module.exports = OrderDetails
