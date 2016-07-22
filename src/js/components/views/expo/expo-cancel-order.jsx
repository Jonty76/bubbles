import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';

var ExpoCancelOrder = React.createClass({

  checkTooSoon: function(deliveryTime, email){
    var now = new Date().getTime()
    var diff = now + 45*60000

    if (deliveryTime < diff) {
      return this.renderTooSoonComponent();
    } else {
      var route = "/cancel-order/" + deliveryTime + "/" + email;
      $.post(route, function(data, status){
      });
      return this.renderCancelComponent();
    }
  },

  renderTooSoonComponent: function(){
    return (
      <div className="custom-container desktop-container center-align">
        <p className="large-p">Your order cannot be cancelled less than 45 minutes before your delivery time.</p>
        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
          <p className="piccnicc-slogan">Hampers of Happiness, Delivered</p>
        </div>
      </div>
    )
  },

  renderCancelComponent: function(){
    return (
      <div className="custom-container desktop-container center-align">
        <p className="large-p">Your order has been successfully cancelled.</p>
        <div className="">
          <img className="logo-container" src="/piccnicclogo.png" alt="Piccnicc Logo"></img>
          <p className="piccnicc-slogan">Hampers of Happiness, Delivered</p>
        </div>
      </div>
    )
  },

  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    var component = this.checkTooSoon(this.props.params.deliveryTime, this.props.params.email);

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Piccnicc"} iconRight={"menu"} iconLeft={""} burgerMenuOptions={burgerMenuOptions}/>
        {component}
      </div>
    );
  }
});

module.exports = ExpoCancelOrder;
