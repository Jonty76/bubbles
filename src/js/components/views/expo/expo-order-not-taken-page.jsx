import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';

var ExpoOrderNotTakenPage = React.createClass({


  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (

    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Order Confirmed"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
      <div className="order-confirmed-container center-align">

        <p className="top-line">Sorry, something's gone wrong</p>

        <p>We haven't been able to process your order right now. We're sorry something's gone wrong but you haven't been charged.</p>

        <p>Please try ordering again. If that doesn't work email <a href="mailto:jonny@piccnicc.com">jonny@piccnicc.com</a> and we'll see what we can do.</p>

          <div className="">
            <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = ExpoOrderNotTakenPage
