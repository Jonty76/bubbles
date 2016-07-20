import React from 'react';
import Header from '../header.jsx';
import { Link } from 'react-router';

var ErrorPage = React.createClass({
  render: function() {
    var fontSize = {
      fontSize: '1em',
      paddingTop: '3em'
    };
    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Oops..!"} iconRight={""} iconLeft={"arrow_back"} burgerMenuOptions={""}/>
        <div className="center-align desktop-container">
          <div className="airport-not-served-container">
          <p style={fontSize} className='view-text'> Oops it looks like you've landed on the wrong page. </p>
            <div className="">
              <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ErrorPage;
