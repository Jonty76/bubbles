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
    orderExplainerTwo: "Watch here to see it's progress!"
  },
  {
    orderIcon: "kitchen",
    orderCircle: 1,
    orderStatus: "Being Freshly Prepared",
    orderExplainer: "Your order is being made up",
    orderExplainerTwo: "by your chosen restaurant"
  },
  {
    orderIcon: "directions_run",
    orderCircle: 2,
    orderStatus: "Hamper On Its Way",
    orderExplainer: "Our piccniccers are delivering your",
    orderExplainerTwo: "Piccnicc to your pick up point"
  },
  {
    orderIcon: "local_dining",
    orderCircle: 3,
    orderStatus: "Piccnicc Time",
    orderExplainer: "Your order is ready.",
    orderExplainerTwo: "Collect it from your pick up point!"
  },
  {
    orderIcon: "check_box",
    orderCircle: 4,
    orderStatus: "Already Picced Up!",
    orderExplainer: "This order has been picked up",
    orderExplainerTwo: "Happy Travels!"
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
        <div style={{width: '70%'}}>
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
    console.log("on mount")
    var that = this
    document.getElementById('order-track-page').addEventListener("click", function(){
      console.log("on click")
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
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]
    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Track Order"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div id="order-track-page" className="order-track-container center-align">
          <div className="valign-wrapper items-container">
            {this.renderstepIndex()}
          </div>
          <div>Click to see map of pick up points here</div>
        </div>

        <Link to="/order-details">
          <div className="base-button btn-large">View Order Details</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderTrack
