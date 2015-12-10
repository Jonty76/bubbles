import React from 'react';
import { Link } from 'react-router';

var Basket = React.createClass({
  render: function() {
    return (
      <div>
        <p>Insert actual order functionality here!</p>
        <p>You have filled your basket!!</p>
        <Link to="/login">
          <button>CHECKOUT</button>
        </Link>
      </div>
    );
  }
});

module.exports = Basket;
