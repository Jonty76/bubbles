import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';

var ExpoOrderConfirmedPage = React.createClass({

  formatPrice: function (price){
    var pounds = price => Math.floor(price/100);
    var pad = (str, len) => str.length < len ? pad('0' + str, len) : str;
    var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
    return '£' + pounds(price) + '.' + pence(price);
  },

  render: function() {
    var total = Number(localStorage.getItem("total"))
    var deliveryPoint = localStorage.getItem("deliveryPoint")
    localStorage.removeItem("order")

    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (

    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Order Confirmed"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
      <div className="order-confirmed-container center-align">

        <p className="top-line">Delicious!</p>

        <p>Your order for {this.formatPrice(total)} is confirmed and we’ve emailed you the receipt with all the usual garnish.</p>

        <p>Your Hamper will be delivered to {deliveryPoint} at the time requested in your order.</p>

        <p>We hope you enjoy your Piccnicc</p>

        <p>Psst! Should you need to cancel or change your order, please use the CANCEL button in your confirmation email – and place a new order if you want to.</p>

        <p>Any cancelation / change needs to be made at least 45 minutes before the requested delivery time, otherwise you will not receive a refund.</p>

          <div className="">
            <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
            <p className="piccnicc-slogan">Hampers of Happiness, Delivered</p>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = ExpoOrderConfirmedPage
