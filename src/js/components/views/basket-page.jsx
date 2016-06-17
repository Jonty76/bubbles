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
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]

    var adjustMargin = {
      marginBottom: "0",
      marginTop: "15px"
    }
    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Your Hamper"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} page={"basket-page"}/>
        <div className="total right-align">
          <p>Subtotal: {formatPrice(foodSubtotal)}</p>
          <p>Delivery Fee: {formatPrice(deliveryFee)}</p>
          <p><strong>Total: {formatPrice(total)}</strong></p>
        </div>

        <div className="button-wrapper center-align">
          <Link to='/basket/select-restaurant'>
            <div className="white-button btn-large">Order from elsewhere</div>
          </Link>
          <Link to='/payment'>
            <div style={adjustMargin} className="btn-large red-button"> CHECKOUT </div>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = BasketPage;
