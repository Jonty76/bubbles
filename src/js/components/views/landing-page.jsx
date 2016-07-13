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
      selectedExpoCenter: ""
    }
  },

  componentDidMount: function() {
    var that = this;

    $(document).ready(function(){
      $("#button-collapse").sideNav({
        menuWidth: 170,
        edge: 'right',
        closeOnClick: true
      });
      $("#button-collapse").click(function(){
        $(".landing-menu").css("display", "block")
      })
    })

    $("#landing-button").click(function(){
      if(that.state.selectedExpoCenter === ""){
        $("#landing-validation-text").show()
      } else {
        var location = window.location.origin + window.location.pathname + "#/select-expo"
        window.location.href = location
      }
    })
  },

  setExpoCenter: function(event, index, value){
    this.setState({
      selectedExpoCenter: value,
      selectedExpo: "",
      selectedDeliveryDate: ""

    })
    this.props.actions.setExpoCenter(event, index, value)
  },

  renderExpoCenter: function() {
    return Object.keys(expoData).map(function(venue){
      return (
        <MenuItem value={venue} style={smallerFont} primaryText={venue} key={venue}/>
      )
    })
  },

  selectExpoCenter: function(){
    return (
      <div className="landing-dropdown">
        <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpoCenter} onChange={this.setExpoCenter}>
          {this.renderExpoCenter()}
        </SelectField >
      </div>
    )
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]

    try {
      localStorage.setItem("privateBrowsing", false)
    return (
      <div className="landing-background">
      <ul data-activates="mobile-demo" id="button-collapse" className="button-collapse right"><i className="material-icons landing-menu-icon">menu</i></ul>
        <ul className="side-nav fixed landing-menu" id="mobile-demo">
          <li>About</li>
          <li>FAQs</li>
        </ul>

        <img className="landing-logo-container" src="./piccnicclogo.png" alt="Piccnicc Logo"></img>
        <p className="bottom-text">© Piccnicc Ltd 2016</p>
        <div className="valign-wrapper landing-content-container">
          <div className="landing-content">
            <h2>Delivering Great Food</h2>
            <h2>to People on the Move</h2>
            <h5 className="landing-dropdown-label">Select Exhibition Center</h5>
            {this.selectExpoCenter()}
            <p id="landing-validation-text">You must select an exhibition centre</p>
            <div>
              <div id="landing-button" className="waves-effect waves-light btn-large">Piccnicc Time</div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch(err) {
    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align">

          <p id="large-p">You are using private browsing. Please turn off private browsing to use Piccnicc.</p>

          <div className="">
            <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
          </div>
        </div>
      </div>
    )
  }
  }
});

module.exports = LandingPage
