import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx');

var BasketPage = React.createClass({

  componentDidMount: function(){
    var addClass = document.getElementsByClassName("add");
    for (var i = 0; i < addClass.length; i++) {
      addClass[i].style.display = "none"
    }
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

  render: function() {
    var menu = this.getCheckoutList();
    var deliveryFee = this.getDeliveryFee(menu);
    var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
    var formatPrice = this.props.helpers.formatPrice;
    var total = deliveryFee + foodSubtotal;
    return (
      <div className="custom-container menu-background">
        <Header headerTheme={"whiteNav"} text={"Your Hamper"} iconRight={"menu"} iconLeft={"arrow_back"}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} />
        <div className="total right-align">
          <p>Subtotal: {formatPrice(foodSubtotal)}</p>
          <p>Delivery Fee: {formatPrice(deliveryFee)}</p>
          <p><strong>Total: {formatPrice(total)}</strong></p>
        </div>

        <Link to='/basket/select-restaurant'>
          <br/>
          <p className="small-text"><u>Add to your order from another restaurant?</u></p>
          <br/>
        </Link>

        <Link to='/payment'>
          <div className="btn-large base-button"> CHECKOUT </div>
        </Link>
      </div>
    );
  }
});

module.exports = BasketPage;
