import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from '../header.jsx';

var MapView = React.createClass({

  componentDidMount: function() {
    $(document).ready(function(){
      $('.materialboxed').materialbox();
    });
  },

  matchTerminal: function() {
    var terminal = this.props.terminal
    if (terminal === "north") {
      return (
        <img className="materialboxed" width={"100%"} src="https://cloud.githubusercontent.com/assets/9627463/16357503/976f8a56-3af0-11e6-885f-70ca5d310d30.png"></img>
    )
    } else if (terminal === "south"){
      return (
        <img className="materialboxed" width={"100%"} src="https://cloud.githubusercontent.com/assets/9627463/16357504/976fa928-3af0-11e6-8d6b-1f885440ab55.png"></img>
      )
    } else {
      return (
        <div>
          <img className="materialboxed" width={"100%"} src="https://cloud.githubusercontent.com/assets/9627463/16357503/976f8a56-3af0-11e6-885f-70ca5d310d30.png"></img>
          <div className="divider"></div>
          <img className="materialboxed" width={"100%"} src="https://cloud.githubusercontent.com/assets/9627463/16357504/976fa928-3af0-11e6-8d6b-1f885440ab55.png"></img>
        </div>
      )
   }
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Start Again+/", "Order History+/order-history", "Logout+/login"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Map"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
          <div id="terminal-map" className="desktop-container">
            <div className="row">
              {this.matchTerminal()}
            </div>
          </div>
      </div>
    );
  }
});

module.exports = MapView;
