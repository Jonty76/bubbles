import React from 'react';
import Formsy from 'formsy-react';
import {Select, Input} from 'formsy-react-components';



import { Link } from 'react-router';
import Calendar from 'react-input-calendar';
import Moment from 'moment';

let Selector = React.createClass({
  render: function() {
    let airlineOptions = [
      {
        label: "Choose Airline"
      }, {
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
        label: "Choose Flight Number"
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
            <Select name="flightNumberSelector" options={flightNumberOptions} onChange={this.props.onChange} />
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

  componentWillReceiveProps: function(newProps) {
    let airlineChanged = newProps.isAirlineSelected;
    let dateChanged = newProps.isDateSelected;
    let flightChanged = newProps.isFlightNumberSelected;

    console.log(airlineChanged, dateChanged, flightChanged)

    if( airlineChanged && dateChanged && flightChanged){
      console.log("inside if!!");
      this.flightDetailsOnPage(newProps);
    }
  },

  render: function(){
    console.log("render!!!!");
    return (
      <div>
        {this.state.flightDetails}
      </div>
  )},


  flightDetailsOnPage: function(newProps) {
    console.log("flightDetailsOnPage called");

    this.setState({
      flightDetails: (
        <div>
          <FlightDetails
            airline={newProps.airline}
            flightNumber= {newProps.flightNumber}
            flightDate={newProps.flightDate}
          />
          <Link to="/basket">
            <div className="next-button" >Confirm your flight</div>
          </Link>
        </div>
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
      userFlightNumber: "",
      isUserFlightNumberSelected: false
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

  selectFlightNumber: function(number){
    this.setState({
      isUserFlightNumberSelected: true,
      userFlightNumber: "Flight Number: " + number +", "

    });
    console.log("selectFlightNumber", number);
  },


  flightNumberSelectorChange: function(name, value){
    this.selectFlightNumber(value);
  },

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
        <FlightNumberSelector
         isDateSelected={this.state.isUserFlightDateSelected}
         airline = {this.state.userAirline}
         isAirlineSelected={this.state.isUserAirlineSelected}
         onChange= {this.flightNumberSelectorChange}/>
        </Formsy.Form>
        <DetailsController
          airline = {this.state.userAirline}
          flightDate = {this.state.userFlightDate}
          flightNumber = {this.state.userFlightNumber}
          isAirlineSelected= {this.state.isUserAirlineSelected}
          isDateSelected= {this.state.isUserFlightDateSelected}
          isFlightNumberSelected= {this.state.isUserFlightNumberSelected}
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
