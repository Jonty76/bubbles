import React from 'react';
import Formsy from 'formsy-react';
import {Select, Input} from 'formsy-react-components';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
require('react-datepicker/dist/react-datepicker.css');

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

    if(this.props.flightNumber === 'Flight Number: BA350' || this.props.flightNumber === 'Flight Number: EK401') {
      var destinationAirport = (
        <p>To: DXB Dubai International</p>
      );
        }
    if (this.props.flightNumber === 'Flight Number: BA101') {
      var destinationAirport = (
        <p>To: JFK John F. Kennedy International Airport</p>
      );
    }  if (this.props.flightNumber === 'Flight Number: EK230') {
      var destinationAirport = (
        <p>To: ZVJ Abu Dhabi International</p>
      );
    }

     if (this.props.flightNumber === 'Flight Number: JL371') {
      var destinationAirport = (
        <p>To: ITM Osaka International</p>
      );
    }
     if (this.props.flightNumber === 'Flight Number: JL721') {
      var destinationAirport = (
        <p>To: HND Haneda International</p>
      );
    }
     if (this.props.flightNumber === 'Flight Number: SAA650') {
      var destinationAirport = (
        <p>To: JNB Johannesburg International</p>
      );
    }
     if (this.props.flightNumber === 'Flight Number: SAA151') {
      var destinationAirport = (
        <p>To: CPT Cape Town International</p>
      );
    }

    // var date = new Date (this.props.flightDate);
    // var day = date.getDate();
    // var year = date.getFullYear();
    // var month = date.getMonth()+1;
    // var dateStr = day+"/"+month+"/"+year;

    return (
      <div>
        <p className = 'view-text'>  {this.props.airline} </p>
        <p className = 'view-text'>  Flight date: {this.props.flightDate} </p>
        <p className = 'view-text'>  {this.props.flightNumber} </p>
        <p className= 'view-text'> From: LGW London Gatwick </p>
              {destinationAirport}
      </div>
    )
  }
});


let DetailsController = React.createClass({
  getInitialState: function(){
    return {
      flightDetails:""
    };
  },

  componentWillReceiveProps: function(newProps) {
    let airlineChanged = newProps.isAirlineSelected;
    let dateChanged = newProps.isDateSelected;
    let flightChanged = newProps.isFlightNumberSelected;


    if( airlineChanged && dateChanged && flightChanged){

      this.flightDetailsOnPage(newProps);
    }
  },

  render: function(){
    return (
      <div>
        <p className = "view-text">{this.state.flightDetails}</p>
      </div>
  )},


  flightDetailsOnPage: function(newProps) {
    {(newProps.flightNumber==="Flight Number: BA100" ||newProps.flightNumber==="Flight Number: EK650" ||newProps.flightNumber==="Flight Number: JL090" ||newProps.flightNumber==="Flight Number: SAA887"  )?
        (this.setState({
          flightDetails: (
            <div>
              <p className = 'view-text'> Sorry, your flight is in under an hour. Try next time and have a lovely flight! </p>
              <Link to="/select-airport">
                <div className="next-button" >Return to homepage</div>
              </Link>
            </div>
        )
       })
       ) : (
    this.setState({
      flightDetails: (
        <div>
          <FlightDetails
            airline={newProps.airline}
            flightNumber= {newProps.flightNumber}
            flightDate={newProps.flightDate}
          />
          <Link to="/basket">
            <div className="next-button" >Confirm</div>
          </Link>
          <p className = 'view-text'> Gate: 25</p>
          <p className = 'view-text'> Time: 10:00</p>
          <p className = 'view-text'> Is this correct? </p>
        </div>
      )
    })
  )
}
}
});



let Page = React.createClass({
  getInitialState: function(){
    return {
      userAirline: "",
      isUserAirlineSelected: false,
      userFlightDate: Moment().format('DD/MM/YYYY'),
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
      userFlightNumber: "Flight Number: " + number

    });

  },


  flightNumberSelectorChange: function(name, value){
    this.selectFlightNumber(value);
  },

  inputDate: function(flightDate){
    this.setState({
      isUserFlightDateSelected: true,
      userFlightDate : flightDate
    });
  },

  calendarInputChange: function(value){
    var date = new Date (value);
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var dateStr = day+"/"+month+"/"+year;

    this.inputDate(dateStr);
  },

  render: function() {
    return (
      <div>
        <p className="view-text">PLEASE ENTER YOUR FLIGHT DETAILS</p>
        <Formsy.Form>
          <fieldset>
            <Selector onChange={this.selectorChange} />
          </fieldset>
        </Formsy.Form>
        <p>Date of Flight</p>
        <DatePicker
          onChange={this.calendarInputChange}
          date={this.state.userFlightDate}
          placeholderText={this.state.userFlightDate}
          format="DD/MM/YYYY"
          dateFormatCalendar= 'DD/MM/YYYY'
        />
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
    DatePicker,
    FlightNumberSelector
  }
});
