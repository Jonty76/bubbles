import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let ActiveOrders = React.createClass({
  render: function() {
    var activeOrders = require('./order-confirmation.jsx').orders;

    if (activeOrders.length === 0){
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
      return (
        <div className="white-background">
          <div className="divider"></div>
          <div className="order-option">
            <h4>{activeOrders[0][0].name}</h4>
              <i className="small plane-icon material-icons">flight_takeoff</i>
              <p className="sub-text">LAX - 1 July</p>
          </div>
          <div className="active-arrow-div">
            <i className="material-icons">arrow_forward</i>
          </div>
          <div className="divider"></div>
        </div>
      );
    }
  }
});

let PastOrders = React.createClass({
  render: function() {
    return (
      <div className="white-background">
        <div className="divider"></div>
        <div className="order-option">
          <h4>Grain Store</h4>
            <i className="small plane-icon material-icons">flight_takeoff</i>
            <p className="sub-text">CDG - 3 April</p>
        </div>
        <div className="past-arrow-div">
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="divider"></div>
          <div className="order-option">
            <h4>Yo! Sushi</h4>
            <i className="small plane-icon material-icons">flight_takeoff</i>
            <p className="sub-text">NRB - 24 March</p>
          </div>
          <div className="past-arrow-div">
            <i className="material-icons">arrow_forward</i>
          </div>
          <div className="divider"></div>
      </div>
    );
  }
});


let OrderHistory = React.createClass({
  render: function() {
    return (
      <div className="grey-background">
        <Header text={"Your Orders"}/>
        <h6 className="subtitle-text">ACTIVE</h6>
        <ActiveOrders />
        <h6 className="subtitle-text">PAST</h6>
        <PastOrders />
      </div>
    );
  }
});

module.exports = OrderHistory
