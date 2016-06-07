import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let FlightData  = require('../../data/flight-data.js');

var renderInputFields = function(details) {
  return details.map(function(detail) {
    return (
      <MenuItem key={detail} value={detail} primaryText={detail} />
    )
  })
}

//Seclect Airline - Select Date and Select Flight are nested inside
let SelectAirline = React.createClass({
  getInitialState: function() {
    return {
      selectedAirline: "",
      selectedFlightNumber: ""
    };
  },
  selectorChange: function(event, index, value) {
    this.setState({
      selectedAirline: value,
      selectedFlightNumber: ""
    })
  },
  render: function() {
    return (
      <div>
      <SelectField className="dropdown" value={this.state.selectedAirline} floatingLabelText="Select Airline" onChange={this.selectorChange}>
        {renderInputFields(FlightData.airlineOptions)}
      </ SelectField>
      <SelectDate />
      <SelectFlightNumber selectedAirline={this.state.selectedAirline} />
    </div>
    )
  }
});


//Select Date function, data not linked to anthing
let SelectDate = React.createClass({
  getInitialState: function(date) {
    return {
      selectedDate: 2
    };
  },
  datePickerChange: function(event, date) {
    this.setState({
      selectedDate: date
    })
  },
  render:function() {
    return(
      <div>
        <DatePicker hintText="Select the date of your flight" onChange={this.datePickerChange}/>
      </div>
    )
  }
});

//Select Flight Number, looks up in JSON object
let SelectFlightNumber = React.createClass({
  getInitialState: function() {
    return {
      selectedFlightNumber: "",
      lookUpAirline: ""
    };
  },
  selectorChange: function(event, index, value) {
    this.setState({
      selectedFlightNumber: value
    })
  },
  renderCorrespondingFlightNumbers: function() {
    var airline = (this.props.selectedAirline).replace(/\s+/g, '');
    var correspondingFlights = FlightData.flightsByAirline[airline].flightNumbers;

    return (
      correspondingFlights
    )
  },

  renderFullFlightDetails: function() {
    if(this.state.selectedFlightNumber === ""){
      return (<div></div>)
    } else {
    var airline = (this.props.selectedAirline).replace(/\s+/g, '');
    var flight = this.state.selectedFlightNumber


    var flightLookUp = FlightData.flightsByAirline[airline][flight]
    console.log('flightlookup', flightLookUp)
    if(flightLookUp.Status === "Approved") {
      return (
        <div>
          <p>Airline: {airline}</p>
          <p>{flight}</p>
          <p>From: LGW London Gatwick</p>
          <p>To: {flightLookUp.To}</p>
          <p>Time: {flightLookUp.Time}</p>
          <p>Gate: [tbc]</p>
        </div>
      )
    } else {
      return (
        <div>
          <p className = 'view-text'> Your flight departs in less than one hour. Unfortunately, that doesn't give us quite enough time to have your order made up, collected and delivered in good time for you to board, so we can't accept your order this time.
            Please try again next time you fly, just give us a little bit more notice - you can book any time up to 60 minutes before scheduled take-off.

            Have  a safe flight,

            Piccnicc
          </p>
        </div>
      )
    }
  }
  },

  render:function() {
    return(
      <div>
        <SelectField className="dropdown" value={this.state.selectedFlightNumber} floatingLabelText="Select Flight" onChange={this.selectorChange}>
          {renderInputFields(this.renderCorrespondingFlightNumbers())}
        </ SelectField>
        {this.renderFullFlightDetails()}
      </div>
    )
  }
})




//Overall Component, exported funciton
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
