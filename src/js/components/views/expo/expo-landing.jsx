import React from 'react';
import Header from '../../header.jsx';
import BaseButton from '../../base-button.jsx';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';

let expoData  = require('../../../data/expo-data.js');
let smallerFont = {fontSize: "0.8em"}

let ExpoLanding = React.createClass({
  getInitialState: function() {
    return {
      selectedExpo: "",
      selectedDeliveryDate: "",
      selectedDeliveryTime: "",
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

  timeChange: function (nothing, value){
    var time = Date.parse(value)
    this.setState({
      selectedDeliveryTime: time
    })
    this.props.actions.setTime(nothing, value)
    this.props.actions.setExpoState("deliveryPoint", "", "", "Main Entrance")
  },

  tooSoonCheck: function () {
    var formattedSelectedDate = new Date(this.state.selectedDeliveryDate)
    var formattedSelectedTime = new Date(this.state.selectedDeliveryTime)

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
    if (this.state.selectedDeliveryTime !== "") {
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
        <TimePicker
          className={"material-ui-small-font"}
          onChange={this.timeChange}
        />
      </div>
      )
    }
  },

  renderDeliveryDateOptions: function(expoCenter){
    var dates = expoData[expoCenter][this.state.selectedExpo].dates
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

  selectDeliveryDate: function(expoCenter){
    if (this.state.selectedExpo !== "") {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.state.selectedDeliveryDate} floatingLabelText="Select Delivery Date" onChange={this.selectorChange.bind(this, 'selectedDeliveryDate')}>
            {this.renderDeliveryDateOptions(expoCenter)}
          </SelectField >
        </div>
      )
    }
  },

  renderExpo: function(selectedExpoCenter) {
    var filteredExpos = Object.keys(expoData[selectedExpoCenter])
    return filteredExpos.map(function(expo){
      var name = expoData[selectedExpoCenter][expo].name

      return (
        <MenuItem value={expo} style={smallerFont} primaryText={name} key={name}/>
      )
    })
  },

  selectExpo: function(expoCenter) {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.state.selectedExpo} floatingLabelText="Select Exhibition" onChange={this.selectorChange.bind(this, 'selectedExpo')}>
            {this.renderExpo(expoCenter)}
          </SelectField >
        </div>
      )
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    var expoCenter = this.props.selectedExpoCenter;

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

                  {this.selectExpo(expoCenter)}

                  {this.selectDeliveryDate(expoCenter)}

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

  }
});

module.exports = ExpoLanding;
