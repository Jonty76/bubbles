import React from 'react';
import { Link } from 'react-router';
import {getPrice} from '../../savePrice.js';


var OrderPage = React.createClass({
  render: function() {
    // var calculatePrice = this.props.helpers.totalPriceOfItemsInBasket;
    // var price = calculatePrice(this.props.basket);
    var smallerFont = {
      fontSize: '1em',
      marginTop: '-0.05em'
    };
    return (
      <div>
        <div className="content-wrapper">
        <p className="view-text" style={smallerFont}>
          <br/>
          <br/>
          <b>Excellent. Your order has been confirmed*</b>
          <br/>
          <br/>
          One of our Piccnicc Delivery Angels will deliver it to your gate between
          40 and 20 minutes before boarding closes for your flight. They'll leave
          it in a Piccnicc Hamper in one of our cool branded lockers at the gate
          - you'll receive a code by SMS (and email) to open the locker as soon as
          your Hamper's inside.
          <br/>
          <br/>
          Total Amount: {this.props.helpers.formatPrice(getPrice())}
          <br/>
          <br/>
          <b>We hope you enjoy your Piccnicc and wish you a safe flight.</b>
          <br/>
          <br/>
            <div style={smallerFont} className='view-text'>Piccnicc - Hampers of Happiness, Delivered</div>
            <div style={smallerFont} className='view-text'>Visit us at <a href='http://www.piccnicc.com/'>piccnicc.com</a></div>
            <div style={smallerFont} className='view-text'>Follow us on <a href='https://twitter.com/piccniccapp'>twitter.com/piccniccapp</a> #nomoregreychicken</div>
          <br/>
          <b>*Should you need to change or cancel your order for any reason, please
          select your order from our menu and make your changes. Just don't leave it
          to the last minute, as there comes a point - basically, an hour before boarding
          closes - when it's too late for us to change anything.</b>
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
