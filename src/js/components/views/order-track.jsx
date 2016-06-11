import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';



let OrderIcon = React.createClass({
  render: function() {
    return(
      <div className="center-align" >
        <span><i className="order-status-icon material-icons">shopping_cart</i></span>
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
  render: function() {
    return (
      <div>
        <Header text={"Track Order"}/>
        <div className="order-track-container center-align">
          <div className="valign-wrapper items-container">
          <div className="valign center-this">
            <OrderIcon icon={"lalalala"} />
            <OrderCircle circleNumber={"3"} />
            <OrderStatus status={"HAMPER ON IT'S WAY"} explainer={"your hamper is on its way"}/>
          </div>
          </div>
        </div>
        <Link to="/">
          <div className="base-button btn-large">View Order Details</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderTrack
