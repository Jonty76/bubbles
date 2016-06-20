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
        <img className="materialboxed" width="400" src="https://cloud.githubusercontent.com/assets/9627463/16157776/fabdf74a-34b1-11e6-90cb-01627b05bffd.png"></img>
      )
    } else if (terminal === "south"){
      return (
        <img className="materialboxed" width="400" src="https://cloud.githubusercontent.com/assets/9627463/16157777/fabe7292-34b1-11e6-91fa-732656c75d0c.png"></img>
      )
    } else {
      return (
        <div>
          <img className="materialboxed" width="400" src="https://cloud.githubusercontent.com/assets/9627463/16157776/fabdf74a-34b1-11e6-90cb-01627b05bffd.png"></img>
          <div className="divider"></div>
          <img className="materialboxed" width="400" src="https://cloud.githubusercontent.com/assets/9627463/16157777/fabe7292-34b1-11e6-91fa-732656c75d0c.png"></img>
        </div>
      )
   }
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Map"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
          <div id="terminal-map" className="">
            <div className="row">
              {this.matchTerminal()}
            </div>
          </div>
      </div>
    );
  }
});

module.exports = MapView;
