import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoLanding = React.createClass({
  render: function() {

    var burgerMenuOptions = ["About+/about", "Logout+/login"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          Hello World
        </div>
      </div>
    );
  }
});

module.exports = ExpoLanding;
