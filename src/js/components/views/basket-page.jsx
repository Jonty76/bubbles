import React from 'react';
import { Link } from 'react-router';

let MenuComponent = require('../menu.jsx');

var BasketPage = React.createClass({

  getCheckoutList: function() {
    console.log("this.props.basket:", this.props.basket);
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
        if(result.indexOf(item) < 0 ) {
         result.push(item);
        }
      });
      return result.length * 150;
  },

  render: function() {
    console.log("heyyyyyyyy", this.getCheckoutList());
    var menu = this.getCheckoutList();
    var deliveryFee = this.getDeliveryFee(menu);
    var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
    var total = deliveryFee + foodSubtotal;
    console.log("LLLL", deliveryFee);
    console.log(menu);
    return (
      <div>
        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} />
        <div>Subtotal: {this.props.helpers.totalPriceOfItemsInBasket(this.props.basket)}</div>
        <div>Delivery Fee: {deliveryFee}</div>
        <div>Total: {total}</div>
        <Link to='/login'>
          <div className='next-button'>CHECKOUT</div>
        </Link>
      </div>
    );
  }
});

module.exports = BasketPage;
