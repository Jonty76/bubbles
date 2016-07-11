import React from 'react';
import Header from '../../header.jsx';
import BaseButton from '../../base-button.jsx';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

let expoData  = require('../../../data/expo-data.js');
let smallerFont = {fontSize: "0.8em"}
let smallerField = {fontSize: "0.8em", width: "100px", marginRight: "2em"}


let ExpoLanding = React.createClass({
  getInitialState: function() {
    return {
      selectedExpoCentre: "",
      selectedExpo: "",
      selectedDeliveryDate: "",
      selectedDeliveryTime: "",
      selectedDeliveryHour: "",
      selectedDeliveryMin: "",
      selectedUserType: "",
      deliveryPoint: "Main Entrance"
    };
  },

  componentDidMount: function() {
    var that = this

    $("#expo-landing-page-button").click(function(){
      var isStateEmpty = Object.keys(that.state).map(function(elem){
        if(that.state[elem] === "") {
          return false
        } else {
          return true
        }
      })

      if(isStateEmpty.indexOf(false) > -1){
        $("#validation-text").show()
      } else {
        var location = window.location.origin + window.location.pathname + "#/basket/select-restaurant"
        window.location.href = location
      }
    })
  },

  selectorChange: function (keyName, event, index, value){
    var change = {};
    change[keyName] = value;
    this.setState(change);
    this.props.actions.setExpoState(keyName, event, index, value)
  },

  timeSelectorChange: function(keyName, event, index, value){
    var change = {};
    change[keyName] = value;
    this.setState(change, function(){
      this.timeChange();
    });
  },

  timeChange: function (){
    console.log(this.state.selectedDeliveryHour);
    console.log(this.state.selectedDeliveryMin);
    var dateObj = new Date('Sun, 21 Aug 2016 ' + this.state.selectedDeliveryHour + ':' + this.state.selectedDeliveryMin)
    console.log('dateObj',dateObj);
    var time = Date.parse(dateObj)
    // time variable needs to be in local time
    this.setState({
      selectedDeliveryTime: time
    })
    this.props.actions.setTime(dateObj)
    this.props.actions.setExpoState("deliveryPoint", "", "", "Main Entrance")
  },

  tooSoonCheck: function () {
    var formattedSelectedDate = new Date(this.state.selectedDeliveryDate)
    var formattedSelectedTime = new Date(this.state.selectedDeliveryTime)
    console.log(formattedSelectedTime);

    var year = formattedSelectedDate.getFullYear()
    var month = formattedSelectedDate.getMonth()
    var day = formattedSelectedDate.getDate()

    var hour = formattedSelectedTime.getHours()
    var minutes = formattedSelectedTime.getMinutes()

    var selectedDateTime = new Date(year, month, day, hour, minutes)
    var parsedDate = Date.parse(selectedDateTime)

    localStorage.setItem("deliveryTime", parsedDate)

    var now = new Date()
    var diff = new Date(now.getTime() + 45*60000)

    if (parsedDate < Date.parse(diff)) {
      $('#expo-order-too-soon-modal').openModal()
      console.log("time selected is too soon")
      return (false)
    } else {
      console.log("that's fine")
      return (true)
    }
  },

  setStand: function(nothing, value){
    this.setState({
      deliveryPoint: value
    })
    this.props.actions.setStand(nothing, value)
  },

  setExpoCenter: function(event, index, value){
    this.setState({
      selectedExpoCentre: value,
      selectedExpo: "",
      selectedDeliveryDate: ""

    })
    this.props.actions.setExpoCenter(event, index, value)
  },

  renderDeliveryLocation: function(){
    if (this.state.selectedDeliveryTime !== ""){
      if (this.state.selectedUserType !== "") {
        if (this.state.selectedUserType === "attendee") {
          return (
            <div>
              <br></br>
              <p style={smallerFont}>We will deliver your Piccnicc to you</p>
              <p style={smallerFont}>at the Main Entrance to the Exhibition Hall.</p>
            </div>
          )
        } else {
          return (
            <div>
              <TextField className={"material-ui-small-font"} onChange={this.setStand} hintText="Stand Number and Company" floatingLabelText="Stand Number and Company" />
              <p style={smallerFont}>We will deliver your Piccnicc to your Exhibition Stand.</p>
            </div>
          )
        }
      }
    }
  },

  selectUserType: function(){
    if (this.state.selectedDeliveryMin !== "") {
      var orderTimeValid = this.tooSoonCheck()
        if (orderTimeValid) {
          return (
            <SelectField className="dropdown" style={smallerFont} value={this.state.selectedUserType} floatingLabelText="Are you an Exhibitor?" onChange={this.selectorChange.bind(this, 'selectedUserType')}>
              <MenuItem value="exhibitor" primaryText="Yes" />
              <MenuItem value="attendee" primaryText="No" />
            </SelectField>
          )
        } else {
          this.setState({
            selectedDeliveryTime: ""
          })
          return (
            <div></div>
          )
        }
    }
  },

  selectDeliveryTime: function(){
    if (this.state.selectedDeliveryDate !== "") {
     return (
       <div>
       <p id="label" style={{marginRight: "21em", marginTop: "2em", fontSize: "0.6em"}} className="select-date-label">Select Delivery Time</p>

         <SelectField className="dropdown" style={smallerField} value={this.state.selectedDeliveryHour} onChange={this.timeSelectorChange.bind(this, 'selectedDeliveryHour')}>
           <MenuItem value="10" primaryText="10" />
           <MenuItem value="11" primaryText="11" />
           <MenuItem value="12" primaryText="12" />
           <MenuItem value="13" primaryText="13" />
           <MenuItem value="14" primaryText="14" />
           <MenuItem value="15" primaryText="15" />
         </SelectField>

       <SelectField className="dropdown" style={smallerField} value={this.state.selectedDeliveryMin} onChange={this.timeSelectorChange.bind(this, 'selectedDeliveryMin')}>
         <MenuItem value="00" primaryText="00" />
         <MenuItem value="05" primaryText="05" />
         <MenuItem value="10" primaryText="10" />
         <MenuItem value="15" primaryText="15" />
         <MenuItem value="20" primaryText="20" />
         <MenuItem value="25" primaryText="25" />
         <MenuItem value="30" primaryText="30" />
         <MenuItem value="35" primaryText="35" />
         <MenuItem value="40" primaryText="40" />
         <MenuItem value="45" primaryText="45" />
         <MenuItem value="50" primaryText="50" />
         <MenuItem value="55" primaryText="55" />
       </SelectField>

      </div>
      )
    }
  },

  renderDeliveryDateOptions: function(){
    var dates = expoData[this.state.selectedExpoCentre][this.state.selectedExpo].dates
    return dates.map(function(date){
      var t = new Date(date)
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var month = months[t.getMonth()]
      var formattedDate = t.getDate() + " " + month + " " + t.getFullYear()
      return (
        <MenuItem value={date} style={smallerFont} primaryText={formattedDate} key={date}/>
      )
    })
  },

  selectDeliveryDate: function(){
    if (this.state.selectedExpo !== "") {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.state.selectedDeliveryDate} floatingLabelText="Select Delivery Date" onChange={this.selectorChange.bind(this, 'selectedDeliveryDate')}>
            {this.renderDeliveryDateOptions()}
          </SelectField >
        </div>
      )
    }
  },

  renderExpo: function() {
    var selectedExpoCentre = this.state.selectedExpoCentre
    var filteredExpos = Object.keys(expoData[selectedExpoCentre])
    return filteredExpos.map(function(expo){
      var name = expoData[selectedExpoCentre][expo].name

      return (
        <MenuItem value={expo} style={smallerFont} primaryText={name} key={name}/>
      )
    })
  },

  selectExpo: function() {
    if (this.state.selectedExpoCentre !== "") {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpo} floatingLabelText="Select Exhibition" onChange={this.selectorChange.bind(this, 'selectedExpo')}>
            {this.renderExpo()}
          </SelectField >
        </div>
      )
    }
  },

  renderExpoCentre: function() {
    return Object.keys(expoData).map(function(venue){
      return (
        <MenuItem value={venue} style={smallerFont} primaryText={venue} key={venue}/>
      )
    })
  },

  selectExpoCentre: function(){
    return (
      <div>
        <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpoCentre} floatingLabelText="Select Exhibition Centre" onChange={this.setExpoCenter}>
          {this.renderExpoCentre()}
        </SelectField >
      </div>
    )
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    try {
      localStorage.setItem("privateBrowsing", false)
      return (
        <div>
          <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
          <div className="center-align desktop-container custom-container">
            <div className="content-container">
              <div className="question-container">
                <p className="standard-question-style">Hampers of Happiness, Delivered </p>
              </div>
                <div className="center-align">
                  <p id="validation-text" className="validation-text center-align">Please fill in all fields!</p>

                  {this.selectExpoCentre()}

                  {this.selectExpo()}

                  {this.selectDeliveryDate()}

                  {this.selectDeliveryTime()}

                  {this.selectUserType()}

                  {this.renderDeliveryLocation()}

                </div>

                <div id="expo-order-too-soon-modal" className="modal">
                  <div className="flight-too-soon-content">
                      <div className="flight-too-soon-text">
                        <p className="top-line">You're trying to order for less than forty-five minutes time.</p>
                        <p>Unfortunately, that doesn't give us quite enough time to have your order made up, collected and delivered to you.</p>
                        <p>Please select another time and try again.</p>

                        <a href="#!" className="modal-action modal-close btn-flat">Close</a>
                      </div>
                  </div>
                </div>

            </div>

          </div>

          <div>
            <div id="expo-landing-page-button" className="waves-effect waves-light base-button btn-large">Next</div>
          </div>
        </div>
      )
    } catch(err) {
      return (
        <div>
          <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
          <div className="center-align">

            <p id="large-p">You are using private browsing. Please turn off private browsing to use Piccnicc.</p>

            <div className="">
              <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
            </div>
          </div>
        </div>
      )
    }
  }
});

module.exports = ExpoLanding;
