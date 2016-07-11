import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let expoData  = require('../../data/expo-data.js');
let smallerFont = {fontSize: "0.8em"}

var LandingPage = React.createClass({

  getInitialState: function(){
    return {
      selectedExpoCenter: ""
    }
  },

  componentDidMount: function() {
    var that = this;

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
      <div>
        <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpoCenter} floatingLabelText="Select Exhibition Center" onChange={this.setExpoCenter}>
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

    <div className="custom-container desktop-container">
      <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
      <h2>Landing Page</h2>
      <p id="landing-validation-text" className="validation-text center-align">Please select an exhibition centre</p>
      {this.selectExpoCenter()}

      <div>
        <div id="landing-button" className="waves-effect waves-light base-button btn-large">Piccnicc Time</div>
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
