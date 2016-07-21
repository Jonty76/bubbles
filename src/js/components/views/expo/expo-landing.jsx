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
let rightField = {fontSize: "0.8em", width: "100px", marginRight: "2em", float:"right"}



let ExpoLanding = React.createClass({
  getInitialState: function() {
    return {
      selectedExpo: this.props.selectedExpo,
      selectedDeliveryDate: this.props.selectedDeliveryDate,
      selectedDeliveryTime: this.props.selectedDeliveryTime,
      selectedDeliveryHour: this.props.selectedDeliveryHour,
      selectedDeliveryMin: this.props.selectedDeliveryMin,
      selectedUserType: this.props.selectedUserType,
      deliveryPoint: this.props.deliveryPoint
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
    this.props.actions.setExpoState(keyName, "", "", value)
  },

  timeChange: function (){
    console.log(this.props.selectedDeliveryHour);
    console.log(this.props.selectedDeliveryMin);
    var dateObj = new Date('Sun, 21 Aug 2016 ' + this.props.selectedDeliveryHour + ':' + this.props.selectedDeliveryMin)
    console.log('dateObj',dateObj);
    var time = Date.parse(dateObj)
    // time variable needs to be in local time
    this.setState({
      selectedDeliveryTime: time
    })
    this.props.actions.setTime(dateObj)
  },

  tooSoonCheck: function () {
    var formattedSelectedDate = new Date(this.props.selectedDeliveryDate)
    var formattedSelectedTime = new Date(this.props.selectedDeliveryTime)
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

  renderDeliveryLocation: function(){
    if (this.props.selectedDeliveryTime !== ""){
      if (this.props.selectedUserType !== "") {
        if (this.props.selectedUserType === "attendee") {
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
              <TextField className={"material-ui-small-font"} onChange={this.setStand} value={this.props.deliveryPoint} hintText="Stand Number and Company" floatingLabelText="Stand Number and Company" />
              <p style={smallerFont}>We will deliver your Piccnicc to your Exhibition Stand.</p>
            </div>
          )
        }
      }
    }
  },

  setUserType: function(event, index, value) {
    if(value === "attendee") {
      console.log("value attendee>>", value)
      this.setState({
        selectedUserType: value,
        deliveryPoint: "Main Entrance"
      })
      this.props.actions.setExpoState("selectedUserType", "", "", value)
      this.props.actions.setExpoState("deliveryPoint", "", "", "Main Entrance")
    } else {
      this.setState({
        selectedUserType: value,
        deliveryPoint: ""
      })
      this.props.actions.setExpoState("selectedUserType", "", "", value)
      this.props.actions.setExpoState("deliveryPoint", "", "", "")
    }
  },

  selectUserType: function(){
    if (this.props.selectedDeliveryMin !== "") {
      var orderTimeValid = this.tooSoonCheck()
        if (orderTimeValid) {
          console.log("render exhibitor")
          return (
            <SelectField className="dropdown" style={smallerFont} value={this.props.selectedUserType} floatingLabelText="Are you an Exhibitor?" onChange={this.setUserType}>
              <MenuItem value="exhibitor" primaryText="Yes" />
              <MenuItem value="attendee" primaryText="No" />
            </SelectField>
          )
        } else {
          console.log("don't render exhibitor")
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
    if (this.props.selectedDeliveryDate !== "") {
     return (
       <div>
       <p id="label" style={{marginRight: "21em", marginTop: "2em", fontSize: "0.6em"}} className="select-date-label">Select Delivery Time</p>
       <div className="delivery-time-container">
         <SelectField className="dropdown" style={smallerField} value={this.props.selectedDeliveryHour} onChange={this.timeSelectorChange.bind(this, 'selectedDeliveryHour')}>
           <MenuItem value="10" primaryText="10" />
           <MenuItem value="11" primaryText="11" />
           <MenuItem value="12" primaryText="12" />
           <MenuItem value="13" primaryText="13" />
           <MenuItem value="14" primaryText="14" />
           <MenuItem value="15" primaryText="15" />
         </SelectField>

       <SelectField className="dropdown" style={rightField} value={this.props.selectedDeliveryMin} onChange={this.timeSelectorChange.bind(this, 'selectedDeliveryMin')}>
         <MenuItem value="00" primaryText="00" />
         <MenuItem value="10" primaryText="10" />
         <MenuItem value="20" primaryText="20" />
         <MenuItem value="30" primaryText="30" />
         <MenuItem value="40" primaryText="40" />
         <MenuItem value="50" primaryText="50" />
       </SelectField>
       </div>
      </div>
      )
    }
  },

  renderDeliveryDateOptions: function(expoCenter){
    var dates = expoData[expoCenter][this.props.selectedExpo].dates
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
    if (this.props.selectedExpo !== "") {
      return (
        <div>
          <SelectField className="dropdown" style={smallerFont} value={this.props.selectedDeliveryDate} floatingLabelText="Select Delivery Date" onChange={this.selectorChange.bind(this, 'selectedDeliveryDate')}>
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

  setExpo: function(event, index, value) {
    this.setState({
      selectedExpo: value,
      selectedDeliveryDate: ""
    })
    this.props.actions.setExpoState("selectedExpo", "", "", value)
    this.props.actions.setExpoState("selectedDeliveryDate", "", "", "")
  },

  selectExpo: function(expoCenter) {
    console.log("selected expo>>>>", this.props.selectedExpo)
    return (
      <div>
        <SelectField className="dropdown" style={smallerFont} value={this.props.selectedExpo} floatingLabelText="Select Exhibition" onChange={this.setExpo}>
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
          <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
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
