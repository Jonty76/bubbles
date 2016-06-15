import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let orderStatusObject = [
  {
    orderIcon: "shopping_basket",
    orderCircle: "1",
    orderStatus: "Order Confirmed",
    orderExplainer: "We've recieved your order"
  },
  {
    orderIcon: "kitchen",
    orderCircle: "2",
    orderStatus: "Being Freshly Prepared",
    orderExplainer: "Your order is being made up by your chosen restaurant"
  },
  {
    orderIcon: "directions_run",
    orderCircle: "3",
    orderStatus: "Hamper On Its Way",
    orderExplainer: "Our piccniccers are taking your order to your pick up"
  },
  {
    orderIcon: "local_dining",
    orderCircle: "4",
    orderStatus: "Piccnicc Time",
    orderExplainer: "Pick up your order when you are ready"
  },
  {
    orderIcon: "check_box",
    orderCircle: "5",
    orderStatus: "Already Picced Up!",
    orderExplainer: "This order has been picked up"
  }
]


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
        <span><i id="1" className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i id="2" className="small order-circle-icon material-icons">radio_button_checked</i></span>
        <span><i id="3" className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i id="4" className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
        <span><i id="5" className="small order-circle-icon material-icons">radio_button_unchecked</i></span>
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
        orderPosition: "1"
      };
  },

  renderOrderPosition: function() {
    var orderPosition = this.state.orderPosition

    var activeStatus = orderStatusObject.find(function(status){
      console.log("key>>>>", status, orderPosition)

      if (orderPosition === status.orderCircle) {
        console.log("it works", status.orderStatus)
        return status
      }
   })

   return (
     <div>
       <div className="valign center-this">
         <OrderIcon icon={activeStatus.orderIcon} />
         <OrderCircle circleNumber={activeStatus.orderCircle} />
         <OrderStatus status={activeStatus.orderStatus} explainer={activeStatus.orderExplainer}/>
       </div>
     </div>
   )

   console.log("active status>>>>>>", activeStatus);

},



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
