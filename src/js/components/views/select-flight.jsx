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


let FlightNumberSelector = React.createClass({
  render: function() {
    let flightNumberOptions = [
      {
        label: " "
      }, {
        label: "BA350"
      }, {
        label: "BA101"
      }, {
        label: "BA100"
      }
    ];

  if (this.props.dateSelected) {
    return (
      <Select name="flightNumberSelector" options = {flightNumberOptions}        />
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

// let FlightNumberDropDownController = React.createClass({
//   getInitialState: function (){
//     return{
//       flightNumberDropDown:""
//     };
//   },
//   render: function(){
//     return (
//       <div>
//         {this.state.flightNumberDropDown}
//       </div>
//     )
//   },

  // flightNumberDropDownOnPage: function(){
//     this.setState({
//       flightNumberDropDown: (
//         <FlightNumberSelector
//           flightNumberOptions={this.props.flightNumberOptions}
//           dateSelected={this.props.dateSelected}
//         />
//       )
//     })
//   }
// });



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
      userFlightDateSelected: false,
      // userFlightNumber: "",
      userFlightDate: ""
    };
  },

  selectAirline: function(airline){
    this.setState({
      userAirline: "Airline: " + airline +", "
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
      userFlightDateSelected: true,
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
        <CalendarInput onChange={this.calendarInputChange} />
        <Formsy.Form>
        <FlightNumberSelector dateSelected={this.state.userFlightDateSelected} />
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
