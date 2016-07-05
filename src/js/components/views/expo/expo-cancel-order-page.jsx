import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';

var ExpoOrderConfirmedPage = React.createClass({

  render: function() {

    var burgerMenuOptions = ["About+/about", "Create Order+/", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]

    return (
    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Cancel Order"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
      <div className="order-confirmed-container center-align">

        <p id="top-margin">Your order has been successfully cancelled.</p>

        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
        </div>

        </div>
      </div>
    );
  }
});

module.exports = ExpoOrderConfirmedPage
