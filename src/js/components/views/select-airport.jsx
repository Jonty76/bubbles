import React from 'react';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Header from '../header.jsx';

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
      return <FlightDetails setTerminal={this.props.actions.setTerminal} />
    } else {
      return <AirportNotServedButton />
    }
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/logout"]
    return (
      <div className="desktop-container">
          <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
          <div className="question-container">
            <p className="standard-question-style"> Piccnicc Slogan goes here! </p>
          </div>

          <div className="center-align">
            <SelectField className="dropdown" value={this.state.selectedAirport} floatingLabelText="Select Airport" onChange={this.selectorChange}>
                <MenuItem value="heathrow" primaryText="Heathrow - LHR" />
                <MenuItem value="gatwick" primaryText="Gatwick - LGW" />
                <MenuItem value="stansted" primaryText="Stansted - STN" />
                <MenuItem value="luton" primaryText="Luton - LTN" />
              </SelectField >
            </div>

          {this.renderFlightDetailsOrRedirect()}
      </div>
    );
  }
});

module.exports = Page
