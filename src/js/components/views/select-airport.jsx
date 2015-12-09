import React from 'react';
import Formsy from 'formsy-react';
import { Select } from 'formsy-react-components';
import { Link } from 'react-router';

let testFunc = function(name, value) {
  console.log("selector value changed!!!, now we heve this data:");
  console.log("name: ", name);
  console.log("value: ", value);
};

let Selector = React.createClass({
 render: function() {
   let airportOptions = [
     {label : "Heathrow"},
     {label : "Gatwick"}
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
        <button> Go </button>
      </Link>
    );
  }
});

let Page = React.createClass({
  getInitialState: function() {
    return {
      nextLink: '/airportNotServed'
    };
  },
  
  selectAirport: function(airport) {
    var link = (airport === 'Gatwick') ? '/flightDetails' : '/airportNotServed';
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
            <br />
            <LinkToFlightDetails nextLink={this.state.nextLink} />
          </fieldset>
        </Formsy.Form>
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
