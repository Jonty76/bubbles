import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let orderStatusObject = {
  "1": {
    orderIcon: "shopping_basket",
    orderCircle: "",
    orderStatus: "Order Confirmed",
    orderExplainer: "We've recieved your order"
  },
  "2": {
    orderIcon: "kitchen",
    orderCircle: "",
    orderStatus: "Being Freshly Prepared",
    orderExplainer: "Your order is being made up by your chosen restaurant"
  },
  "3": {
    orderIcon: "directions_run",
    orderCircle: "",
    orderStatus: "Hamper On Its Way",
    orderExplainer: "Our piccniccers are taking your order to your pick up"
  },
  "4": {
    orderIcon: "local_dining",
    orderCircle: "",
    orderStatus: "Piccnicc Time",
    orderExplainer: "Pick up your order when you are ready"
  },
  "5": {
    orderIcon: "check_box",
    orderCircle: "",
    orderStatus: "Already Picced Up!",
    orderExplainer: "This order has been picked up"
  }
}


let OrderIcon = React.createClass({
  render: function() {
    return(
      <div className="center-align" >
        <span><i className="order-status-icon material-icons">{this.props.icon}</i></span>
      </div>
    )
  }
})

let OrderCircle = React.createClass({
  render: function() {
    return(
      <div>
        <span><i className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i className="small order-circle-icon material-icons">radio_button_checked</i></span>
        <span><i className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
      </div>
    )
  }
})


let OrderStatus = React.createClass({
  render: function() {
    return(
      <div>
        <div className="order-status">{this.props.status}</div>
        <div className="order-explainer">{this.props.explainer}</div>
      </div>
    )
  }
})


let OrderTrack = React.createClass({
  getInitialState: function() {
      return {
        orderPosition: "2"
      };
  },

  renderOrderPosition: function() {
    var statusKeys = Object.keys(orderStatusObject)
    var orderPosition = this.state.orderPosition

    statusKeys.map(function(key, i){
      console.log(key, orderPosition)
      if (orderPosition === key) {
        var orderPositionKey = key
        console.log("it works!", orderPositionKey)
        console.log(orderStatusObject[orderPositionKey].orderStatus)
        return (
          <div className="valign center-this">
            <OrderIcon icon={orderStatusObject[orderPositionKey].icon} />
            <OrderCircle circleNumber={"77"} />
            <OrderStatus status={orderStatusObject[orderPositionKey].orderStatus} explainer={orderStatusObject[orderPositionKey].orderExplainer}/>
          </div>
        )
      } else {
        console.log("else")
        return (
          <div className="rednerrrr">this isn't rendering</div>
        )
      }
   })},



  render: function() {
    return (
      <div>
        <Header text={"Track Order"}/>
        <div className="order-track-container center-align">
          <div className="valign-wrapper items-container">
            {this.renderOrderPosition()}
          </div>
          <div>Click to see map of pick up points here</div>
        </div>
        <Link to="/">
          <div className="base-button btn-large">View Order Details</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderTrack
