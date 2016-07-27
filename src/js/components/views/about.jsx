import React from 'react';
import Header from '../header.jsx';
import { Link } from 'react-router';

var About = React.createClass({
  render: function() {
    var fontSize = {
      fontSize: '1em'
    };
    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"About"} iconRight={""} iconLeft={"arrow_back"} burgerMenuOptions={""}/>
        <div className="center-align desktop-container">
          <div className="airport-not-served-container">
            <p style={fontSize} className='view-text'> Piccnicc is an online ordering service, which delivers tasty food from airport restaurants to passengers at the gate. </p>
            <p style={fontSize} className='view-text'>Whether you're rushing to make a connection or just don't want to wait in line, nobody should have to eat bland, unhealthy plane food. </p>
            <p style={fontSize} className='view-text'>Piccnicc is also perfect for passengers who want to eat at the gate, rather than in-flight.</p>
            <p style={fontSize} className='view-text'>We hope you enjoy our service and wish you a safe flight.</p>
              <div className="">
                <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
              </div>
            <p className='piccnicc-slogan'>Hampers of Happiness, Delivered</p>
            <p className='view-text'>Follow us on <a className="link-text" href='https://twitter.com/piccniccapp' target='_blank'>twitter.com/piccniccapp</a> #nomoregreychicken</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
