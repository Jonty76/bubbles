import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import { Link } from 'react-router';

let FlightDetails  = require('./select-flight.jsx').Page

let Selector = React.createClass({
 render: function() {
   let airportOptions = [
     {label : "Select Airport"},
     {label : "Heathrow Airport - LHR"},
     {label : "Gatwick Airport - LGW"},
     {label : "Luton - LTN"},
     {label : "Stanstead - STN"}
   ];
   return (
       <Select
         name="airportSelector"
         options={airportOptions}
         onChange={this.props.onChange}
       />
  );
 }
});



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
      selectedAirport: null
    };
  },

  selectorChange: function(name, value) {
    this.setState({
      selectedAirport: value
    })
  },

  renderFlightDetailsOrRedirect: function() {
    if(this.state.selectedAirport === 'Gatwick Airport - LGW') {
      return <FlightDetails />
    } else {
      return AirportNotServedButton
    }
  },

  render: function() {
    return (
      <div>
        <p className="view-text"> WHICH AIRPORT ARE YOU FLYING FROM? </p>
        <Formsy.Form>
          <fieldset>
            <Selector onChange={this.selectorChange}/>
          </fieldset>
        </Formsy.Form>
        <AirportNotServedButton />
        {this.renderFlightDetailsOrRedirect()}
      </div>
    );
  }
});

module.exports = {
  Page,
  Components: {
    Selector
  }
}
