import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoFaq = React.createClass({

  componentDidMount: function() {
    $('#mail-gun-trigger').click(function(){
      $.post("/mail-test", function(data, status){

        console.log("data", data, "status", status)
      });
    })
  },


  render: function() {
    var burgerMenuOptions = ["Logout+/login", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          <div className="content-container margin-all">
            <div className="">
              <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
            </div>
            <h2>FAQ</h2>
            <p className='view-text'> Piccnicc is an online ordering service, which delivers tasty food from restaurants to exhbitiors and attendees. </p>
            <p className='view-text'>Whether you're stuck to your stand or just don't want to wait in line, nobody should have to eat bland, unhealthy convienience food. </p>

            <p className='view-text'>Piccnicc - Hampers of Happiness, Delivered</p>
            <p className='view-text'>Visit us at <a href='http://www.piccnicc.com/'>piccnicc.com</a></p>
            <p className='view-text'>Follow us on <a href='https://twitter.com/piccniccapp'>twitter.com/piccniccapp</a> #nomoregreychicken</p>

            <button id="mail-gun-trigger">Test button</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoFaq;
