import React from 'react';
import { Link } from 'react-router';


var BasketBar = React.createClass({
  render: function(){
    var getPrice = this.props.helpers.totalPriceOfItemsInBasket;
    var formatPrice = this.props.helpers.formatPrice;
    var subtotal = formatPrice(getPrice(this.props.menu));

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
