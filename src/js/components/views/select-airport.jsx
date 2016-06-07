import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let FlightDetails  = require('./select-flights.jsx');

let AirportNotServedButton = React.createClass({
  render: function() {
    return (
      <Link to='/airport-not-served'>
        <div className="btn-large base-button"> NEXT </div>
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
      <div className="">
          <div className="container center-align">
            <div className="body-container">
              <div className="col 12">
                <p className="standard-question-style"> Which airport are you flying from? </p>
              </div>
                <div className="left-align">
                  <SelectField className="dropdown" value={this.state.selectedAirport} floatingLabelText="Select Airport" onChange={this.selectorChange}>
                    <MenuItem value="heathrow" primaryText="Heathrow - LHR" />
                    <MenuItem value="gatwick" primaryText="Gatwick - LGW" />
                    <MenuItem value="stanstead" primaryText="Stanstead - STN" />
                    <MenuItem value="luton" primaryText="Luton - LTN" />
                  </SelectField >
                </div>
                {this.renderFlightDetailsOrRedirect()}
              </div>
            </div>

        <AirportNotServedButton />
      </div>
    );
  }
});

module.exports = Page
