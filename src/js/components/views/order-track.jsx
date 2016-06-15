import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';


let orderStatusObject = [
  {
    orderIcon: "shopping_basket",
    orderCircle: "1",
    orderStatus: "Order Confirmed",
    orderExplainer: "We've recieved your order"
  },
  {
    orderIcon: "kitchen",
    orderCircle: "2",
    orderStatus: "Being Freshly Prepared",
    orderExplainer: "Your order is being made up by your chosen restaurant"
  },
  {
    orderIcon: "directions_run",
    orderCircle: "3",
    orderStatus: "Hamper On Its Way",
    orderExplainer: "Our piccniccers are taking your order to your pick up"
  },
  {
    orderIcon: "local_dining",
    orderCircle: "4",
    orderStatus: "Piccnicc Time",
    orderExplainer: "Pick up your order when you are ready"
  },
  {
    orderIcon: "check_box",
    orderCircle: "5",
    orderStatus: "Already Picced Up!",
    orderExplainer: "This order has been picked up"
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
    return(
      <div>
        <HorizontalLinearStepper />
      </div>


    )
  }
})


let HorizontalLinearStepper = React.createClass({

  getInitialState: function(){
    return {
        finished: false,
        stepIndex: 0
      }
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


  render: function() {
    const {stepIndex} = this.state;

    return (
      <div style={{width: '70%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
          <Step><StepLabel></StepLabel></Step>
        </Stepper>
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
      </div>
    )
  }
})


let OrderTrack = React.createClass({
  getInitialState: function() {
      return {
        orderPosition: "2"
      };
  },

  renderOrderPosition: function() {
    var orderPosition = this.state.orderPosition

    var activeStatus = orderStatusObject.find(function(status){
      console.log("key>>>>", status, orderPosition)

      if (orderPosition === status.orderCircle) {
        console.log("it works", status.orderStatus)
        return status
      }
   })

   return (
       <div className="valign center-this">
         <OrderIcon icon={activeStatus.orderIcon} />
         <OrderCircle circleNumber={activeStatus.orderCircle} />
         <OrderStatus status={activeStatus.orderStatus} explainer={activeStatus.orderExplainer}/>
       </div>

   )

   console.log("active status>>>>>>", activeStatus);

},



  render: function() {
    return (
      <div>
        <Header text={"Track Order"}/>
        <div id="order-track-page" className="order-track-container center-align">
          <div className="valign-wrapper items-container">
            {this.renderOrderPosition()}
          </div>
          <div>Click to see map of pick up points here</div>
        </div>
        <Link to="/">
          <div className="base-button btn-large">View Order Details</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderTrack
