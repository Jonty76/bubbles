import React from 'react';
import Formsy from 'formsy-react';
import {Select, Input} from 'formsy-react-components';

// import {Router, Route, Link} from 'react-router';
import Calendar from 'react-input-calendar';



let Selector = React.createClass({
  render: function() {
    let airlineOptions = [
      {
        label: "British Airways"
      }, {
        label: "Emirates"
      }, {
        label: "Air Japan"
      }, {
        label: "South African Airways"
      }
    ];

    return (
      <Select name="airlineSelector" options={airlineOptions} onChange={this.props.onChange}/>
    );
  }
});


let CalendarInput = React.createClass({
  render: function() {
    return (
      <Calendar date="12-09-2015" format="DD/MM/YYYY" openOnInputFocus="bool" closeOnSelect="bool" minView="0" onChange={this.props.onChange}/>

  )}
});

let FlightNumberInput = React.createClass ({
  render: function(){
    return(
      <Input name="flightNumberSelection" value="" placeholder="Flight Number" onChange={this.props.onChange}/>
    )
  }

});

let FlightDetails = React.createClass({
  render: function(){
    return (
      <p>  {this.props.airline}
        {this.props.flightDate}
        {this.props.flightNumber}
       </p>
    )
  }
});


let Page = React.createClass({
  getInitialState: function(){
    return {
      userAirline: "",
      userFlightNumber: "",
      userFlightDate: ""
    };
  },

  selectAirline: function(airline){
    this.setState({
      userAirline: "This is your airline: " + airline +", "
    });
  },

  selectorChange: function(name, value){
    this.selectAirline(value);
  },

  inputDate: function(flightDate){
    this.setState({
      userFlightDate : "This is your flight date: "  + flightDate + ", "
    });
  },

  calendarInputChange: function(value){
    this.inputDate(value);
  },

  inputFlightNumber: function(flightNumber){
    this.setState({
      userFlightNumber: "This is your flight number: " + flightNumber +", "
    });
  },

  flightNumberInputChange: function(name, value){
    this.inputFlightNumber(value);
  },



  render: function() {
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <Selector onChange= {this.selectorChange} />
          </fieldset>
        </Formsy.Form>
        <CalendarInput onChange={this.calendarInputChange} />
        <Formsy.Form>
        <FlightNumberInput onChange= {this.flightNumberInputChange} />
        <input class="btn btn-primary" formnovalidate="" type="submit" value="Go" />
        </Formsy.Form>
        <FlightDetails airline={this.state.userAirline} flightNumber={this.state.userFlightNumber}
          flightDate={this.state.userFlightDate} />
      </div>
    );
  }
});

module.exports = ({
  Page,
  Components: {
    Selector,
    CalendarInput,
    FlightNumberInput
  }
});
