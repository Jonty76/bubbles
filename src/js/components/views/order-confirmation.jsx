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
        <p className="view-text">
          <b>Thank you for your order, your delivery is now being processed.</b>
          <br/>
          <br/>
          A confirmation email has been sent to jonny.g@hotmail.com
          <br/>
          Total Amount: {this.props.helpers.formatPrice(getPrice())}
        </p>
        </div>
        <Link to="/select-airport">
          <div className="next-button">ORDER AGAIN</div>
        </Link>
      </div>
    );
  }
});

module.exports = OrderPage;
