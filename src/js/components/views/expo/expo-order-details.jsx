import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';


var ExpoAbout = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          <div className="content-container margin-all">
            <p className="">To edit or cancel your order, please check your confirmation email (sent by orders@piccnicc.com) and follow the instructions.</p>
            <br></br>
            <p>Orders must be cancelled at least 45 minutes before requested delivery time or no refund can be given</p>
            <div className="piccnicc-sig-style">
              <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
              <p className="piccnicc-slogan">Hampers of Happiness, Delivered</p>
              <p>Visit us at <a href='http://www.piccnicc.com/'>piccnicc.com</a></p>
              <p>Follow us on <a href='https://twitter.com/piccniccapp'>twitter.com/piccniccapp</a> #nomoregreychicken</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoAbout;
