import React from 'react';
import { Link } from 'react-router';


var BasketBar = React.createClass({
  render: function(){
    var getPrice = this.props.helpers.totalPriceOfItemsInBasket;
    var formatPrice = this.props.helpers.formatPrice;
    var subtotal = formatPrice(getPrice(this.props.menu));


    var itemsInBasket = this.props.helpers.numberOfItemsInBasket(this.props.menu);

    var emptyBasket = (
      <div></div>
    );

    var notEmptyBasket = (
        <Link to='/basket/page'>
          <div className="basket-bar">
            <span className ="basket-bar-text">VIEW BASKET</span>
            <span className='pull-right basket-bar-text'>{subtotal}</span>
            <span className='pull-right glyphicon glyphicon-shopping-cart basket-bar-cart'>{itemsInBasket}</span>
          </div>
        </Link>
    );
    return (
      itemsInBasket > 0 ? notEmptyBasket : emptyBasket
    );
  }
});

module.exports = BasketBar;
