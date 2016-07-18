import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';


var ExpoAbout = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          <div className="content-container margin-all">
            <p className="">To view or cancel your order if you've made one, please check your email address for an email from Piccnicc.com and cancel using the link in the email.</p>
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
