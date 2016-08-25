import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';


let orderStatusObject = [
  {
    orderIcon: "shopping_basket",
    orderCircle: 0,
    orderStatus: "Order Confirmed",
    orderExplainer: "We've recieved your order.",
    orderExplainerTwo: "Watch here for lip-licking updates."
  },
  {
    orderIcon: "kitchen",
    orderCircle: 1,
    orderStatus: "Being Freshly Prepared",
    orderExplainer: "Your order is being made up by the restaurant(s).",
    orderExplainerTwo: "You still have time to grab some Duty Free!"
  },
  {
    orderIcon: "directions_run",
    orderCircle: 2,
    orderStatus: "Hamper On Its Way",
    orderExplainer: "Your Hamper is winging (!) its way",
    orderExplainerTwo: "to your Piccnicc Point."
  },
  {
    orderIcon: "local_dining",
    orderCircle: 3,
    orderStatus: "Piccnicc Time",
    orderExplainer: "Your Hamper Awaits!",
    orderExplainerTwo: "Come and grab it…"
  },
  {
    orderIcon: "check_box",
    orderCircle: 4,
    orderStatus: "Already Picced Up!",
    orderExplainer: "Your Hamper has been collected.",
    orderExplainerTwo: "Happy Travels…"
  }
]


let OrderIcon = React.createClass({
  render: function() {
    return(
      <div className="center-align" >
        <span><i className="order-status-icon material-icons">{this.props.icon}</i></span>
      </div>
    )
  }
})


let OrderCircle = React.createClass({
  render: function() {
    return (
      <div>
        <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
        <Stepper activeStep={this.props.stepIndex}>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
        </Stepper>
        </div>
      </div>
    );
  }
})


let OrderStatus = React.createClass({
  render: function() {
    return(
      <div>
        <div className="order-status">{this.props.status}</div>
        <div className="order-explainer">{this.props.explainer}</div>
        <div className="order-explainer">{this.props.explainerTwo}</div>
      </div>
    )
  }
})


let OrderTrack = React.createClass({
  getInitialState: function() {

      //this if block is for demo purposes only - see comment in order-track-complete.jsx
      var stepIndex;
      if (this.props.stepIndex === 4) {
        stepIndex = this.props.stepIndex;
      } else {
        stepIndex = 0;
      }

      return {
        stepIndex: stepIndex
      };
  },

  componentDidMount: function(){
    var that = this
    document.getElementById('order-track-page').addEventListener("click", function(){
      that.handleNext()
    })
  },

  handleNext: function() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1
    });
  },

  renderstepIndex: function() {
    var stepIndex = this.state.stepIndex

    var activeStatus = orderStatusObject.find(function(status){
      if (stepIndex === status.orderCircle) {
        return status
      }
   })

   return (
       <div className="valign center-this">
         <OrderIcon icon={activeStatus.orderIcon} stepIndex={this.state.stepIndex}/>
         <OrderCircle circleNumber={activeStatus.orderCircle} stepIndex={this.state.stepIndex}/>
         <OrderStatus
           status={activeStatus.orderStatus}
           explainer={activeStatus.orderExplainer}
           explainerTwo={activeStatus.orderExplainerTwo}
           stepIndex={this.state.stepIndex}
          />
       </div>

   )

},



  render: function() {
    var burgerMenuOptions = ["About+/about", "Start Again+/airport", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    var mapOrRate;
    var button;
    if (this.props.complete) {
      mapOrRate = <p>[Rate your Piccnicc]</p>
      button = <div></div>
    } else {
      mapOrRate = <Link className="map-link" to="/map-view">Picc Up Your Hamper Here</Link>
      button = <Link to="/order-details"><div className="base-button btn-large">View Order Details</div></Link>
    }

    return (
      <div className="desktop-container">
        <Header headerTheme={"whiteNav"} text={"Track Order"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div id="order-track-page" className="order-track-container center-align">
          <div className="valign-wrapper items-container">
            {this.renderstepIndex()}
          </div>
            {mapOrRate}
        </div>

            {button}
      </div>
    );
  }
});

module.exports = OrderTrack
