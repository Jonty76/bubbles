import React from 'react';
import { Link } from 'react-router';
import { getPrice } from '../../savePrice.js';
import Header from '../header.jsx';

var activeOrder = []; //to carry to order history page

var OrderPage = React.createClass({
  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    var result = structurer(quantityFilteredMenu, "restaurant");
    activeOrder.push(result); //to carry to order history page
    return result;
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
    // var calculatePrice = this.props.helpers.totalPriceOfItemsInBasket;
    // var price = calculatePrice(this.props.basket);

    var menu = this.getCheckoutList();
    var foodSubtotal = this.props.helpers.totalPriceOfItemsInBasket(this.props.basket);
    var deliveryFee = this.getDeliveryFee(menu);
    var total = foodSubtotal + deliveryFee;
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]
    return (
        <div className="content-wrapper">
        <Header headerTheme={"whiteNav"} text={"Order Confirmed"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="order-confirmed-container center-align">
          <p className="top-line">Delicious!</p>

          <p>Your order for {this.props.helpers.formatPrice(total)} is confirmed and we’ve sent emailed you your receipt with all the usual garnish!</p>

          <p>We hope you enjoy your Piccnicc and wish you a safe flight.</p>

          <p>Should you need to change or cancel your order for any reason, please change your order from the menu button above and make your changes up to an hour before boarding.</p>
        </div>

        <Link to="/order-track">
          <div className="base-button btn-large">Track Your Order</div>
        </Link>
      </div>
    );
  }
});

module.exports = {
  OrderPage : OrderPage,
  activeOrder: activeOrder //to carry to order history page
}
