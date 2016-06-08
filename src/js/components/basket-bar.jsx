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
          <div className="btn-large base-button">
            <div className="row">
              <div className="col s8 left-align">VIEW HAMPER</div>
              <div id="basket-bar-cart" className="col s1 glyphicon glyphicon-shopping-cart">{itemsInBasket}</div>
              <div className="col s3">{subtotal}</div>
            </div>
          </div>


        </Link>
    );
    return (
      itemsInBasket > 0 ? notEmptyBasket : emptyBasket
    );
  }
});

module.exports = BasketBar;
