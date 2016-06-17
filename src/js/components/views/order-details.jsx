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

  render: function() {
    var burgerMenuOptions = ["About+/about", "Create Order+/", "Order History+/order-history", "Logout+/login"]
    var menu = this.getCheckoutList();

    return (
      <div className="grey-background">
        <Header headerTheme={"whiteNav"} text={"Order Details"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>

        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} />
        <Link to='/basket/select-restaurant'><button>Edit Order</button></Link>
        <button onClick={this.props.actions.clearBasket}>Cancel Order</button>
    </div>
    );
  }
});

module.exports = OrderDetails
