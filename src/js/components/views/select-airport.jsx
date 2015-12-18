import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import { Link } from 'react-router';
import Slogan from '../slogan.jsx';



let Selector = React.createClass({
 render: function() {
   let airportOptions = [
     {label : "Select Airport"},
     {label : "Heathrow Airport - LHR"},
     {label : "Gatwick Airport - LGW"}
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

let LinkToFlightDetails = React.createClass({
  render: function() {
    return (
      <Link to={this.props.nextLink}>
        <div className="next-button"> GO </div>
      </Link>
    );
  }
});

let Page = React.createClass({
  getInitialState: function() {
    return {
      nextLink: '/airport-not-served'
    };
  },

  selectAirport: function(airport) {
    var link = (airport === 'Gatwick') ? '/select-flight' : '/airport-not-served';
    this.setState({
      nextLink: link
    });
  },

  selectorChange: function(name, value) {
    this.selectAirport(value);
  },

  render: function() {
    return (
      <div>
        <Slogan />
        <p className="view-text"> WHICH AIRPORT ARE YOU FLYING FROM? </p>
        <Formsy.Form>
          <fieldset>
            <Selector onChange={this.selectorChange}/>
          </fieldset>
        </Formsy.Form>
        <LinkToFlightDetails nextLink={this.state.nextLink} />
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
