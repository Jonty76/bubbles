import React from 'react';
import { Link } from 'react-router';
import Header from '../../header.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import UnresponsiveHeader from '../../unresponsive-header.jsx'

let expoData  = require('../../../data/expo-data.js');
let smallerFont = {fontSize: "1em"}

var ExpoLandingPage = React.createClass({

  getInitialState: function(){
    return {
      selectedExpoCenter: ""
    }
  },

  componentDidMount: function() {
    var that = this;
    localStorage.clear()
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

    try {
      localStorage.setItem("privateBrowsing", false)
    return (
      <div className="landing-background">
      <UnresponsiveHeader active={true}/>

        <p className="bottom-text">© Piccnicc Ltd 2016</p>
        <div className="valign-wrapper landing-content-container">
          <div className="landing-content">
            <h5 className="landing-dropdown-label">Exhibition Centre</h5>
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
      <UnresponsiveHeader active={true}/>
        <div className="center-align">

          <p className="large-p">You are using private browsing. Please turn off private browsing to use Piccnicc.</p>

          <div className="">
            <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
            <p className="piccnicc-slogan">Hampers of Happiness, Delivered</p>
          </div>
        </div>
      </div>
    )
  }
  }
});

module.exports = ExpoLandingPage
