import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoCancelOrder = React.createClass({

  checkTooSoon: function(deliveryTime){
    var now = new Date().getTime()
    var diff = now + 45*60000

    if (deliveryTime < diff) {
      return this.renderTooSoonComponent();
    } else {
      var route = "/cancel-order/" + deliveryTime;
      $.post(route, function(data, status){
      });
      return this.renderCancelComponent();
    }
  },

  renderTooSoonComponent: function(){
    return (
      <div className="custom-container desktop-container center-align">
        <p id="large-p">Your order cannot be cancelled less than 45 minutes before your delivery time.</p>
        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
        </div>
      </div>
    )
  },

  renderCancelComponent: function(){
    return (
      <div className="custom-container desktop-container center-align">
        <p id="large-p">Your order has been successfully cancelled.</p>
        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
        </div>
      </div>
    )
  },

  renderCancelFailedComponent: function(){
    return (
      <div className="custom-container desktop-container center-align">
        <p id="large-p">Your order cannot be cancelled at this time. Please contact jonny@piccnicc.com directly to cancel your order. Please quote your order number when cancelling.</p>
        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
        </div>
      </div>
    )
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Create Order+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    console.log("this.props.params",this.props.params);
    var component = this.checkTooSoon(this.props.params.deliveryTime);

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        {component}
      </div>
    );
  }
});

module.exports = ExpoCancelOrder;
