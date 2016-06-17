import React from 'react';
import { Link } from 'react-router';
import Header from '../header.jsx';

let MenuComponent = require('../menu.jsx')

let OrderDetails = React.createClass({

  getCheckoutList: function() {
    var wholeMenu = this.props.basket;
    var filterer = this.props.helpers.filterMenu;
    var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;
    var quantityFilteredMenu = quantityFilterer(wholeMenu);
    return structurer(quantityFilteredMenu, "restaurant");
  },

  onClick: function(){
    var confirmCancel = confirm("Are you sure you want to cancel your order?");
      if (confirmCancel == true) {
        this.props.actions.clearBasket()
      }
  },

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]
    var menu = this.getCheckoutList();

    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} page={"order-details"}/>

      <div className="button-wrapper center-align">
        <Link to='/basket/select-restaurant'>
          <div className="red-button btn-large">Edit Order</div>
        </Link>
        <Link to='/order-history'>
          <div onClick={this.onClick} className="white-button btn-large">Cancel Order</div>
        </Link>
      </div>
    </div>
    );
  }
});

module.exports = OrderDetails
