import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let expoData  = require('../../data/expo-data.js');
let smallerFont = {fontSize: "1em"}

var LandingPage = React.createClass({

  getInitialState: function(){
    return {
      isSelected: ""
    }
  },

  componentDidMount: function (){
    $("#button-collapse").click(function(){
      console.log("clickedddd");
      $("#mobile-demo").css("display", "initial")
    })
    $(document).ready(function(){
      $("#button-collapse").sideNav({
        menuWidth: 220,
        edge: 'right',
        closeOnClick: true
      });
    })
  },

  isSelected: function(event, index, value){
    this.setState({
      isSelected: value
    })
  },

  render: function() {
    return (
      <div className="landing-background">


      <div className="navbar-fixed">
        <nav className="nav-class">
          <div className="header nav-wrapper white-nav">
            <p className="left" id="brand-logo" style={{marginLeft:"1em"}}>Piccnicc</p>
            <ul data-activates="mobile-demo" id="button-collapse" className="button-collapse right"><i className="material-icons icon-right">menu</i></ul>
              <ul className="side-nav fixed red-side-nav" id="mobile-demo" style={{display:"none", zIndex:"-1"}}>
                <li>Hidden</li>
                <li><Link className="right" to={"/expo-about"}>About</Link></li>
                <li><Link className="right" to={"/expo-faq"}>FAQ</Link></li>
              </ul>
          </div>
        </nav>
      </div>


        <p className="bottom-text">© Piccnicc Ltd 2016</p>
        <div className="valign-wrapper landing-content-container">
          <div className="landing-content">
            <h5 className="landing-dropdown-label" style={{marginRight:"5em"}}>Where do you want to Piccnicc?</h5>
            <div className="landing-dropdown">
              <SelectField className="dropdown" style={smallerFont} value={"Delivering Soon..."} disabled={true}>
                <MenuItem value={"Delivering Soon..."} style={smallerFont} primaryText={"Delivering Soon..."}/>
              </SelectField >
            </div>
            <p id="landing-validation-text">You must select an exhibition centre</p>
            <div>
              <div id="landing-button" className="btn-large">Piccnicc Time</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage
