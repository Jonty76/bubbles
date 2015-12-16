import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import { Link } from 'react-router';


let Selector = React.createClass({
 render: function() {
   let airportOptions = [
     {label : "Heathrow"},
     {label : "Gatwick"}
   ];
   return (
     <div>
       <p className = 'view-text'> Please select your airport </p>
     <Select
       name="airportSelector"
       options={airportOptions}
       onChange={this.props.onChange}
     />
 </div>
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
