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
      selectedExpoCentre: "",
      selectedExpo: "",
      selectedDeliveryDate: "",
      selectedDeliveryTime: "",
      selectedUserType: "",
      deliveryPoint: "mainEntrance"
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
    this.props.actions.setExpoState("deliveryPoint", "", "", "mainEntrance")
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
    if (this.state.selectedUserType !== "") {
      if (this.state.selectedUserType === "attendee") {
        return (
          <div>
            <p style={smallerFont}>Your delivery pick up point is here</p>
          </div>
        )
      } else {
        return (
          <div>
            <TextField className={"material-ui-small-font"} onChange={this.setStand} hintText="Stand Number and Company" floatingLabelText="Stand Number and Company" />
            <p style={smallerFont}>We will deliver your Piccnicc to you here</p>
          </div>
        )
      }
    }
  },

  selectUserType: function(){
    if (this.state.selectedDeliveryTime !== "") {
      return (
        <SelectField className="dropdown" style={smallerFont} value={this.state.selectedUserType} floatingLabelText="Vistor or Attendee" onChange={this.selectorChange.bind(this, 'selectedUserType')}>
          <MenuItem value="exhibitor" primaryText="Exhibitor" />
          <MenuItem value="attendee" primaryText="Attendee" />
        </SelectField>
      )
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
          dialogBodyStyle={{width: "180px"}}
        />
      </div>
      )
    }
  },

  renderDeliveryDateOptions: function(){
    var dates = expoData[this.state.selectedExpoCentre][this.state.selectedExpo].dates
    return dates.map(function(date){
      var t = new Date(date)
      console.log(t, "new date")
      console.log("to date string", t.toDateString())
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

    var burgerMenuOptions = ["About+/about", "Logout+/login"]

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


          </div>

        </div>

        <div>
          <div id="expo-landing-page-button" className="waves-effect waves-light base-button btn-large">Next</div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoLanding;
