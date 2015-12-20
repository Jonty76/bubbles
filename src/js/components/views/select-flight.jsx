import React from 'react';
import Formsy from 'formsy-react';
import {Select, Input} from 'formsy-react-components';
import { Link } from 'react-router';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

let Selector = React.createClass({
  render: function() {
    let airlineOptions = [
      {
        label: "Choose Airline"
      }, {
        label: "British Airways"
      }, {
        label: "Iberia"
      }, {
        label: "Air Berlin"
      }, {
        label: "Norwegian Air"
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
        label: "Select Flight Number"
      }, {
        label: "BA2540"
      }, {
        label: "BA2740"
      }, {
        label: "BA2612"
      }
    ];

    let iberiaflightNumberOptions = [
      {
        label: "Select Flight Number"
      }, {
        label: "IB5660"
      }, {
        label: "IB3717"
      }, {
        label: "IB5855"
      }
    ];
    let airBerlinflightNumberOptions = [
      {
        label: "Select Flight Number"
      }, {
        label: "AB5198"
      }, {
        label: "AB5208"
      }, {
        label: "AB5189"
      }
    ];
    let norwegianAirFlightNumberOptions = [
      {
        label: "Select Flight Number"
      }, {
        label: "DY7015"
      }, {
        label: "DY4442"
      }, {
        label: "DY1341"
      }
    ];
    var flightNumberOptions;

    if (this.props.airline === "British Airways"){
      flightNumberOptions=baflightNumberOptions;
    } else if (this.props.airline === "Iberia"){
      flightNumberOptions= iberiaflightNumberOptions;
    } else if (this.props.airline === "Air Berlin"){
      flightNumberOptions= airBerlinflightNumberOptions;
    } else if (this.props.airline === "Norwegian Air"){
      flightNumberOptions= norwegianAirFlightNumberOptions
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

    if(this.props.flightNumber === 'Flight Number: BA2540'){
      var destinationAirport = (
        <div>
          <p>To: FCO Rome</p>
          <p>Time: 15:25</p>
        </div>
      );
        }

    if(this.props.flightNumber === 'Flight Number: BA2740') {
      var destinationAirport = (
        <div>
          <p>To: GVA Geneva</p>
          <p>Time: 14:45</p>
        </div>
      );
        }

    if (this.props.flightNumber === 'Flight Number: IB5660') {
      var destinationAirport = (
        <div>
        <p>To: BCN Barcelona</p>
        <p>Time: 21:00</p>
        </div>
      );
    }


    if (this.props.flightNumber === 'Flight Number: IB3717') {
      var destinationAirport = (
        <div>
        <p>To: MAD Madrid</p>
        <p>Time: 20:15</p>
        </div>
      );
    }

    if (this.props.flightNumber === 'Flight Number: AB5198') {
     var destinationAirport = (
       <div>
         <p>To: EDI Edinburgh</p>
         <p>Time: 20:50</p>
       </div>
     );
   }

   if (this.props.flightNumber === 'Flight Number: AB5208') {
    var destinationAirport = (
      <div>
        <p>To: GLA Glasgow</p>
        <p>Time: 19:35</p>
      </div>
    );
  }


     if (this.props.flightNumber === 'Flight Number: DY4442') {
      var destinationAirport = (
        <div>
          <p>To: GOT Gothenburg Landvetter</p>
          <p>Time: 20:40</p>
        </div>
      );
    }
     if (this.props.flightNumber === 'Flight Number: DY7015') {
      var destinationAirport = (
        <div>
          <p>To: JFK John F Kennedy International</p>
          <p>Time: 17:10</p>
        </div>
      );
    }


    return (
      <div className="flight-details-div">
          <p>Airline: {this.props.airline}</p>
          <p>Flight date: {this.props.flightDate}</p>
          <p>{this.props.flightNumber}</p>
          <p>From: LGW London Gatwick</p>
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
        {this.state.flightDetails}
      </div>
  )},


  flightDetailsOnPage: function(newProps) {
    {(newProps.flightNumber==="Flight Number: BA2612" ||newProps.flightNumber==="Flight Number: DY1341" ||newProps.flightNumber==="Flight Number: AB5189" ||newProps.flightNumber==="Flight Number: IB5855")?
        (this.setState({
          flightDetails: (
            <div>
              <p className = 'view-text'> Your flight departs in less than one hour. Unfortunately, that doesn't give us quite enough time to have your order made up, collected and delivered in good time for you to board, so we can't accept your order this time.
                Please try again next time you fly, just give us a little bit more notice - you can book any time up to 60 minutes before scheduled take-off.
                <br/>
                Have  a safe flight,
                <br/>
                Piccnicc</p>
              <Link to="/select-airport">
                <div className="next-button" >RETURN TO HOMEPAGE</div>
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
        <Link to="/basket/select-menu">
            <div className="next-button" >Confirm</div>
          </Link>
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
    var paddingLeft = {
      paddingLeft: '2.4em'
    };

    return (
      <div>
        <p className="view-text">PLEASE ENTER YOUR FLIGHT DETAILS</p>
        <Formsy.Form>
          <fieldset>
            <Selector onChange={this.selectorChange} />
          </fieldset>
        </Formsy.Form>
        <p style={paddingLeft}>Date of Flight</p>
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
