import React from 'react';
import { Link } from 'react-router';


var BasketBar = React.createClass({
  render: function(){
    var pounds = price => Math.floor(price/100);
    var pad = (price, digits) => price.length < digits ? pad('0' + price, digits) : price;
    var pence = price => pad((price - 100 * pounds(price)).toString(), 2);
    var formatPrice = price => '£' + pounds(price) + '.' + pence(price);
    var subtotal = formatPrice(this.props.helpers.totalPriceOfItemsInBasket(this.props.menu));

    var inlineStyle = {
      position: 'fixed',
      bottom: 0,
      display: 'inline',
      width: '100%',
      backgroundColor: 'lightgrey' 
    };

    var itemsInBasket = this.props.helpers.numberOfItemsInBasket(this.props.menu);

    var emptyBasket = (
      <div></div>
    );

    var notEmptyBasket = (
        <Link to='/basket/page'>
          <div style={inlineStyle}>
            <span>VIEW BASKET</span>
            <span className='pull-right'>{subtotal}</span>
            <span className='pull-right glyphicon glyphicon-shopping-cart'>{itemsInBasket}</span>
          </div>
        </Link>
    );
    return (
      itemsInBasket > 0 ? notEmptyBasket : emptyBasket
    );
  }
});

module.exports = BasketBar;
