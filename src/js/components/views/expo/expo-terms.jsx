import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';


var ExpoTerms = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Terms and Conditions"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          <div className="content-container margin-all">
            <p>Expo Terms</p>

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

module.exports = ExpoTerms;
