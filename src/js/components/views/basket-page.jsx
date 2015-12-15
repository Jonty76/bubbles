import React from 'react';
import { Link } from 'react-router';

let MenuComponent = require('../menu.jsx');

var BasketPage = React.createClass({

  getCheckoutList: function() {
    console.log("this.props.basket:", this.props.basket);
    var filterer = this.props.helpers.filterMenu;
    // var quantityFilterer = this.props.helpers.filterMenuByQuantity;
    var structurer = this.props.helpers.orderMenu;

    var filteredMenu = filterer(this.props.basket, "restaurant", "Pret");
    // var quantityFilteredMenu = quantityFilterer(filteredMenu);
    // var numberOfItemsInBasket = this.props.helpers.numberOfItemsInBasket;
    // var totalPriceOfItemsInBasket = this.props.helpers.totalPriceOfItemsInBasket;
    // console.log("total Price:", totalPriceOfItemsInBasket(filteredMenu));
    // console.log("total Number in Basket:", numberOfItemsInBasket(filteredMenu));
    // console.log("filteredMenu:", filteredMenu);
    // console.log("quantityFilteredMenu:", quantityFilteredMenu);
    return structurer(filteredMenu, "restaurant");
  },

  render: function() {
    var menu = this.getCheckoutList();
    console.log(menu);
    return (
      <div>
        <MenuComponent menu={menu} actions={this.props.actions} inCheckout={true} />
      </div>
    );
  }
});

module.exports = BasketPage;
