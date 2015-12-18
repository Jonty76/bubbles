import React from 'react';
import { Link } from 'react-router';
import {getPrice} from '../../savePrice.js';


var OrderPage = React.createClass({
  render: function() {
    // var calculatePrice = this.props.helpers.totalPriceOfItemsInBasket;
    // var price = calculatePrice(this.props.basket);

    return (
      <div>
        <div className="content-wrapper">
          <p>Thank you for your order, your delivery is now being processed.</p>
          <p>A confirmation email has been sent to user@example.com</p>
          <p> price: {this.props.helpers.formatPrice(getPrice())} </p>
        </div>
        <Link to="/select-airport">
          <div className="next-button">ORDER AGAIN</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderPage;
