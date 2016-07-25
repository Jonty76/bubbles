import React from 'react';
import { Link } from 'react-router';


var BasketBar = React.createClass({

  render: function(){
    var getPrice = this.props.helpers.totalPriceOfItemsInBasket;
    var formatPrice = this.props.helpers.formatPrice;
    var subtotal = formatPrice(getPrice(this.props.menu));


    var itemsInBasket = this.props.helpers.numberOfItemsInBasket(this.props.menu);

    var emptyBasket = (
      <div className="menu-background"></div>
    );

    var notEmptyBasket = (
        <Link to='/basket/page'>
          <div className="btn-large base-button">
            <div className="row">
              <div className="col s7 m8 left-align">VIEW HAMPER</div>
              <div className="col s1 m1">{itemsInBasket}</div>
              <div id="basket-bar-cart" className="col s1 m1">
                <span><img className="piccnicc-shopping-cart" src="/piccniccbasket.png" alt="Piccnicc Logo"></img></span>
              </div>
              <div className="col s3 m2">{subtotal}</div>
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
