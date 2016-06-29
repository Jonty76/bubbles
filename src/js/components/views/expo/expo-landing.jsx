import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let expoData  = require('../../../data/expo-data.js');

let smallerFont = {fontSize: "0.8em"}

let ExpoDetails = React.createClass({
  getInitialState: function() {
    return {
      selectedExpoCentre: "",
      selectedExpo: ""
    };
  },

  selectorChange(keyName, event, index, value){
      var change = {};
      change[keyName] = value;
      this.setState(change);
  },

  renderExpo: function() {
    var selectedExpoCentre = this.state.selectedExpoCentre
    var filteredExpos = Object.keys(expoData[selectedExpoCentre])
    return filteredExpos.map(function(expo){
      var name = expoData[selectedExpoCentre][expo].name

      return (
        <MenuItem value={expo} style={smallerFont} primaryText={name} key={name}/>
      )
    })
  },

  selectExpo: function() {
    if (this.state.selectedExpoCentre !== "") {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpo} floatingLabelText="Select Exhibition" onChange={this.selectorChange.bind(this, 'selectedExpo')}>
            {this.renderExpo()}
          </SelectField >
        </div>
      )
    }
  },

  renderExpoCentre: function() {
    return Object.keys(expoData).map(function(venue){
      return (
        <MenuItem value={venue} style={smallerFont} primaryText={venue} key={venue}/>
      )
    })
  },

  render: function() {
    return (
      <div className="center-align">
        <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpoCentre} floatingLabelText="Select Exhibition Centre" onChange={this.selectorChange.bind(this, 'selectedExpoCentre')}>
          {this.renderExpoCentre()}
        </SelectField >

        {this.selectExpo()}

      </div>

    );
  }
})


var ExpoLanding = React.createClass({
  render: function() {

    var burgerMenuOptions = ["About+/about", "Logout+/login"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
        <div className="center-align desktop-container">
          <div className="content-container">
            <div className="question-container">
              <p className="standard-question-style">Hampers of Happiness, Delivered </p>
            </div>

            <ExpoDetails />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoLanding;
