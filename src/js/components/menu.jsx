import React from 'react';
import { FoodType } from './food-type.jsx';
import { Link } from 'react-router';

let Menu = React.createClass({
  render: function() {

    return (
      <div>
        {this.props.menu.map(function(foodType) {
          return (
            <div className="menu-section">
              <FoodType {...foodType} actions={this.props.actions} inCheckout={this.props.inCheckout} />
            </div>
          );
        }.bind(this))}
        <div>
          <Link to='/basket/select-menu'>
            <div className="order-more-link pull-left"><h4>Order More</h4></div>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Menu;
