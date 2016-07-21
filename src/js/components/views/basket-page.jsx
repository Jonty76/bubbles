import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx');

var BasketPage = React.createClass({

  getInitialState: function() {
    return {
      tip: 100
    }
  },

  componentDidMount: function(){
    var that = this
    var tip = this.state.tip
    var addClass = document.getElementsByClassName("add");
    for (var i = 0; i < addClass.length; i++) {
      addClass[i].style.display = "none"
    }
    document.getElementById('add-tip').addEventListener("click", function(){
      if(tip < 300) {
        tip += 100
      } else {
        tip = 300
      }
      that.setState({
        tip: tip
      })
      that.props.actions.setExpoState("tip", "", "", tip)
    })

    document.getElementById('remove-tip').addEventListener("click", function(){
      if(tip > 0) {
        tip -= 100
      } else {
        tip = 0
      }
      that.setState({
        tip: tip
      })
      that.props.actions.setExpoState("tip", "", "", tip)
    })


  },

  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    return structurer(quantityFilteredMenu, "restaurant");
  },

  getDeliveryFee: function(menu) {
    var result = [];
    var fee = menu.map(function(menuitem){
      return menuitem.restaurant;
    }).forEach(function(item) {
        if(result.indexOf(item) <= 0 ) {
         result.push(item);
        }
      });
      return result.length * 150;
  },

  onClick: function(){
    if(this.props.app === "airport") {
      var location = window.location.origin + window.location.pathname + "#/payment"
      window.location.href = location
    } else if (this.props.app === "expo" && this.props.deliveryPoint !== "") {
      this.props.actions.setExpoState("completed", "", "", "completed")
      var location = window.location.origin + window.location.pathname + "#/expo-payment"
      window.location.href = location
    } else {
      var location = window.location.origin + window.location.pathname + "#/"
      window.location.href = location
    }
  },

  render: function() {
    var menu = this.getCheckoutList();
    // var deliveryFee = this.getDeliveryFee(menu);
    var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
    var formatPrice = this.props.helpers.formatPrice;
    // var total = deliveryFee + foodSubtotal;

    var total = foodSubtotal + this.state.tip

    var burgerMenuOptions;
    if(this.props.app === "airport") {
      burgerMenuOptions = ["About+/about", "Start Again+/airport", "Piccnicc Point+/map-view", "Order History+/order-history", "Logout+/login"]
    } else if (this.props.app === "expo") {
      burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    } else {
      burgerMenuOptions = ["About+/expo-about", "Start Again+/", "Order Details+/expo-order-details", "FAQ+/expo-faq"]
    }

    var adjustMargin = {
      marginBottom: "0",
      marginTop: "15px"
    }

    var add = {
      color: '#ED2C31'
    }

    return (
      <div className="grey-background desktop-container">
        <Header headerTheme={"whiteNav"} text={"Your Hamper"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} page={"basket-page"}/>
        <div className="total right-align">
          <p>Subtotal: {formatPrice(foodSubtotal)}</p>
          <p>
            <i id="add-tip" className="material-icons">add</i>
            <i id="remove-tip" className="material-icons">remove</i>
            <p className="tip">Optional Delivery Fee: {formatPrice(this.state.tip)}</p>
          </p>
          <p><strong>Total: {formatPrice(total)}</strong></p>
        </div>

        <div className="button-wrapper center-align">
          <Link to='/basket/select-restaurant'>
            <div className="white-button btn-large">Add from another restaurant</div>
          </Link>
            <div onClick={this.onClick} style={adjustMargin} className="btn-large red-button"> CHECKOUT </div>
        </div>
      </div>
    );
  }
});

module.exports = BasketPage;
