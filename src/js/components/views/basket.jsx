import React from 'react';
import { Link } from 'react-router';

let FoodItem = require('../food-item.jsx').FoodItem;

let Basket = React.createClass({
  render: function() {
    var actions = this.props.actions;
    var menu = this.props.basket.map(function(item) {
      var props = {
        actions: actions,
        details: {
         id: item.id,
         price: item.price,
         displayName: item.name,
         numberOrdered: item.quantityOrdered
        }
      };
      return (
        <FoodItem key={item.id} {...props} />
      );
    });
    console.log(menu);
    return (
      <div>
        <p>Insert actual order functionality here!</p>
        <p>You have filled your basket!!</p>
        <Link to="/login">
          <button>CHECKOUT</button>
        </Link>
        <div>
          {menu}
        </div>
      </div>
    );
  }
});

module.exports = Basket;
