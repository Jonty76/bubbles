import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import UnresponsiveHeader from '../unresponsive-header.jsx'

let expoData  = require('../../data/expo-data.js');
let smallerFont = {fontSize: "1em"}

var LandingPage = React.createClass({

  getInitialState: function(){
    return {
      isSelected: ""
    }
  },

  isSelected: function(event, index, value){
    this.setState({
      isSelected: value
    })
  },

  render: function() {
    return (
      <div className="landing-background">
      <UnresponsiveHeader active={false}/>

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
