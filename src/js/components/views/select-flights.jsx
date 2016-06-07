import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let FlightData  = require('../../data/flight-data.js');

let SelectAirline = React.createClass({
  getInitialState: function() {
    return {
      selectedAirline: "Select Airline"
    };
  },

  selectorChange: function(event, index, value) {
    this.setState({
      selectedAirline: value
    })
  },

  renderInputFields: function() {
    var airlineOptions = FlightData.airlineOptions;
    return airlineOptions.map(function(airline){
      return (
        <MenuItem key={airline} value={airline} primaryText={airline} />
      )
    })
  },

  render: function() {
    console.log(this.state.selectedAirline)
    return (
      <div>
      <SelectField className="dropdown" value={this.state.selectedAirline} floatingLabelText="Select Airline" onChange={this.selectorChange}>
        {this.renderInputFields()}
      </ SelectField>
    </div>
    )
  }
});

// let SelectDate = React.createClass({
//
// });

let flightDetails = React.createClass({
  render: function() {
    return (
      <div>
        <SelectAirline />
      </div>
    )
  }
})




module.exports = flightDetails
