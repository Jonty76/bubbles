import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let FlightDetails  = require('./select-flight.jsx').Page

let AirportNotServedButton = React.createClass({
  render: function() {
    return (
      <Link to='/airport-not-served'>
        <div className="next-button"> NEXT </div>
      </Link>
    );
  }
});


let Page = React.createClass({
  getInitialState: function() {
    return {
      selectedAirport: "Select Airport"
    };
  },

  selectorChange: function(event, index, value) {
    this.setState({
      selectedAirport: value
    })
  },

  renderFlightDetailsOrRedirect: function() {
    if(this.state.selectedAirport === 'gatwick') {
      return <FlightDetails />
    } else {
      return AirportNotServedButton
    }
  },

  render: function() {
    console.log(this.state.selectedAirport);
    return (
      <div>
        <p className="view-text"> WHICH AIRPORT ARE YOU FLYING FROM? </p>
            <div>
              <SelectField value={this.state.selectedAirport} floatingLabelText="Select Airport" onChange={this.selectorChange}>
                <MenuItem value="heathrow" primaryText="Heathrow - LHR" />
                <MenuItem value="gatwick" primaryText="Gatwick - LGW" />
                <MenuItem value="stanstead" primaryText="Stanstead - STN" />
                <MenuItem value="luton" primaryText="Luton - LTN" />
              </SelectField >
            </div>

            <AirportNotServedButton />
        {this.renderFlightDetailsOrRedirect()}
      </div>
    );
  }
});

module.exports = Page
