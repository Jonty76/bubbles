import React from 'react';
import Formsy from 'formsy-react';
import {Select, Input} from 'formsy-react-components';


// import {Router, Route, Link} from 'react-router';
import Calendar from 'react-input-calendar';
import Moment from 'moment';

let Selector = React.createClass({
  render: function() {
    let airlineOptions = [
      {
        label: "British Airways"
      }, {
        label: "Emirates"
      }, {
        label: "Japan Airlines"
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
      <Calendar date={this.props.date} format="DD/MM/YYYY" openOnInputFocus="bool" closeOnSelect="bool" minView="0" onChange={this.props.onChange}/>

  )}
});


let FlightNumberSelector = React.createClass({
  render: function() {
    let baflightNumberOptions = [
      {
        label: ""
      }, {
        label: "BA350"
      }, {
        label: "BA101"
      }, {
        label: "BA100"
      }
    ];

    let emiratesflightNumberOptions = [
      {
        label: ""
      }, {
        label: "EK230"
      }, {
        label: "EK401"
      }, {
        label: "EK650"
      }
    ];
    let japanflightNumberOptions = [
      {
        label: ""
      }, {
        label: "JL371"
      }, {
        label: "JL721"
      }, {
        label: "JL090"
      }
    ];
    let southafricaflightNumberOptions = [
      {
        label: ""
      }, {
        label: "SAA650"
      }, {
        label: "SAA151"
      }, {
        label: "SAA887"
      }
    ];
    var flightNumberOptions;

    if (this.props.airline === "British Airways"){
      flightNumberOptions=baflightNumberOptions;
    } else if (this.props.airline === "Emirates"){
      flightNumberOptions= emiratesflightNumberOptions;
    } else if (this.props.airline === "Japan Airlines"){
      flightNumberOptions= japanflightNumberOptions;
    } else if (this.props.airline === "South African Airways"){
      flightNumberOptions= southafricaflightNumberOptions
    }

  if (this.props.isDateSelected && this.props.isAirlineSelected) {

          return (
            <Select name="flightNumberSelector" options={flightNumberOptions}  />
          );

    } else {
      return <p> </p>;
    }
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


let DetailsController = React.createClass({
  getInitialState: function(){
    return {
      flightDetails:"Enter Flight"
    };
  },
  render:function(){
    return (
      <div>
        <button class="btn btn-primary"  onClick={this.flightDetailsOnPage}>GO</button>
        {this.state.flightDetails}
      </div>
    )

  },

  flightDetailsOnPage: function() {
    this.setState({
      flightDetails: (
        <FlightDetails
          airline={this.props.airline}
          flightNumber={this.props.flightNumber}
          flightDate={this.props.flightDate}
        />
      )
    });
  }
});


let Page = React.createClass({
  getInitialState: function(){
    return {
      userAirline: "",
      isUserAirlineSelected: false,
      userFlightDate: Moment().format('L'),
      isUserFlightDateSelected: false,
      userFlightNumber: ""
    };
  },

  selectAirline: function(airline){
    this.setState({
      userAirline: airline,
      isUserAirlineSelected: true
    });
  },

  selectorChange: function(name, value){
    this.selectAirline(value);
  },

  // selectFlightNumber: function(number){
  //   this.setState({
  //     userFlightNumber: "Flight Number: " + number +", "
  //   });
  // },
  //
  //
  // flightNumberSelectorChange: function(name, value){
  //   this.selectFlightNumber(value);
  // },

  inputDate: function(flightDate){
    this.setState({
      isUserFlightDateSelected: true,
      userFlightDate : "This is your flight date: "  + flightDate + ", "
    });
  },

  calendarInputChange: function(value){
    this.inputDate(value);
  },

  render: function() {
    return (
      <div>
        <Formsy.Form>
          <fieldset>
            <Selector onChange={this.selectorChange} />
          </fieldset>
        </Formsy.Form>
        <CalendarInput onChange={this.calendarInputChange} date={this.state.userFlightDate} />
        <Formsy.Form>
        <FlightNumberSelector isDateSelected={this.state.isUserFlightDateSelected}
        airline = {this.state.userAirline}
        isAirlineSelected={this.state.isUserAirlineSelected}  />
        </Formsy.Form>
        <DetailsController
          airline = {this.state.userAirline}
          flightDate = {this.state.userFlightDate}
          flightNumber = {this.state.userFlightNumber}
        />
      </div>
    );
  }
});

module.exports = ({
  Page,
  Components: {
    Selector,
    CalendarInput,
    FlightNumberSelector
  }
});
